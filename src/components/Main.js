import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

class Main extends React.Component {
  componentDidMount() {
    console.log('seeting');
    // history.pushState(null, null, '/test');
    window.addEventListener('popstate', (e) => {
      // alert('hi')
      // e.preventDefault();
      // history.go(1)
      console.log('popstate triggered; here is e: ', e);
    })
  }

  render () {
    return (
      <div>Hello from Main
        <form action="http://localhost:8888/login" method ="post">
          <input type="submit" />
        </form>
        <form action="http://localhost:8888/logout" method ="post">
          <input type="submit" />
        </form>
      </div>
    )
  }
}

        // <Route path="/test" exact component={Tester} />
        // <Route path="/slashtwo" exact component={slashTwo} />
        // <Route path="/" exact component={Home} />
export default Main;

