import React from 'react';
import { render } from 'react-dom';
import createTableRows from './js/table';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRows: []
    };
  }

  componentDidMount() {
    if (this.props.productData1.product && this.props.productData2.product) {
      this.createTableRows();
    };
  }

  createTableRows () {
    let newTableRows = createTableRows(this.props.productData1, this.props.productData2);
    this.setState({
      tableRows: newTableRows
    });
  }

  render () {
    return (
      <div className="table">
        {this.state.tableRows.length ?
          <div className="card">
            <h1> </h1>
            <table>
              <tbody>
                <tr>
                  <th>Comparison</th>
                  <th><img src={this.props.productData1.pictureDataURL} width="100px" /></th> 
                  <th><img src={this.props.productData2.pictureDataURL} width="100px" /></th>
                </tr>
                {this.state.tableRows.map((row, index) => {
                  return <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div> : 
          <h1>No results to display</h1>
        }
      </div>
    )
  };
}

export default Table;
