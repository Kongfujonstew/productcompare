import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

import { login, logout } from './js/index';

class Login extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const style = {
      backgroundColor: this.props.loggedIn ? "lightgreen" : "orange"
    };

    return (
      <div className="login" style={style}>
        <p className="userMessage">{this.props.userMessage}</p>
          {this.props.loggedIn ? 
            <div className="toggle" onClick={this.props.logout}>Logout</div> :
            <div className="toggle" onClick={this.props.login}>Login</div>
          }
      </div>
    )
  }
}

export default Login;
