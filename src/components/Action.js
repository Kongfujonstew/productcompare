import React from 'react';
import { render } from 'react-dom';

class Action extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const allowSearch = 'allowSearch';
    const disallowSearch = 'disallowSearch';
    const enterURLsPrompt = `Please login by clicking Login. Then enter two URLs.
      URLs must begin with "http://www.lazada.sg" or "https://www.lazada.sg" to be valid.`;
    const clickPrompt = `Great!  You\'ve entered two valid URLs.
      Please click Search.`;

    const allowSearchStyle = {};
    const disAllowSearchStyle = {
      backgroundColor: 'grey',
      color: 'darkgrey',
    };

    let buttonStyle = this.props.allowSearch && this.props.loggedIn ? allowSearchStyle : disAllowSearchStyle; //change back to'-115%'

    return (
      <div className=" {this.props.allowSearch ? allowSearch : disallowSearch}">
        <h1>{this.props.allowSearch ? clickPrompt : enterURLsPrompt}</h1>
        <div
          className="button actionButton"
          style={buttonStyle}
          onClick={this.props.allowSearch ? this.props.search : null}
        >Search</div>
      </div>
    )
  };
}

export default Action;
