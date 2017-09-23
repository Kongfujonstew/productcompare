import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from '../components/Main.js';

render(<BrowserRouter
          location={window.location}
        >
          <Main />
        </BrowserRouter>,
  document.getElementById('app'));
