import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/nav-bar.jsx';
import Footer from '../components/footer.jsx';
import Navbar2 from '../components/nav-bar2.jsx';


export default class ProductOverviewLogin extends Component { 

    render() {

        return ( 

            <div class="full-page">
            <div class="product-overview-page">
            <Navbar2 />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 style={{color: "#245CA6"}}> Product Overview </h1>
              <br></br>
            <div class="product-overview-description"> 
            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br /> 
            <p> At SMB Legal we provide the most cutting edge contract management and legal tools to small businesses.  
                Our platform allows small businesses to create a contract ecosystem that leverages the cloud, artificial 
                intelligence and machine learning to achieve extraordinary gains in operational efficiency, freeing 
                up significant time and money to be spent on driving customer growth and revenue.</p>
            <br /> 
            <br />

            <h4 style={{color: "#245CA6" }}> AUTOMATION </h4>
            <p> Our platform allows a small business to set up a robust apparatus to automate many of their governance, contracting and legal needs.  SMB Legal’s 
                proprietary set of contracts and automated processes allow small businesses to spend more time on 
                increasing growth and revenue and less money on lawyers, law firms or expensive software.</p>

            <p> Studies show that fewer than half of all small businesses use any technology beyond accounting.  
                Automate the most frustrating parts of your business by using SMB Legal.</p>
            <br /> 
            <br /> 
            <h4 style={{color: "#245CA6" }}> THE CLOUD </h4>
            <p> Our platform provides a seamless cloud based ecosystem for all of a business's contracts and legal documents.  
                All stakeholders - owners, employees, lawyers, customers and suppliers - can tap into our resources. </p>
            <p> Studies show that <span style={{color: "#245CA6"}}> 45% </span> of companies wait a week or more to get a document signed and 
                <span style={{color: "#245CA6"}}> 21% </span> of staff productivity loss is due to document issues.  
                Eliminate these problems by bringing your small business into the SMB Legal ecosystem.</p>
            <br />
            <br />
            <h4 style={{color: "#245CA6" }}> ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING </h4>
            <p> Our accessible artificial intelligence and machine learning tools enable the small business owner to
                 get better and quicker insights into all related business documents.  The SMB Legal platform 
                allows small business stakeholders to analyze incoming documents, systematize contracts, 
                avoid duplicative or conflicting contracts and reduce friction in workflows.  </p>

            <p> Studies show that <span style={{color: "#245CA6"}}> 83% </span> of documents are recreated because of poor workflows, wasting scarce and valuable company resources 
                while <span style={{color: "#245CA6"}}> 80% </span> of businesses still use manual integration.  Avoid these small business pitfalls by powering your 
                business with SMB Legal’s tools to increase business efficiency and avoid legal issues.
             </p>    
             <br />
             <br />

              <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>        

            <br /> 

            <p> Try out SMB Legal today.  Bring your small business online and realize the benefits - in time and money - 
                that are achieved by small businesses who decide to power their business with SMB Legal.</p>
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