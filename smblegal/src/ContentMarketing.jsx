import React, { Component } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import FileImage from './assets/organize-files.png';
import CustomerServiceImage from './assets/customer-service.png';
import AnalyzeImage from './assets/analyze.png';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import Iframe from 'react-iframe';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class ContentMarketing extends Component { 
    state = { 
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }


    render() {
        
        const { pageNumber, numPages } = this.state;

        return( 
            <div class="content-marketing">
                <Document file="./CorporateGovernance.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>

               <Page pageNumber={pageNumber} width={1000}/> 

                </Document>
                <p> Page {pageNumber} of {numPages}</p>
    
            </div>

        );
    }
}