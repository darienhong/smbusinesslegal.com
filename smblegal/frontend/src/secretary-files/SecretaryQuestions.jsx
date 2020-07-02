import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import SecretaryIntro from './SecretaryIntro.jsx';
import SecretaryPDF from './SecretaryPDF.jsx';

import { Alert } from 'react-alert'


export default class SecretaryQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    dateAdopted: new Date(),
    name: '[X]',
    companyName: '[X]',
    corporation: '[X]',
    adopted: '[X]',


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
      date,
      dateAdopted,
      companyName,
      name,
      corporation,
      adopted,

    } = this.state;
    const values = {
      percent,
      date,
      dateAdopted,
      companyName,
      name,
      corporation,
      adopted,


    };

    switch (step) {
      case 1:
        return <SecretaryIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />
      case 2:
        return <SecretaryPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
