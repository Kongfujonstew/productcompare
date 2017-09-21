import React from 'react';
import { render } from 'react-dom';
import { getProductData } from './js/search';
import Table from './Table';
import Search from './Search';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section className="results">
        {this.props.loading ? 
          <h1>One second as we search the universe for the best products . . . </h1> :
          <Table
            productData1={this.props.productData1}
            productData2={this.props.productData2}
          />
        }
      </section>
    )
  }
}

export default Results;

        // <Search
        //   updateProductData={this.props.updateProductData.bind(this)}
        //   updateLoadingState={this.props.updateLoadingState.bind(this)}
        //   browserAuthenticate={this.props.browserAuthenticate.bind(this)}
        //   updateUserMessage={this.props.updateUserMessage.bind(this)}
        // />
