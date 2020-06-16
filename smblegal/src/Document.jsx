import React, { Component } from 'react';
import './App.css';


export default class Questions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class='internship'>
        <p>{this.props.name}</p>
        <p>{this.props.date}</p>
        <p>{this.props.address}</p>
        <p>Dear {this.props.name}</p>
      </div>

    );
  }


}