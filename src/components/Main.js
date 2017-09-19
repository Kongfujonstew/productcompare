import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Routes from './Routes';
import Search from './Search';

import { browserAuthenticate, login, logout, warnUser } from './js/index';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      loggedIn: false,
      userMessage: 'Please log in.',
      loading: false,
      productData1: {},
      productData2: {}
    };
  }

  componentDidMount () {
    browserAuthenticate(this);
  }

  updateProductData (obj1, obj2) {
    this.setState({
      productData1: obj1,
      productData2: obj2
    })
  }

  mainLogin () {
    login().then(() => {
      browserAuthenticate(this);
    });
  }

  mainLogout () {
    logout();
    browserAuthenticate(this, 'Thank you!  Please log in to continue.');
  }

  browserAuthenticate (message) {
    browserAuthenticate(this, message)
  }

  updateUserMessage (message) {
    warnUser(this, message);
  }

  render () {
    return (
      <main>
        <Nav />
        <Login 
          loggedIn={this.state.loggedIn}
          userMessage={this.state.userMessage}
          login={this.mainLogin.bind(this)}
          logout={this.mainLogout.bind(this)}
        />
        <Routes />
        <Route 
          path="/"
          exact
          render={(props) => (<Search {...props}
            updateProductData={this.updateProductData.bind(this)}
            browserAuthenticate={this.browserAuthenticate.bind(this)}
            updateUserMessage={this.updateUserMessage.bind(this)}
          />)}
        />
      </main>
    );
  }
};

export default Main;

