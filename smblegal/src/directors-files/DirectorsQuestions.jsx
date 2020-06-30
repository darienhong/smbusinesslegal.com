import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import DirectorsIntro from './DirectorsIntro.jsx';
import DirectorsInfo from './DirectorsInfo.jsx';
import DirectorsInfo2 from './DirectorsInfo2.jsx';
import DirectorsInfo3 from './DirectorsInfo3.jsx';

import DirectorsPDF from './DirectorsPDF.jsx';

import { Alert } from 'react-alert'


export default class DirectorsQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    companyName: '[X]',
    corporation: '[X]',
    number: '[X]',
    state: '[X]',
    ceo: '[X]',
    president: '[X]',
    cfo: '[X]',
    secretary: '[X]',
    stock: '',
    shares: '[X]',
    fiscalYear: '[X]',
    office: '[X]',
    purchaser: '',
    numberShares: '',
    price: '',
    signersList: [{ name: "[X]" }],
    purchasersList: [{ name: "", shares: "", price: "" }],
    docName: 'Articles of Incorporation',
    docNameOther: '[X]',
    unanimous: ''

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

  handleSignersChange = (e) => {
    let signersList = [...this.state.signersList]
    signersList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ signersList }, () => console.log(this.state.signersList))
  }

  addSigner = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      signersList: [...prevState.signersList, { name: "" }],
    }));
  }

  handlePurchasersChange = (e) => {
    let purchasersList = [...this.state.purchasersList]
    purchasersList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ purchasersList }, () => console.log(this.state.purchasersList))
  }

  addPurchaser = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      purchasersList: [...prevState.purchasersList, { name: "", shares: "", price: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      companyName,
      number,
      state,
      ceo,
      president,
      cfo,
      secretary,
      stock,
      shares,
      fiscalYear,
      office,
      purchaser,
      numberShares,
      price,
      signersList,
      corporation,
      docName,
      docNameOther,
      unanimous,
      purchasersList
    } = this.state;
    const values = {
      percent,
      date,
      companyName,
      number,
      state,
      ceo,
      president,
      cfo,
      secretary,
      stock,
      shares,
      fiscalYear,
      office,
      purchaser,
      numberShares,
      price,
      signersList,
      corporation,
      docName,
      docNameOther,
      unanimous,
      purchasersList
    };

    switch (step) {
      case 1:
        return <DirectorsIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 2:
        return <DirectorsInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 3:
        return <DirectorsInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handlePurchasersChange={this.handlePurchasersChange}
          addPurchaser={this.addPurchaser}

        />
      case 4:
        return <DirectorsInfo3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleSignersChange={this.handleSignersChange}
          addSigner={this.addSigner}
        />
      case 5:
        return <DirectorsPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
