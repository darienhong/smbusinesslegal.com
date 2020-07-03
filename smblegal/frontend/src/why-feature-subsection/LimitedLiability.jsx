import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/nav-bar.jsx';
import Footer from '../components/footer.jsx';
import Iframe from 'react-iframe';
import { Document, Page, pdfjs } from 'react-pdf';
import PDF from '../assets/PDFs/LimitedLiability.pdf';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class LimitedLiability extends Component { 

    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <div class="doc-page">
            <Navbar />
            <br />
            <br />
            <div class="document-pdf">
    
                <Document 
                    file={PDF}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                 >
                <center> <Page pageNumber={pageNumber} width={1100}/> </center>
                </Document> 

            </div>
            <br />
            <br />


            <Footer />
     </div>


        );
    }
}