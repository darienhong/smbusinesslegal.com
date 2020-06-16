import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div class='homepage'>
           <h1 style={{ fontWeight: 800, fontSize: 80}}> SMB Legal </h1>
           <h2 style={{ textAlign: "center"}}> Small Business Lifecycle Management </h2>
           <p> Sign up for the beta here!</p>
           <Button variant="contained" color="primary"> Sign Up </Button>
          </div>
    
        );
      }

}