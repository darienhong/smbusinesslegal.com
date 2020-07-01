import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import WaiverShareholdersIntro from './WaiverShareholdersIntro.jsx';
import WaiverShareholdersInfo from './WaiverShareholdersInfo.jsx';

import WaiverShareholderPDF from './WaiverShareholderPDF.jsx';

import { Alert } from 'react-alert'


export default class WaiverShareholdersQuestions extends Component {
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
    shares: '[X]'

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
      shares

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
      type,
      shares
    };

    switch (step) {
      case 1:
        return <WaiverShareholdersIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 2:
        return <WaiverShareholdersInfo
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
        return <WaiverShareholderPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
