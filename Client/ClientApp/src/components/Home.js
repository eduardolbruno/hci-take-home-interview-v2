import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, welcome!</h1>
            <p>You can navigate to the Search section through the top bar. </p>
            <br/>
            <p>Any questions, please contact: <code>eduardo.luis.bruno@gmail.com</code></p>
      </div>
    );
  }
}
