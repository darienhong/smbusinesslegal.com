import React, { Component } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';


export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div class='homepage'>
           <h1 style={{ fontWeight: 800, fontSize: 80}}> SMB Legal </h1>
           <h2 style={{ textAlign: "center"}}> Small Business Lifecycle Management </h2>
           <br></br>
           <p style={{ textAlign: "center"}}> Sign up for the beta here!</p>
          <div class='signup'>  <TextField style={{ left: 410, width: 300}}
                 id="outlined-primary"
                 label="Email"
                 variant="outlined"
                 color="primary"
                 /> 
        
        
           <Button style={{ left: 430, marginTop: 10}}> Sign Up </Button>
           </div>
           <br></br>
           <br></br>
          </div>

    
        );
      }

}