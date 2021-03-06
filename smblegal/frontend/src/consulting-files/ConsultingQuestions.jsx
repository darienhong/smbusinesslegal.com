import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ConsultingIntro from './ConsultingIntro.jsx';

import ConsultingInfo from './ConsultingInfo.jsx';
import ConsultingInfo2 from './ConsultingInfo2.jsx';
import ConsultingInfo3 from './ConsultingInfo3';
import ConsultingPDF from './ConsultingPDF.jsx';


import { Alert } from 'react-alert'


export default class ConsultingQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    expenseList: [{ name: "" }],
    date: new Date(),
    employeeName: '[NAME]',
    consultantName: '[NAME]',
    companyName: '[COMPANY NAME]',
    state: '[STATE]',
    endDate: new Date(),
    wage: '[X – if paid must comply with minimum wage laws]',
    hours: '[X]',
    expenses: '',
    liability: '[X]',
    registration: '[X]',
    compensation: '[X]',
    compSched: '[X]',
    techConfidential: 'Technical data, trade secrets, know-how, research, product or service ideas or plans, software codes and designs, developments, inventions, laboratory notebooks, processes, formulas, techniques, materials, engineering designs and drawings, configurations, lists of or information or information relating to employees and consultants of the company, any intellectual property developed by the Consultant (as described above).',
    nontechConfidential: 'Non-technical information relating to products, pricing, price lists, margins, market-share data, merchandising plans and strategies, finances, financial accounting data and information, suppliers, customers, customer lists, purchasing data, sales and marketing plans, current or future business plans.',
    insurance: '[X]',
    other: '[X]',
    scope: '[X]',
    term: '[X]',
    supervision: '[X]',
    secrets: '[X]',
    type: '[LLC]',
    docs_used: localStorage.getItem('docs_used'),
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
    const { date, employeeName, consultantName, companyName, state, endDate,
      wage, hours, expenses, liability, percent,
      expenseList, registration, compensation, compSched,
      techConfidential, nontechConfidential, insurance, other, scope, term, supervision, secrets, type, docs_used
    } = this.state;
    const values = {
      date, employeeName, consultantName, companyName, state, endDate,
      wage, hours, expenses, liability, percent, expenseList, registration, compensation, compSched,
      techConfidential, nontechConfidential, insurance, other, scope, term, supervision, secrets, type
    };

    switch (step) {
      case 1:
        return <ConsultingIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />

      case 2:
        return <ConsultingInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleExpenseChange={this.handleExpenseChange}
          addExpense={this.addExpense}

        />
      case 3:
        return <ConsultingInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 4:
        return <ConsultingInfo3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 5:
        return <ConsultingPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
