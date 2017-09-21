import axios from 'axios';

export const getProductData = (url1, url2) => {
  console.log('calling getProductData');
  const api = 'http://localhost:8888/search';
  return axios.post(api, {
    data: {
      url1,
      url2
    }
  }).catch((err) => console.log('getProductData error: ', err))
};
