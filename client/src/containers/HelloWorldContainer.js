import React, { Component } from 'react';
import { HelloWorld } from '../components/HelloWorld';

export class HelloWorldContainer extends Component {
  state = {
    title: 'Hello World!',
    apiServerStatus: 'Unable to connect to api server'
  };

  componentDidMount() {
    fetch('/api/example')
      .then(resp => resp.json())
      .then(data => this.setState({ apiServerStatus: data.status }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <HelloWorld
          title={this.state.title}
          apiServerStatus={this.state.apiServerStatus}
        />
      </div>
    );
  }
}