import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import StatementIntro from './StatementIntro.jsx';
import StatementPDF from './StatementPDF.jsx';

import { Alert } from 'react-alert'


export default class StatementQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    companyName: '[X]',
    directorList: [{ name: "" }],
    state: '[X]',
    name: '[X]',
    phone: '[X]'
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

  handleDirectorChange = (e) => {
    let directorList = [...this.state.directorList]
    directorList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ directorList }, () => console.log(this.state.directorList))
  }

  addDirector = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      directorList: [...prevState.directorList, { name: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      companyName,
      directorList,
      state,
      name,
      phone
    } = this.state;
    const values = {
      percent,
      date,
      companyName,
      directorList,
      state,
      name,
      phone
    };

    switch (step) {
      case 1:
        return <StatementIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleDirectorChange={this.handleDirectorChange}
          addDirector={this.addDirector}
        // doc={EmploymentDocument}
        />
      case 2:
        return <StatementPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
