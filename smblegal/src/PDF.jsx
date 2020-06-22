import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Document from './Document.jsx';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import { PDFExport } from '@progress/kendo-react-pdf';


const ref = React.createRef();


export default class PDF extends Component {

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
        {/* <Pdf targetRef={ref} filename="internship-document.pdf">
          {({ toPdf }) => <button class='finalize' onClick={toPdf}>Generate Pdf</button>}
        </Pdf>
        <div ref={ref}>
          <Document class='pdfgenerated' values={values} />
        </div> */}
        <button class='prev' onClick={this.previous}>Previous </button>
        <button class='finalize' onClick={this.exportPDF}>Download PDF</button>
        <PDFExport paperSize={'Letter'}
          fileName="internship-document.pdf"
          title=""
          subject=""
          keywords=""
          ref={(r) => this.resume = r}>
          <div style={{
            // height: 792,
            // width: 650,
            padding: 'none',
            backgroundColor: 'white',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'
          }}>
            <Document class='pdfgenerated' values={values} />
          </div>
        </PDFExport>


      </div>
    );
  }


}