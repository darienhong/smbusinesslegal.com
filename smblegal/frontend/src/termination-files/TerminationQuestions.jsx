import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import TerminationIntro from './TerminationIntro.jsx';
import TerminationInfo from './TerminationInfo.jsx';
import TerminationInfo2 from './TerminationInfo2.jsx';
import TerminationInfo3 from './TerminationInfo3.jsx';
import TerminationPDF from './TerminationPDF.jsx';


// import DisciplinaryInfo from './DisciplinaryInfo.jsx';
// import DisciplinaryPDF from './DisciplinaryPDF.jsx';
import { Alert } from 'react-alert'


export default class TerminationQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    actionList: [{ name: "" }],
    date: new Date(),
    employerName: '[EMPLOYEE NAME]',
    employeeName: '[EMPLOYEE NAME]',
    address: '[X]',
    warning: '[X]',
    dateSigned: new Date(),
    companyName: '[COMPANY NAME]',
    state: '[STATE]',
    endDate: new Date(),
    property: '[X]',
    benefits: '[X]',
    reference: '[X]',
    cobra: '[X]',
    forCause: '[X]',
    cause: '[X]',
    release: '[X]',
    disparagement: '[X]',
    publicity: '[X]',
    contact: '[X]'
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

  increasePercentage = () => {
    // this.setState((prevState) => ({
    //   percent: prevState.percent >= 100 ? 0 : prevState.percent + 25,
    // }))
    const { percent } = this.state
    this.setState({
      percent: percent + 25
    })
  }


  decreasePercentage = () => {
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent - 25,
    }))
  }


  handleChange = input => event => {
    this.setState({ [input]: event.target.value })
  }

  handleActionChange = (e) => {
    let actionList = [...this.state.actionList]
    actionList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ actionList }, () => console.log(this.state.actionList))
  }

  addAction = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      actionList: [...prevState.actionList, { name: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      employerName,
      employeeName,
      address,
      companyName,
      state,
      endDate,
      property,
      benefits,
      reference,
      cobra,
      forCause,
      cause,
      release,
      disparagement,
      publicity,
      contact,
      dateSigned
    } = this.state;
    const values = {
      percent,
      date,
      employerName,
      employeeName,
      address,
      companyName,
      state,
      endDate,
      property,
      benefits,
      reference,
      cobra,
      forCause,
      cause,
      release,
      disparagement,
      publicity,
      contact,
      dateSigned
    };

    switch (step) {
      case 1:
        return <TerminationIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />

      case 2:
        return <TerminationInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // handleActionChange={this.handleActionChange}
        // addAction={this.addAction}
        />
      case 3:
        return <TerminationInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 4:
        return <TerminationInfo3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 5:
        return <TerminationPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
