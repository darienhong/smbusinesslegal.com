import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FormationIntro from './FormationIntro.jsx';
import FormationInfo from './FormationInfo.jsx';

import FormationPDF from './FormationPDF.jsx';

import { Alert } from 'react-alert'


export default class FormationQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    companyName: '[X]',
    name: '[X]',
    address: '[X]',
    phone: '[X]',
    fax: '[X]',
    companyAddress: '[X]',
    companyCity: '[X]',
    companyCounty: '[X]',
    companyZip: '[X]',
    incorpList: [{ name: "" }],
    checkFax: "",
    registered: "[X]",
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

  handleIncorpChange = (e) => {
    let incorpList = [...this.state.incorpList]
    incorpList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ incorpList }, () => console.log(this.state.incorpList))
  }

  addIncorp = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      incorpList: [...prevState.incorpList, { name: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      companyName,
      name,
      address,
      phone,
      fax,
      companyAddress,
      companyCity,
      companyCounty,
      companyZip,
      incorpList,
      checkFax,
      registered,
      docs_used
    } = this.state;
    const values = {
      percent,
      date,
      companyName,
      name,
      address,
      phone,
      fax,
      companyAddress,
      companyCity,
      companyCounty,
      companyZip,
      incorpList,
      checkFax,
      registered
    };

  

   switch (step) {
      case 1:
        return  <FormationIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          handleIncorpChange={this.handleIncorpChange}
          addIncorp={this.addIncorp}
          values={values}
        // doc={EmploymentDocument}
        />
      
        
      case 2:
        return <FormationInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />
      case 3:
        return <FormationPDF
          prevStep={this.prevStep}
          values={values} />
    }

    
  }


}
