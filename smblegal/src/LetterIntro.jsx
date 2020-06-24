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



export default class LetterIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    // alert(values.percentage)
    return (
      <div class='ask'>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left'>
          {/* <DayPicker showOutsideDays
            selectedDays={values.date}
            onDayClick={this.handleDateClick} /> */}
          <form>
            <p> Enter the date: </p>
            <input
              type='date' id="letterdate" name="letterdate"
              onChange={this.props.handleChange('date')}
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
            <p>Enter your address:</p>
            <input
              type='text'
              onChange={this.props.handleChange('address')}
            />
          </form>
          <br />

          <form>
            <p>Enter your intern's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('internName')}
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
            <p>Enter the state:</p>
            <input
              type='text'
              onChange={this.props.handleChange('state')}
            />
          </form>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <Document class='doc' values={values}
          />
        </div>
      </div >

    );
  }


}