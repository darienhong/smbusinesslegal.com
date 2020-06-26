import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import Document from './Document.jsx';
import LetterIntro from '../internship-files/LetterIntro.jsx';
import InternshipInfo from '../internship-files/InternshipInfo.jsx';
import EmploymentInfo from '../internship-files/EmploymentInfo.jsx';
import EmploymentInfo2 from '../internship-files/EmploymentInfo2.jsx';
import InternshipEmployer from '../internship-files/InternshipEmployer.jsx';
import PDF from '.../internship-files/PDF.jsx';



import PDF from './PDF.jsx';


import { Alert } from 'react-alert'


export default class Questions extends Component {
  state = {
    step: 1,
    percent: 50,
    expenseList: [{ name: "" }],
    date: new Date(),
    employeeName: '[NAME]',
    address: '[ADDRESS]',
    internName: '[NAME]',
    companyName: '[COMPANY NAME]',
    state: '[STATE]',
    title: '[X]',
    duties: '[X]',
    relationship: '[X]',
    startDate: new Date(),
    wage: '[X – if paid must comply with minimum wage laws]',
    hours: '[X]',
    status: '[Exempt or non-exempt]',
    atWill: '[X]',
    expenses: '',
    liability: '[X]',
    compete: '[X]',
    sick: '[X]',
    employerTitle: '[TITLE]',
    phone: '[PHONE]',
    email: '[EMAIL]',
    paid: '[X]',
    verification: '[X]',
    restaurant: '[X]',
    commission: '[X]',
    comProcedure: '[X]',
    tipping: '[X]'
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

  handleExpenseChange = (e) => {
    let expenseList = [...this.state.expenseList]
    expenseList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ expenseList }, () => console.log(this.state.expenseList))
  }

  addExpense = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      expenseList: [...prevState.expenseList, { name: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const { date, employeeName, address, internName, companyName, state, title, duties, relationship, startDate,
      wage, hours, status, atWill, credits, expenses, liability, compete, percent, sick,
      employerTitle, phone, email, paid, verification, expenseList, restaurant, commission, tipping
    } = this.state;
    const values = {
      date, employeeName, address, internName, companyName, state, title, duties, relationship, startDate,
      wage, hours, status, atWill, credits, expenses, liability, compete, percent, sick, employerTitle,
      phone, email, paid, verification, expenseList, restaurant, commission, tipping
    };

    switch (step) {
      case 1:
        return <LetterIntro
          nextStep={this.nextStep}
          handleDateChange={this.handleDateChange}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />

      case 2:
        return <InternshipInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 3:
        return <EmploymentInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 4:
        return <EmploymentInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          handleExpenseChange={this.handleExpenseChange}
          addExpense={this.addExpense}
          // handleExpenses={this.handleExpenses}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 5:
        return <InternshipEmployer
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 6:
        return <PDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}