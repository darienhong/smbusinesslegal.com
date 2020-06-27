import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import DisclosureNDAIntro from './DisclosureNDAIntro.jsx';
import DisclosureNDAInfo from './DisclosureNDAInfo.jsx';
import DisclosureNDAInfo2 from './DisclosureNDAInfo2.jsx';
import DisclosureNDAPDF from './DisclosureNDAPDF.jsx';


// import DisciplinaryInfo from './DisciplinaryInfo.jsx';
// import DisciplinaryPDF from './DisciplinaryPDF.jsx';
import { Alert } from 'react-alert'


export default class DisclosureNDAQuestions extends Component {
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
    partyCheck: '',
    parties: '',
    authorized: ' '

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
      partyCheck,
      parties,
      authorized
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
      confidentialUseCheck,
      partyCheck,
      parties,
      authorized
    };

    switch (step) {
      case 1:
        return <DisclosureNDAIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />

      case 2:
        return <DisclosureNDAInfo
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
        return <DisclosureNDAInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 4:
        return <DisclosureNDAPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
