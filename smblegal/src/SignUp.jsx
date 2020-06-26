import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';

export default class SignUp extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div class="sign-up-page">
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{color: "rgb(57, 60, 126)"}}> Sign Up </h1>
              <br></br>
            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br></br>
            <div class="sign-up-info"> 
            <p style={{ textAlign: "center", fontWeight: 500}}> Join the thousands of small business owners 
                  who are using SMB Legal’s self-help tools to automate and power their business to run efficiently 
                  and avoid potential legal pitfalls. </p>

                <div class="sign-up-form">

                </div>
            
            </div>
                
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