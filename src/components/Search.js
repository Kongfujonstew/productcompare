import React from 'react';
import { render } from 'react-dom';
import { withRouter } from "react-router-dom";
import { isLoggedIn, warnUser } from './js/auth';
import { getProductData } from './js/search';
import Action from './Action';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: {backgroundColor: 'white'},
      color2: {backgroundColor: 'white'},
      showIcon1: false,
      showIcon2: false,
      allowSearch: false
    };
  }

  handlePaste (searchBox, e) {
    e.preventDefault();
    let text = '';
    if (e.clipboardData && e.clipboardData.getData) {
      text = e.clipboardData.getData('text/plain');
    } else if (window.clipboardData && window.clipboardData.getData) {
      text = window.clipboardData.getData('Text');
    };
    this.refs[searchBox].innerText = text.replace(/\s+/g, ' ').trim();
    this.handleChange(searchBox);
  }

  handleChange (searchBox) {
    let num = searchBox[searchBox.length - 1];
    let url1IsValid = this.validURL(this.refs.searchBox1.innerText);
    let url2IsValid = this.validURL(this.refs.searchBox2.innerText);
    this.setState({
      showIcon1: url1IsValid,
      showIcon2: url2IsValid,
      color1: {
        backgroundColor: url1IsValid ? 'forestgreen': 'white',
      },
      color2: {
        backgroundColor: url2IsValid ? 'forestgreen' : 'white',
      },
      allowSearch: url2IsValid && url1IsValid
    });
    if (this.validURL(this.refs['searchBox' + num].innerText)) {this.refs['searchBox' + num].blur()};
  }

  validURL (url) {
    let urlhttps = (url.slice(0, 18) === 'https://www.lazada');
    let urlo = (url.slice(0, 17) === 'http://www.lazada');
    return !!urlo || !!urlhttps;
  }

  search () {
    this.props.browserAuthenticate('You are logged out. Please log in.');
    if (isLoggedIn()) {
      const url1 = this.refs.searchBox1.innerText;
      const url2 = this.refs.searchBox2.innerText;
      if (this.validURL(url1) && this.validURL(url2)) {
        this.props.updateLoadingState(true);
        this.props.history.push("/results");
        getProductData(url1, url2).then((data) => {
          this.props.updateProductData(data.data);
          this.props.updateLoadingState(false);
        });
      } else {
        this.props.updateUserMessage(`Please enter valid URLs - beginning with "http://www.lazada.sg".`);
      };
    };
  }

  render () {
    let checkStyle1 = {opacity: this.state.showIcon1 ? 1 : 0}
    let checkStyle2 = {opacity: this.state.showIcon2 ? 1 : 0}

    return (
      <div className="search">
        <h1>Product Comparison Search</h1>
        <img className="checkmark" style={checkStyle1} src="../images/checkmark.png" />
        <div className="card searchDiv" placeholder="First URL"ref="searchBox1" contentEditable
          style={this.state.color1}
          onInput={this.handleChange.bind(this, 'searchBox1')}
          onPaste={this.handlePaste.bind(this, 'searchBox1')}
        ></div>
        <img className="checkmark" style={checkStyle2} src="../images/checkmark.png" />
        <div className="card searchDiv" ref="searchBox2" contentEditable
          style={this.state.color2}
          onInput={this.handleChange.bind(this, 'searchBox2')}
          onPaste={this.handlePaste.bind(this, 'searchBox2')}
        ></div>
        <Action
          search={this.search.bind(this)}
          allowSearch={this.state.allowSearch}
          loggedIn={this.props.loggedIn}
        />
      </div>
    )
  };
}

export default withRouter(Search);
