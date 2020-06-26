import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import ConsultingDocument from './ConsultingDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import EmploymentDocument from '../employment-files/EmploymentDocument.jsx';



export default class ConsultingIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>

          <form>
            <p>Enter consultant's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('consultantName')}
            />
          </form>
          <br />

          <form>
            <p>Enter company's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('companyName')}
            />
          </form>
          <br />

          <form>
            <p>Enter the company registration number:</p>
            <input
              type='text'
              onChange={this.props.handleChange('registration')}
            />
          </form>
          <br />

          <form>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('employeeName')}
            />
          </form>
          <br />

          <form>
            <p> Enter end date: </p>
            <input
              type='date' id="letterdate" name="letterdate"
              onChange={this.props.handleChange('endDate')}
            />

          </form>
          <br />

          <form>
            <p>Enter the state:</p>
            <input
              type='text'
              onChange={this.props.handleChange('state')}
            />
          </form>

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          {/* <Document class='doc' values={values}
          /> */}
          <ConsultingDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}