import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import MutualNDAIntro from './MutualNDAIntro.jsx';
import MutualNDAInfo from './MutualNDAInfo.jsx';
import MutualNDAInfo2 from './MutualNDAInfo2.jsx';
import MutualNDAPDF from './MutualNDAPDF.jsx';


// import DisciplinaryInfo from './DisciplinaryInfo.jsx';
// import DisciplinaryPDF from './DisciplinaryPDF.jsx';
import { Alert } from 'react-alert'


export default class MutualNDAQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    recitalList: [{ name: "" }],
    date: new Date(),
    employerName: '[NAME]',
    employeeName: '[NAME]',
    address: '[X]',
    dateSigned: new Date(),
    companyName: '[COMPANY NAME]',
    state: '[STATE]',
    endDate: new Date(),
    term: '[X]',
    confidential: '',
    confidentialUse: '',
    confidentialUseCheck: '',
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

  handleRecitalChange = (e) => {
    let recitalList = [...this.state.recitalList]
    recitalList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ recitalList }, () => console.log(this.state.recitalList))
  }

  addRecital = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      recitalList: [...prevState.recitalList, { name: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const {
      percent,
      recitalList,
      date,
      employerName,
      employeeName,
      address,
      dateSigned,
      companyName,
      state,
      endDate,
      term,
      confidential,
      confidentialUse,
      confidentialUseCheck,
      docs_used
    } = this.state;
    const values = {
      percent,
      recitalList,
      date,
      employerName,
      employeeName,
      address,
      dateSigned,
      companyName,
      state,
      endDate,
      term,
      confidential,
      confidentialUse,
      confidentialUseCheck
    };

    switch (step) {
      case 1:
        return <MutualNDAIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />

      case 2:
        return <MutualNDAInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleRecitalChange={this.handleRecitalChange}
          addRecital={this.addRecital}
        />
      case 3:
        return <MutualNDAInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 4:
        return <MutualNDAPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
