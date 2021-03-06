import React from 'react';
import { render } from 'react-dom';

class Action extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const allowSearch = 'allowSearch';
    const disallowSearch = 'disallowSearch';
    const enterURLsPrompt = `Please login by clicking Login. Then enter two valid URLs.
      URLs must begin with "http://www.lazada.sg" OR "https://www.lazada.sg".`;
    const clickPrompt = `Great!  You\'ve entered two valid URLs.
      Please click Search.`;

    const allowSearchStyle = {};
    const disAllowSearchStyle = {
      backgroundColor: 'grey',
      color: 'darkgrey',
    };

    let buttonStyle = this.props.allowSearch && this.props.loggedIn ? allowSearchStyle : disAllowSearchStyle; //change back to'-115%'

    return (
      <div className="action">
        <h1>{this.props.allowSearch ? clickPrompt : enterURLsPrompt}</h1>
        <div
          className="button"
          style={buttonStyle}
          onClick={this.props.allowSearch ? this.props.search : null}
        >Search</div>
      </div>
    )
  };
}

export default Action;
