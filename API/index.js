import axios from 'axios';
import cheerio from 'cheerio';
import productDataPrototype from './productDataObj';

const getHTML = (url) => {
  return axios.get(url);
};

const parseBody = (html) => {
  let productDataObj = new productDataPrototype();
  let $ = cheerio.load(html);

  productDataObj.product = $('#prod_title').text().trim();
  productDataObj.price = $('#product_price').text().trim();
  productDataObj.productDescription = $('.product-description__title').text().trim();
  productDataObj.pictureDataURL = $('#productZoom').attr('data-zoom-image');

  $('.inbox__item').each((index, li) => {
    let inBoxItem = $(li).text().trim();
    productDataObj.inBox.push(inBoxItem);
  });

  $('.specification-table tr').each((index, tr) => {
    let property = $(tr).children().first().text().trim();
    let value = $(tr).children().eq(1).text().trim();
    productDataObj.generalFeatures[property] = value;
  })
  return productDataObj;
};

export default (req, res) => {
  const url1 = req.body.data.url1;
  const url2 = req.body.data.url2;
  let htmlData1;
  let htmlData2;
  let response = {};

  console.log('getting data for: ', url1, url2);

  getHTML(url1).then((data1) => {
    htmlData1 = data1.data;
    const productData1 = parseBody(htmlData1);
    getHTML(url2).then((data2) => {
      htmlData2 = data2.data;
      const productData2 = parseBody(htmlData2);
      console.log('pD1: ', productData1);
      response = { productData1, productData2 };
      res.send(JSON.stringify(response));
    }).catch((err) => console.log('pageData2 error: ', err));
  }).catch((err) => console.log('pageData1 error: ', err));
};
