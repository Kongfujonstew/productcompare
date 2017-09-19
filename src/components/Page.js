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
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    )
  }
}

export default Page;
