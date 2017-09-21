import React from 'react';
import { render } from 'react-dom';

class Action extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('button allows search: ', nextProps.allowSearch);
  }

  render () {
    const allowSearch = 'allowSearch';
    const disallowSearch = 'disallowSearch';
    const enterURLsPrompt = `Please enter two URLs. \r
      URLs must begin with "http://www.lazada.sg" to be valid.`;
    const clickPrompt = `Great!  You\'ve entered two valid URLs. \r
      Please click Search to view the comparison results.`;

    let buttonStyle = {
      marginLeft: this.props.allowSearch ? '42.5%' : '-20%' //change back to'-115%'
    };

    return (
      <div className="action {this.props.allowSearch ? allowSearch : disallowSearch}">
        <p>{this.props.allowSearch ? clickPrompt : enterURLsPrompt}</p>
        <div
          className="buttonStyle"
          style={buttonStyle}
          onClick={this.props.allowSearch ? this.props.search : null}
        >Search</div>
      </div>
    )
  };
}

export default Action;
