import React, { Component } from 'react';
import '../App.css';
import { Button, TextField } from '@material-ui/core';

import Navbar from '../components/nav-bar.jsx';
import Footer from '../components/footer.jsx';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfFile from '../assets/CorporateGovernance.pdf';
import Navbar2 from '../components/nav-bar2.jsx';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


/* CORPORATE GOVERNANCE PDF */ 


export default class ContentMarketingLogin1 extends Component { 

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

          <div class="full-page">
              <Navbar2 />
          <div className="content-marketing-page">
            <div className="marketing-container">
              <div className="marketing-container" >
                
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
            </div>

            <Footer />
          </div>
        );
      }

    }


