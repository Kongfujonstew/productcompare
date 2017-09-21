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
        <Search
          updateProductData={this.props.updateProductData.bind(this)}
          updateLoadingState={this.props.updateLoadingState.bind(this)}
          browserAuthenticate={this.props.browserAuthenticate.bind(this)}
          updateUserMessage={this.props.updateUserMessage.bind(this)}
        />
      </section>
    )
  }
}

export default Home;
