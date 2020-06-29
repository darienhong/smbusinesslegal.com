import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from './components/nav-bar.jsx';
  

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

            <footer class="footer">
                <p> COPYRIGHT &copy; 2020 SMBUSINESSLEGAL.COM - ALL RIGHTS RESERVED </p>
                <p style={{opacity: 0.4}}> SMB Legal (Eatery Legal Corporation) is NOT a law firm, 
             is not a substitute for an attorney or law firm and cannot provide 
             legal advice.  SMB Legal provides access to self-help services 
             at your specific direction.  We cannot provide any kind of advice, 
             explanation, opinion, or recommendation about possible legal rights, 
             remedies, defenses, options, selection of forms or strategies. 
             Communication between you and SMB Legal is protected by our Privacy Policy 
             and not by attorney-client privilege and it does not constitute 
             the provision of legal advice or other professional advice by SMB Legal.  
             By relying on these documents, you assume all risk and liability that may result.  
             Review all documents carefully for accuracy before using them.  
             Your use of this site is subject to our Terms of Service. </p>
            </footer>
       </div>

        );
    }
}