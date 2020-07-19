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
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



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
    const newDate = new Date();
    var dateString = newDate.toString();
    var formattedDate = moment(dateString).format('MM.DD.YY');
    const fileName = 'Board_Meeting_Minutes_' + formattedDate + '.pdf'


    return (
      <div class='generate'>
        <Navbar2 />

        <div class='buttons'>
          <center>
            <button class='prev' onClick={this.previous}>Previous </button>
            <button class='finalize' onClick={this.exportPDF}>Download PDF</button>
          </center>
        </div>
        <PDFExport paperSize="Letter"
          fileName={fileName}
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