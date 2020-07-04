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
import pdfFile from './assets/Business.pdf';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


/* HOW TO START A BUSINESS PDF */ 

export default class ContentMarketing2 extends Component { 

    state = {
        file: pdfFile,
        numPages: null,
      }
    
      onFileChange = (event) => {
        this.setState({
          file: event.target.files[0],
        });
      }
    
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    
      render() {
        const { file, numPages } = this.state;
    
        return (
          <div className="content-marketing-page">
            <div className="marketing-container">
              <div className="marketing-container" >
                <Navbar />
            <br />
            <br />
            <br />
            <br />
            
                <Document
                  file={file}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                  options={options}
                >
                  {
                    Array.from(
                      new Array(numPages),
                      (el, index) => (
                          <center>
                        <Page
                          key={`page_${index + 1}`}
                          pageNumber={index + 1}
                          width={1000}

                        />
                        </center>
                      ),
                    )
                  }
                </Document>
              </div>
            </div>
            <br /> 
            <br />
            <br />
            


            <Footer />
          </div>
        );
      }

    }






