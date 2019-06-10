import React, { Component } from 'react';
import '../App.css';

export default class Snapshot extends Component {
    render() {
        return (
            <div className="spacing">
                <h1>Test One</h1>
                <p>This component should match snapshot</p>
            </div>
        )
    }
}