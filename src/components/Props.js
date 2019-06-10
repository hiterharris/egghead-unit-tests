import React, { Component } from 'react';
import '../App.css';

export default class Props extends Component {
    render() {
        return (
            <div className="spacing">
                My name is {this.props.name}!!
            </div>
        );
    }
}