import axios from 'axios';
import cheerio from 'cheerio';
import productDataPrototype from './productDataObj';

const getHTML = (url) => {
  return axios.get(url);
};

const parseBody = (html) => {
  let productDataObj = productDataPrototype;
  let $ = cheerio.load(html);

  productDataObj.product = $('#prod_title').text();
  productDataObj.price = $('#product_price').text();
  productDataObj.productDescription = $('.product-description__title').text();
  productDataObj.pictureDataURL = $('#productZoom').attr('data-zoom-image');

  $('.inbox__item').each((index, li) => {
    let inBoxItem = $(li).text();
    productDataObj.inBox.push(inBoxItem);
  });

  $('.specification-table tr').each((index, tr) => {
    let property = $(tr).children().first().text();
    let value = $(tr).children().eq(1).text();
    productDataObj.generalFeatures[property] = value;
  })
  
  return productDataObj;
};

export default (req, res) => {
  const { url1, url2 } = req.body.data;
  let htmlData1, productData1;
  let htmlData2, productData2;
  let response = {};

  getHTML(url1).then((data1) => {
    htmlData1 = data1.data;
    productData1 = parseBody(htmlData1);
    getHTML(url2).then((data2) => {
      htmlData2 = data2.data;
      productData2 = parseBody(htmlData2);
      response = { productData1, productData2 };
      res.send(JSON.stringify(response));
    }).catch((err) => console.log('pageData2 error: ', err));
  }).catch((err) => console.log('pageData1 error: ', err));
};
