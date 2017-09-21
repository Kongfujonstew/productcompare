import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import navPages from './js/pageData.js';

export default () => {
  return (
    <nav>
      <img className="logo" src="images/logo.png" alt="logo"/>
      <ul>
        <Link to={'/'}>Home</Link>
        {navPages.map((page, index) => {
          const { title, location } = page;
          return <Link to={location} key={index}>{title}</Link>
          })
        }
      </ul>
    </nav>
  );
};
