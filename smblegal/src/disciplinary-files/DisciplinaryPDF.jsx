import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Doc from './DisciplinaryDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import { PDFExport } from '@progress/kendo-react-pdf';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';


const ref = React.createRef();


export default class DisciplinaryPDF extends Component {

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

    const styles = StyleSheet.create({
      list: {
        marginBottom: 8,
        marginLeft: 6,
      },
      listItem: {
        marginBottom: 4,
      },
      listItemText: {
        fontSize: 10,
        lineHeight: 1.45,
      },
    });


    return (
      <div class='generate'>

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