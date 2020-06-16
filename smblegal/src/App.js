import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Questions from './Questions.jsx';

export default class App extends Component {
  render() {
    return (
      <div class="body" >
        <div className="header">
          <Button variant="contained" color="secondary"> Hello World </Button>

        </div>
        <div><Questions /></div>
      </div >
    );
  }
}
