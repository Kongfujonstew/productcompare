import React from 'react';
import { render } from 'react-dom';
import Search from './Search';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className="home">
        <div className="welcome"></div>
        <Search
          updateProductData={this.props.updateProductData.bind(this)}
          updateLoadingState={this.props.updateLoadingState.bind(this)}
          browserAuthenticate={this.props.browserAuthenticate.bind(this)}
          updateUserMessage={this.props.updateUserMessage.bind(this)}
          loggedIn={this.props.loggedIn}
        />
      </section>
    )
  }
}

export default Home;
