import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
  

export default class Pricing extends Component { 
    constructor(props){
        super(props);
    }
    render() {
        return (
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
            <p> Plan Comparison </p>
            <br></br>
            <div class="price-cards">
                
            <div class="price-card-1">
            <Card>
                <CardContent className="card-2-inside">
                <h4 class="price-option"> Option 1</h4>
                <h2 class="price-category">  Freemium </h2>
                <br></br>
                <p> 1 document </p>
                <Button size="small">Learn More</Button>
                </CardContent>
            </Card>
            </div> 

            <div class="price-card-2">
            <Card>
                <CardContent className="card-2-inside">
                <h4 class="price-option"> Option 2 </h4>
                <h2 class="price-category">  Automated Governance </h2>
                <p> $5 / year</p>
                <Button variant="small">Learn More</Button>
                </CardContent>
            </Card>
            </div> 

            <div class="price-card-3">
            <Card>
                <CardContent className="card-2-inside">
                <h4 class="price-option"> Option 3 </h4>
                <h2 class="price-category">  Subscription </h2>
                <br></br>
                <p> $5 for 1+ documents </p>
                <Button size="small">Learn More</Button>
                </CardContent>
            </Card>
            </div> 

            <div class="price-card-4">
            <Card>
                <CardContent className="card-2-inside">
                <h4 class="price-option"> Option 4 </h4>
                <h2 class="price-category">  Formation </h2>
                <br></br>
                <p> $5 / document </p>
                <Button size="small">Learn More</Button>
                </CardContent>
            </Card>
            </div> 
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Footer />
       </div>

        );
    }
}