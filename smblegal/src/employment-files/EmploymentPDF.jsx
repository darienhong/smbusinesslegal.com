import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Doc from './EmploymentDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { PDFExport } from '@progress/kendo-react-pdf';


const ref = React.createRef();


export default class EmploymentPDF extends Component {

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
    // const creditCheck = values.credits == "True"
    // var creditRequire = ''
    // if (creditCheck)
    //   creditRequire = values.internName + ' will be receiving academic credit upon successful completion of this internship. The Company agrees to verify successful completion of this internship by ' + values.internName + ' in the event that ' + values.internName + '’s academic institution asks for such verification.'


    return (
      <div class='generate'>

        <div class='buttons'>
          <center>
            <button class='prev' onClick={this.previous}>Previous </button>
            <button class='finalize' onClick={this.exportPDF}>Download PDF</button>
          </center>
        </div>
        <PDFExport paperSize="Letter"
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