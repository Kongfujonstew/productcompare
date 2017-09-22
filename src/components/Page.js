import React from 'react';
import { render } from 'react-dom';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { title, content } = this.props.page;
    return (
      <section className="page">
        <div className="card">
          <p>{title}</p>
          <p>{content}</p>
        </div>
        <div className="button"
          onClick={() => this.props.history.push('/')}
        >Home</div>
      </section>
    )
  }
}

export default Page;
