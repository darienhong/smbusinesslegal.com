import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './Questions.jsx';

export default class App extends Component {
  render() {
    return (
      <div class="body" >
        <div className="header">
        </div>
        <div><Questions /></div>
      </div >
    );
  }

}
