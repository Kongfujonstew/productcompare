import axios from 'axios';

const getSinglePageData = (url) => {
  return axios.get(url);
};

const handlePageData = (pageData) => {
  console.log('hPD called');
  pageData = {toes: 10, fingers: 10};

  return pageData;
};

const renderPageOnBrowser = (req, res, data) => {
  res.write(data);
  res.send();
}

export default (req, res) => {
  const { url1, url2 } = req.body.data;
  let pageData1, productData1;
  let pageData2, productData2;
  let response = {};

  getSinglePageData(url1).then((data1) => {
    pageData1 = data1;
    getSinglePageData(url2).then((data2) => {
      pageData2 = data2;
      console.log('WE ARE HERE');
      // renderPageOnBrowser(req, res, pageData1);

      // res.write(data2);
      // res.send();
      // productData1 = handlePageData(pageData1);
      // productData2 = handlePageData(pageData2);
      // response = JSON.stringify({ productData1, productData2});
      res.write('hello');
      res.send();
    });
  });
};


// import axios from 'axios';

// const getSinglePageData = (url) => {
//   return axios.get(url);
// };

// const handlePageData = (pageData) => {
//   console.log('hPD called');
//   pageData = {toes: 10, fingers: 10};

//   return pageData;
// };

// export default (req, res) => {
//   const { url1, url2 } = req.body.data;
//   let pageData1, productData1;
//   let pageData2, productData2;
//   let response;

//   getSinglePageData(url1).then((data1) => {
//     pageData1 = data1;
//     getSinglePageData(url2).then((data2) => {
//       pageData2 = data2;
//       productData1 = handlePageData(pageData1);
//       productData2 = handlePageData(pageData2);
//       response = JSON.stringify({ productData1, productData2});
//       res.send(response);
//     });
//   });
// };
