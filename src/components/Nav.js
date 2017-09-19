import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import navPages from './js/nav.js';

export default () => {
  return (
    <nav>
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
