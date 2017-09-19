import React from 'react';
import { render } from 'react-dom';

import { getProductData, isLoggedIn, warnUser } from './js/index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  handlePaste (searchBox) {
    console.log('paste registered on ', searchBox);
  }

  search () {
    this.props.browserAuthenticate('You are logged out. Please log in.');
    if (isLoggedIn()) {
      const url1 = this.refs.searchBox1.innerText;
      const url2 = this.refs.searchBox2.innerText;
      console.log(url1, url2);
      getProductData(url1, url2).then((data) => {
        console.log(data);
      })
    }
  }

  render () {
    return (
      <section className="search">Hello from Search
        <div className="searchDiv" ref="searchBox1" contentEditable onPaste={this.handlePaste.bind(this, 'searchBox1')}></div>
        <div className="searchDiv" ref="searchBox2" contentEditable onPaste={this.handlePaste.bind(this, 'searchBox2')}></div>
        <div className="searchButton invalid"
          onClick={this.search.bind(this)}
        >click to search</div>
      </section>
    )
  }
}

export default Search;
