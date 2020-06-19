import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Document from './Document.jsx';
import LetterIntro from './LetterIntro.jsx';
import InternshipInfo from './InternshipInfo.jsx';
import InternshipInfo2 from './InternshipInfo2.jsx';
import InternshipInfo3 from './InternshipInfo3.jsx';

import { Alert } from 'react-alert'


export default class Questions extends Component {
  state = {
    step: 1,
    date: new Date(),
    employeeName: '[NAME]',
    address: '[ADDRESS]',
    internName: '[NAME]',
    companyName: '[LEGAL NAME]',
    state: '[STATE]',
    title: '[X]',
    duties: '[X]',
    relationship: '[X]',
    startDate: new Date(),
    wage: '[X – if paid must comply with minimum wage laws]',
    hours: '[X]',
    status: '[Exempt or non-exempt]',
    atWill: '[X]',
    credits: '[X]',
    expenses: '[X]',
    liability: '[X]',
    compete: '[X]'

  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleDateChange = day => selected => {
    this.setState({
      date: selected ? undefined : day,
    });
    alert("a change happened")
  }


  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }

  render() {
    const { step } = this.state;
    const { date, employeeName, address, internName, companyName, state, title, duties, relationship, startDate,
      wage, hours, status, atWill, credits, expenses, liability, compete } = this.state;
    const values = {
      date, employeeName, address, internName, companyName, state, title, duties, relationship, startDate,
      wage, hours, status, atWill, credits, expenses, liability, compete
    };

    switch (step) {
      case 1:
        return <LetterIntro
          nextStep={this.nextStep}
          handleDateChange={this.handleDateChange}
          handleChange={this.handleChange}
          values={values}
        />

      case 2:
        return <InternshipInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 3:
        return <InternshipInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 4:
        return <InternshipInfo3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />

      // case 4:
      //   return <Success />
    }
  }


}
