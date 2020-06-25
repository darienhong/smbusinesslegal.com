import React, { Component } from 'react';
import '../App.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import DescriptionIcon from '@material-ui/icons/Description';


export default class Covid_19 extends Component { 

    render() { 
        return (
        <div class="covid-19-doc-page">
               <br></br>
                <br></br>
                <div class="back-button" style={{paddingLeft: "20px", marginLeft: "20px"}}>
                <Link to="/" style={{color: "black", textDecoration: "none"}}> <ArrowBackIosIcon /></Link>
                </div>
                <br></br>
                <h1 style={{color: "rgb(57, 60, 126)"}}> COVID-19 </h1>
                <br></br>
                <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <p class="pick-document"> Choose a document to draft </p>
            <br></br>
            <br></br>
            <div class="formation-documents"> 
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> California Covid-19 Notice of Inability to Pay Rent </p>
            </div>
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Work From Home Policy </p>
            </div>
             </div>
        </div>



        );
    }
}