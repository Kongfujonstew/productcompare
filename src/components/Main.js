import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Routes from './Routes';
import Search from './Search';
import Results from './Results';
import Home from './Home';

import { browserAuthenticate, login, logout, warnUser } from './js/auth';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      loggedIn: false,
      userMessage: 'Please log in. You must log in to search. ->',
      loading: false,
      productData1: {},
      productData2: {}
    };
  }

  componentDidMount () {
    browserAuthenticate(this);
  }

  updateProductData (productDataObj) {
    this.setState({ 
      productData1: productDataObj.productData1,
      productData2: productDataObj.productData2
    });
  }

  updateLoadingState (state) {
    this.setState({
      loading: state
    });
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
          path="/results"
          exact
          render={(props) => (<Results {...props}
            updateLoadingState={this.updateLoadingState.bind(this)}
            browserAuthenticate={this.browserAuthenticate.bind(this)}
            updateUserMessage={this.updateUserMessage.bind(this)}
            productData1={this.state.productData1}
            productData2={this.state.productData2}
            loading={this.state.loading}
          />)}
        />
        <Route 
          path="/"
          exact
          render={(props) => (<Home {...props}
            updateProductData={this.updateProductData.bind(this)}
            updateLoadingState={this.updateLoadingState.bind(this)}
            browserAuthenticate={this.browserAuthenticate.bind(this)}
            loggedIn={this.state.loggedIn}
            updateUserMessage={this.updateUserMessage.bind(this)}
          />)}
        />
      </main>
    );
  }
};

export default Main;
