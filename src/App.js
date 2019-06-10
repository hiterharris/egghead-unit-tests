import React, { Component } from 'react';
import './App.css';

import Snapshot from './components/Snapshot';
import Props from './components/Props';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="spacing">Hello world!!</h1>
        <Snapshot />
        <Props name="Hiter" />
      </div>
    );
  }
}
