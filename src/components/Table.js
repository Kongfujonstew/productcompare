import React from 'react';
import { render } from 'react-dom';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  componentWillReceiveProps(nextProps) {
    console.log('pD1 on Table: ', nextProps.productData1);
  }

  render () {
    return (
      <div className="table">
        { this.props.productData1 ?
          <div>
            <h1>results</h1>
            <p>{this.props.productData1.product}</p>
            <p>{this.props.productData2.product}</p>
            <img src={this.props.productData1.pictureDataURL} width="100px" />
          </div> : 
          <h1>No results to display</h1>
        }
      </div>
    )
  };
}

export default Table;
