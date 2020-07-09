import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import ShareholderMinutesIntro from './ShareholderMinutesIntro.jsx';
import ShareholderMinutesInfo from './ShareholderMinutesInfo.jsx';
import ShareholderMinutesInfo2 from './ShareholderMinutesInfo2.jsx';
import ShareholderMinutesInfo3 from './ShareholderMinutesInfo3.jsx';
import ShareholderMinutesPDF from './ShareholderMinutesPDF.jsx';

import { Alert } from 'react-alert'


export default class ShareholderMinutesQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    type: '[X]',
    location: '[X]',
    chair: '[X]',
    position: '[X]',
    directors: [{ name: "" }],
    secretary: '[X]',
    companyName: '[X]',
    corporation: '[X]',
    agenda: '[X]',
    minutes: '[X]',
    present: '',
    presence: [{ person: "" }],
    inPerson: '',
    electronic: '',
    notice: '',
    outstanding: '[X]',
    represented: '[X]',
    reason: '',
    secPosition: '[X]'

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

  handleDirectorsChange = (e) => {
    let directors = [...this.state.directors]
    directors[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ directors }, () => console.log(this.state.directors))
  }

  addDirector = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      directors: [...prevState.directors, { name: "" }],
    }));
  }


  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      type,
      location,
      chair,
      position,
      secretary,
      companyName,
      corporation,
      agenda,
      minutes,
      present,
      directors,
      presence,
      inPerson,
      electronic,
      notice,
      outstanding,
      represented,
      reason,
      secPosition


    } = this.state;
    const values = {
      percent,
      date,
      type,
      location,
      chair,
      position,
      secretary,
      companyName,
      corporation,
      agenda,
      minutes,
      present,
      directors,
      presence,
      inPerson,
      electronic,
      notice,
      outstanding,
      represented,
      reason,
      secPosition

    };

    switch (step) {
      case 1:
        return <ShareholderMinutesIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />
      case 2:
        return <ShareholderMinutesInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleDirectorsChange={this.handleDirectorsChange}
          // handlePresenceChange={this.handlePresenceChange}
          addDirector={this.addDirector}
        // addPerson={this.addPerson}
        // addElectronic={this.addElectronic}
        // doc={EmploymentDocument}
        />
      case 3:
        return <ShareholderMinutesInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}

          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleDirectorsChange={this.handleDirectorsChange}
          addDirector={this.addDirector}
        // doc={EmploymentDocument}
        />
      case 4:
        return <ShareholderMinutesInfo3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleDirectorsChange={this.handleDirectorsChange}
          addDirector={this.addDirector}
        // doc={EmploymentDocument}
        />
      case 5:
        return <ShareholderMinutesPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
