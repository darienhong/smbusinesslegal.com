import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Document from './Document.jsx';


export default class Questions extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
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
        <button class='prev' onClick={this.previous}>Previous </button>
        <button class='next' onClick={this.next}>Next </button>
        <Document class='doc' employeeName={values.employeeName} date={values.date} address={values.address}
          internName={values.internName}
        />
      </div>

    );
  }


}