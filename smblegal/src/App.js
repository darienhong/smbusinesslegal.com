import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';

export default class App extends Component {
  render() {
    return (
      <div class="header">
        <Navbar />
      </div>
    );
  }
}

