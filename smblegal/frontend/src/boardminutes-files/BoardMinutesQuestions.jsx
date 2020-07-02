import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import BoardMinutesIntro from './BoardMinutesIntro.jsx';
import BoardMinutesInfo from './BoardMinutesInfo.jsx';
import BoardMinutesInfo2 from './BoardMinutesInfo2.jsx';
import BoardMinutesInfo3 from './BoardMinutesInfo3.jsx';
import BoardMinutesPDF from './BoardMinutesPDF.jsx';

import { Alert } from 'react-alert'


export default class BoardMinutesQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    type: '[X]',
    location: '[X]',
    chair: '[X]',
    position: '[X]',
    // directors: [{ name: "", address: "", person: "" }],
    directors: [{ name: "", address: "" }],
    secretary: '[X]',
    companyName: '[X]',
    corporation: '[X]',
    agenda: '[X]',
    minutes: '[X]',
    present: '',
    presence: [{ person: "" }],
    inPerson: '',
    electronic: ''

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
      directors: [...prevState.directors, { name: "", address: "" }],
    }));
  }


  handlePresenceChange = (e) => {
    let presence = [...this.state.presence]
    presence[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ presence }, () => console.log(this.state.presence))
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
      electronic

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
      electronic

    };

    switch (step) {
      case 1:
        return <BoardMinutesIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />
      case 2:
        return <BoardMinutesInfo
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
        return <BoardMinutesInfo2
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
        return <BoardMinutesInfo3
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
        return <BoardMinutesPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
