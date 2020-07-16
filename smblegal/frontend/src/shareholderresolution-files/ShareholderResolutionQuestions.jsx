import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import ShareholderResolutionIntro from './ShareholderResolutionIntro.jsx';
import ShareholderResolutionInfo from './ShareholderResolutionInfo.jsx';

import ShareholderResolutionPDF from './ShareholderResolutionPDF.jsx';

import { Alert } from 'react-alert'


export default class ShareholderResolutionQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    companyName: '[X]',
    corporation: '[X]',
    recitalList: [{ name: "" }],
    resolutionList: [{ name: "" }],
    voterList: [{ name: "[X]" }],
    unanimous: '',
    state: '[X]',
    number: '',
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


  handleResolutionChange = (e) => {
    let resolutionList = [...this.state.resolutionList]
    resolutionList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ resolutionList }, () => console.log(this.state.resolutionList))
  }

  addResolution = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      resolutionList: [...prevState.resolutionList, { name: "" }],
    }));
  }

  handleVoterChange = (e) => {
    let voterList = [...this.state.voterList]
    voterList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ voterList }, () => console.log(this.state.voterList))
  }

  addVoter = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      voterList: [...prevState.voterList, { name: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      companyName,
      corporation,
      recitalList,
      resolutionList,
      voterList,
      unanimous,
      state,
      number,
      docs_used
    } = this.state;
    const values = {
      percent,
      date,
      companyName,
      corporation,
      recitalList,
      resolutionList,
      voterList,
      unanimous,
      state,
      number
    };

    switch (step) {
      case 1:
        return <ShareholderResolutionIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 2:
        return <ShareholderResolutionInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          handleRecitalChange={this.handleRecitalChange}
          handleResolutionChange={this.handleResolutionChange}
          handleVoterChange={this.handleVoterChange}
          addRecital={this.addRecital}
          addResolution={this.addResolution}
          addVoter={this.addVoter}
          values={values}
        />

      case 3:
        return <ShareholderResolutionPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
