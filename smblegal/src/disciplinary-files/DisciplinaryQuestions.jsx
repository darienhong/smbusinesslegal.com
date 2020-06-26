import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import DisciplinaryIntro from './DisciplinaryIntro.jsx';
import DisciplinaryInfo from './DisciplinaryInfo.jsx';
import DisciplinaryPDF from './DisciplinaryPDF.jsx';
import { Alert } from 'react-alert'


export default class DisciplinaryQuestions extends Component {
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
    actions: '',
    restaurant: ''
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
    const { percent,
      actionList,
      date,
      employerName,
      employeeName,
      address,
      warning,
      dateSigned,
      companyName,
      state,
      endDate,
      actions,
      restaurant
    } = this.state;
    const values = {
      percent,
      actionList,
      date,
      employerName,
      employeeName,
      address,
      warning,
      dateSigned,
      companyName,
      state,
      endDate,
      actions,
      restaurant
    };

    switch (step) {
      case 1:
        return <DisciplinaryIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />

      case 2:
        return <DisciplinaryInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleActionChange={this.handleActionChange}
          addAction={this.addAction}

        />
      case 3:
        return <DisciplinaryPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
