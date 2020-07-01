import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';
import Doc from './LLCResolutionDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { PDFExport } from '@progress/kendo-react-pdf';
import Navbar from '../components/nav-bar.jsx';



const ref = React.createRef();


export default class LLCResolutionPDF extends Component {

  // Add this method to the React 
  exportPDF = () => {
    this.resume.save();
  }
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();

  }


  render() {
    const { values } = this.props;


    return (
      <div class='generate'>
        <Navbar />


        <div class='buttons'>
          <center>
            <button class='prev' onClick={this.previous}>Previous </button>
            <button class='finalize' onClick={this.exportPDF}>Download PDF</button>
          </center>
        </div>
        <PDFExport paperSize="Letter"
          forcePageBreak=".page-break"
          fileName="legal-document.pdf"
          title=""
          subject=""
          keywords=""
          ref={(r) => this.resume = r}>
          <div style={{
            // height: 792,
            // width: 600,
            padding: 40,
            backgroundColor: 'white',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'
          }}>
            <div class='pdf'>
              <Doc class='pdfgenerated' values={values} />
            </div>

          </div>
        </PDFExport >


      </div >
    );
  }


}