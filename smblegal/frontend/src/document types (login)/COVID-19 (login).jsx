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
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import Footer from '../components/footer.jsx';


export default class Covid_19Login extends Component {

    constructor(){
        super();
        var today = new Date(),
            dateToday = today.getDate();
    

    this.state = {
        docs_used: 7,
        limited_docs: false,
        email: localStorage.getItem('email'),
        date: dateToday,
    }
}

    componentDidMount(){
        console.log(this.state.email);
        fetch(`/api/getNumDocs?email=${this.state.email}`, {
            method: 'GET',
          })
          
        .then(response => response.json()
        .then(data => this.setState({
              docs_used: data[0].no_docs_used,
          }))
        )
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        if (this.state.date === 1){
            this.setState({ 
                docs_used: 0,
            }) 

            const data = {
                docs_used: this.state.docs_used,
                email: this.state.email,
              }
              
              fetch('/api/resetDocs', {
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: { 'Content-Type': 'application/json' }
              })
          
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));


        }

       
    }

    saveData = () => {
        localStorage.setItem('docs_used', this.state.docs_used);
    }

    render() {
        const {
            docs_used, 
            email,
            limited_docs,
            date
        } = this.state

        return (
            <div class="full-page">
                  <Navbar2 />
                <div class="covid-19-doc-page">
                  {this.saveData()}
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="back-button" style={{ paddingLeft: "20px", paddingTop: "5px" }}>
                        <Link to="/Dashboard" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
                    </div>
                    <br></br>
                    <br></br>
                    <h1 style={{ color: "#245CA6" }}> COVID-19 </h1>
                    <br></br>
                    <div style={{ textAlign: "center" }}>
                        <svg height={50} width={400}>
                            <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
                        </svg>
                    </div>
                 {/* {docs_used} */}
                    <p class="pick-document"> Choose a document to draft </p>
                    <br></br>
                    <br></br>
                    <div class="formation-documents">

                        <div class="document-icon"><Link to="/CovidRentQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> California Covid-19 Notice of Inability to Pay Rent </p>
                        </Link>
                        </div>

                        <div class="document-icon"><Link to="/WFHQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Work From Home Policy </p>
                        </Link>
                        </div>

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