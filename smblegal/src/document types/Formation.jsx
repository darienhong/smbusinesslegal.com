import React, { Component } from 'react';
import '../App.css';

export default class Formation extends Component { 

    render() { 
        return (
            <div class="formation-doc-page">
                <br></br>
                <br></br> 
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{color: "rgb(57, 60, 126)"}}> Formation </h1>
                <br></br>
                <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br></br>
            <br></br>
            <p class="pick-document"> Choose a document to draft </p>


            </div>



        );
    }
}