import React, { Component } from 'react';
import '../App.css';
import moment from 'moment';
import Doc from './SecretaryDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { PDFExport } from '@progress/kendo-react-pdf';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



const ref = React.createRef();


export default class SecretaryPDF extends Component {

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
          forcePageBreak=".page-break"
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