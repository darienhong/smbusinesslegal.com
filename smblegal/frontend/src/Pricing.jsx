import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
  

export default class Pricing extends Component { 
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div class="full-page"> 
        <div class="pricing-page">
            <Navbar />
            <br></br>
            <br></br> 
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{color: "#245CA6"}}> Pricing </h1>
              <br></br>
            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br></br>
            <div class="price-cards">
                
        <Link to ="/CreateAccount" style={{textDecoration: "none"}}> 
             <div class="price-card-1">
            <Card>
                <CardContent className="card-2-inside">
                <h4 class="price-option"> Option 1</h4>
                <h2 class="price-category">  Starter </h2>
                <p> Registration </p>
                <br />
                <p class="price"> Free </p>
                <p> INCLUDED: <br /> &bull; 2 Automated Documents per month </p> 
                <Button size="small">Get Started</Button>
                </CardContent>
            </Card>
            </div> 
            </Link>

        <Link to ="/CreateAccount" style={{textDecoration: "none"}}> 
            <div class="price-card-2">
            <Card>
                <CardContent className="card-2-inside">
                <h4 class="price-option"> Option 2 </h4>
                <h2 class="price-category">  Premium </h2>
                <p> Subscription </p>
                <br/>
                <p class="price"> $10 / Month </p>
                <p> INCLUDED: <br /> &bull; 15 Automated Documents per month
                <br /> &bull; Free Fromation Documents and Guides 
                <br /> &bull; Governance </p>
                <Button size="small">Get Started</Button>
                </CardContent>
            </Card>
            </div> 
            </Link>

        <Link to ="/CreateAccount" style={{textDecoration: "none"}}> 
            <div class="price-card-3">
            <Card>
                <CardContent className="card-2-inside">
                <h4 class="price-option"> Option 3 </h4>
                <h2 class="price-category">  Formation Documents </h2>
                <p> Per Unit </p>
                <br />
                <p class="price"> $5 / document</p>
                <p> INCLUDED: <br />  &bull; Automated Formation Documents
                <br /> &bull; Formation Resolutions </p>
                <Button size="small">Get Started</Button>
                </CardContent>
            </Card>
            </div>  
            </Link>

            </div>
            <br />
            <br />
            <br /> 

            </div>
            <Footer />
       </div>

        );
    }
}