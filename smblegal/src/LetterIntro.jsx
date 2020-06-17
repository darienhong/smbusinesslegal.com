import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Document from './Document.jsx';
import { Alert } from 'react-alert'



export default class Questions extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <div class='forms'>
          <p> Enter the date: </p>
          <DayPicker showOutsideDays
            selectedDays={values.date}
            onDayClick={this.handleDateClick} />
          <form>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('employeeName')}
            />
          </form>
          <form>
            <p>Enter your address:</p>
            <input
              type='text'
              onChange={this.props.handleChange('address')}
            />
          </form>

          <form>
            <p>Enter your intern's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('internName')}
            />
          </form>

          <form>
            <p>Enter company's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('companyName')}
            />
          </form>
          <button onClick={this.next}>Next </button>
        </div>
        <Document employeeName={values.employeeName} date={values.date} address={values.address}
          internName={values.internName}
        />
      </div >

    );
  }


}