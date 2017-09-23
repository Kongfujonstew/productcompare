import axios from 'axios';
import thisurl from './thisurl';

export const getProductData = (url1, url2) => {
  console.log('Searching');
  return axios.post(thisurl + '/search', {
    data: {
      url1,
      url2
    }
  }).catch((err) => console.log('getProductData error: ', err))
};
