import React from 'react';
import { Route } from 'react-router-dom';
import Page from './Page';
import navPages from './js/pageData.js';

export default () => {
  return (
    <div>
      {navPages.map((page, index) => {
        const { location } = page;
        return <Route
          path={location}
          exact
          render={(props) => (<Page {...props} page={page}/>)}
          key={index}
        />
      })}
    </div>
  );
};
