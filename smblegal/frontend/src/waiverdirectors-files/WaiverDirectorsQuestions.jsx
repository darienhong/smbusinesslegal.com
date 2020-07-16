import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import WaiverDirectorsIntro from './WaiverDirectorsIntro.jsx';
import WaiverDirectorsInfo from './WaiverDirectorsInfo.jsx';

import WaiverDirectorsPDF from './WaiverDirectorsPDF.jsx';

import { Alert } from 'react-alert'


export default class WaiverDirectorsQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    name: '[X]',
    type: '[X]',
    companyName: '[X]',
    corporation: '[X]',
    signerList: [{ name: "[X]" }],
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

  handleSignerChange = (e) => {
    let signerList = [...this.state.signerList]
    signerList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ signerList }, () => console.log(this.state.signerList))
  }

  addSigner = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      signerList: [...prevState.signerList, { name: "" }],
    }));
  }


  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      companyName,
      corporation,
      signerList,
      resolutionList,
      voterList,
      unanimous,
      state,
      number,
      name,
      type,
      docs_used

    } = this.state;
    const values = {
      percent,
      date,
      companyName,
      corporation,
      signerList,
      resolutionList,
      voterList,
      unanimous,
      state,
      number,
      name,
      type
    };

    switch (step) {
      case 1:
        return <WaiverDirectorsIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          handleSignerChange={this.handleSignerChange}
          handleResolutionChange={this.handleResolutionChange}
          handleVoterChange={this.handleVoterChange}
          addSigner={this.addSigner}
          addResolution={this.addResolution}
          addVoter={this.addVoter}
          values={values}
        />
      case 2:
        return <WaiverDirectorsInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          handleSignerChange={this.handleSignerChange}
          handleResolutionChange={this.handleResolutionChange}
          handleVoterChange={this.handleVoterChange}
          addSigner={this.addSigner}
          addResolution={this.addResolution}
          addVoter={this.addVoter}
          values={values}
        />

      case 3:
        return <WaiverDirectorsPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
