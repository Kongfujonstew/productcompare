import axios from 'axios';
import cookies from 'browser-cookies';

export const getProductData = (url1, url2) => {
  console.log('calling getProductData');
  const api = 'http://localhost:8888/search';
  return axios.post(api, {
    data: {
      url1,
      url2
    }
  })
};

export const login = () => {
  const api = 'http://localhost:8888/login';
  return axios.post(api);
};

export const logout = () => {
  cookies.set('loggedIn', 'false');
};

export const isLoggedIn = () => {
  return cookies.get('loggedIn') === 'true';
};

export const browserAuthenticate = (main, message='Please log in.') => {
  if (isLoggedIn()) {
    main.setState({
      loggedIn:true
    });
    main.updateUserMessage('You are logged in.');
  } else {
    main.setState({
      loggedIn: false
    });
    main.updateUserMessage(message);
  };
};

export const warnUser = (main, message) => {
  main.setState({
    userMessage: message
  });
};

