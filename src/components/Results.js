import React from 'react';
import { render } from 'react-dom';
import { withRouter } from "react-router-dom";
import { getProductData } from './js/search';
import Table from './Table';
import Search from './Search';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    window.onpopstate = this.onBackButton;
  }

  onBackButton (e) {
    e.preventDefault();
  }


  render () {
    return (
      <section className="results">
        {this.props.loading || !this.props.productData2 ? 
          <div>
            <h1>Searching . . . </h1>
            <div className="loader"></div> 
          </div> :
          <div>
            <h1>Results. Please click <span className="clickable"
              onClick={() => this.props.history.push('/')}
            >back</span> to search again.</h1>
            <Table
              productData1={this.props.productData1}
              productData2={this.props.productData2}
            />
            <div className="button"
              onClick={() => this.props.history.push('/')}
            >Home</div>
          </div>
        }
      </section>
    )
  };
}

export default withRouter(Results);

        // <Search
        //   updateProductData={this.props.updateProductData.bind(this)}
        //   updateLoadingState={this.props.updateLoadingState.bind(this)}
        //   browserAuthenticate={this.props.browserAuthenticate.bind(this)}
        //   updateUserMessage={this.props.updateUserMessage.bind(this)}
        // />
