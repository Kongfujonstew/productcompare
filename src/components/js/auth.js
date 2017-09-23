import axios from 'axios';
import cookies from 'browser-cookies';
import thisurl from './thisurl';

export const login = () => {
  console.log('Logging user in from server');
  console.log(thisurl);
  return axios.post(thisurl + '/login').catch((err) => console.log('login error: ', err));
};

export const logout = () => {
  console.log('Logging user out.');
  cookies.set('loggedIn', 'false');
};

export const isLoggedIn = () => {
  return cookies.get('loggedIn') === 'true';
};

export const browserAuthenticate = (main, message='Please log in. You must log in to search.') => {
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
