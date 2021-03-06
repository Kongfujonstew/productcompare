import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

import { login, logout } from './js/auth';

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const loggingInStyle = {
      animation: "pulse 1s infinite"
    };
    const staticStyle = {
      backgroundColor: this.props.loggedIn ? "lightgreen" : "gold"
    };

    return (
      <div className="login" style={this.props.loggingIn ? loggingInStyle : staticStyle}>
        <p className="userMessage">{this.props.userMessage}</p>
          {this.props.loggedIn ? 
            <div className="toggle" onClick={this.props.logout}>Logout</div> :
            <div className="toggle highlight-color" onClick={this.props.login}>Login</div>
          }
      </div>
    )
  }
}

export default Login;
