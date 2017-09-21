import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from '../redux/reducers/index';
// import { browserHistory } from 'react-router';

import Main from '../components/Main.js';

// const store = createStore(reducers);
// const context = {};

// console.log('app.js bootstraps. store state: ', store.getState());

render(<BrowserRouter
          location={window.location}
          // context={context}
        >
          <Main />
        </BrowserRouter>,
  document.getElementById('app'));
