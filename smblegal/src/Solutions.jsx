import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';


export default class Solutions extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div class="solutions-page">
                <Navbar />
                <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 style={{color: "#245CA6"}}> Solutions </h1>
              <br></br>

            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            </div>
        );
    }
}