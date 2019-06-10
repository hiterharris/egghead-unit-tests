import React, { Component } from 'react';
import './App.css';

import Snapshot from './components/Snapshot';
import Props from './components/Props';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    }
  }

  toggleButton() {
    this.setState({
      on: true,
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="spacing">Hello world!!</h1>
        <Snapshot />
        <Props name="Hiter" />
        <div className="spacing">
          <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
          <button onClick={() => this.toggleButton()}>Click</button>
        </div>
      </div>
    );
  }
}
