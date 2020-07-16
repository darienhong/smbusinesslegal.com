import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/nav-bar.jsx';
import Footer from '../components/footer.jsx';
import Navbar2 from '../components/nav-bar2.jsx';

export default class ProBonoLogin extends Component {
    render(){
        return(

            <div class="full-page"> 
            <Navbar2 />
            <div class="pro-bono-page">
            <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 style={{color: "#245CA6"}}> Pro Bono </h1>
              <br></br>
            <div class="product-overview-description"> 
            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            < br/>
            <br />
            <div class="definition">
        <center>
            <p style={{fontWeight: "600", fontSize: "20px", color: "#245CA6" }}> pro bono   adjective </p>
            <p style={{fontWeight: "600", fontSize: "20px", color: "#245CA6"}}> \ ,pro- ‘bo-(,)no \ </p>
            </center>
            </div>
            <br />
            <br />

            <h4 style={{color: "#245CA6" }}> DEFINITION </h4>
            <p style={{fontWeight: "600"}}> Latin: being, involving, or doing professional and especially legal work donated especially for the public good</p>
            <p> SMB Legal was founded by lawyers.  To become a lawyer, you must pass the bar exam.  After you pass the bar exam you must take an oath.  
                An essential part of that oath is expressing your commitment to pro bono work on behalf of your community.  </p>

            <p> Although SMB Legal is not a law firm or in the business of practicing law, we still carry that ethos of pro bono work instilled in us as lawyers. 
                <span style={{ color: "#245CA6" }}> We believe that pro bono work is an essential part of any 21st-century business enterprise looking to make a mark in this world. </span> </p>

            <p> The aim of SMB Legal is to help individual, small to medium-sized businesses, succeed and achieve their dream of running a successful business. 
                 For far too many Americans this dream may be out of reach.  Whether there are impediments to access to capital, licensing restrictions, lack of confidence, community issues, etc., 
                there are many obstacles to overcome before starting a business and making it successful.</p>
            <p> Recognizing these facts and coupling them with our commitment to pro bono work, SMB Legal offers scholarships to qualified individuals 
                starting a business or qualified businesses. We believe qualified businesses or individuals deserve more access to tools that inspire and buttress
                 entrepreneurship and confidence in starting and running a small to medium-sized business. </p>

            <p> A scholarship from SMB Legal allows qualified businesses to use our services free for one year.  This allows businesses to build efficient processes, build confidence, 
                avoid legal pitfalls and drive revenue and growth.</p>  

            <p>America was built on the backs of a strong middle-class.  Small to medium-sized business ownership is a powerful entry point to the middle class, especially for underrepresented groups.  
                Minorities own 29.3% of small businesses.  We want to help that number grow.  
                Minority-owned small businesses have payrolls of $254 billion and receipts of $1.17 billion, respectively, representing significant minority-owned wealth. 
                We want to help that number grow. 27% of small businesses are owned by women.  We want to help that number grow.  
                Women-owned businesses have receipts of $1.7 billion, representing immense female wealth.  We want to help that number grow.  
                SMB Legal is committed to helping expand these numbers by providing free tools to qualified businesses.</p> 

            <p>Small businesses strengthen their local community’s economy.  As they succeed and prosper so does their community.  Out of every $100 spent at a small business, $68 goes back into the community.  The more businesses we can help create 
                and the more successful we can help businesses become, the more successful our entire nation will be.</p> 

            <p> SMB Legal is also committed to partnering with and providing a platform to public interest law groups. </p>
            <p> If you think you are a qualified SMB Legal pro bono business, please click on the link and fill out the form.  If you are a qualified business, you will be interviewed, asked for some 
                documentation and then - if approved - given a scholarship for a year's free access to SMB Legal.</p>

            <p> SMB Legal’s overall goal is to make the world a better place and make America a stronger country.  We aim to assist and support the entrepreneurs of America, including you. </p>

            <p> Let us help, apply today and achieve your goals.</p>

            < br/>
            <h3 style={{fontFamily: "DM Sans", fontSize: "16px", fontWeight: "600"}}> The SMB Legal Team </h3>
            <br />
            <br />
            <br />



            </div> 








            </div>

            <Footer />
            </div>




        );
    }
}