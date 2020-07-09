import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import IncorporationIntro from './IncorporationIntro.jsx';
import IncorporationInfo from './IncorporationInfo.jsx';
import IncorporationInfo2 from './IncorporationInfo2.jsx';
import IncorporationInfo3 from './IncorporationInfo3.jsx';

import IncorporationPDF from './IncorporationPDF.jsx';

import { Alert } from 'react-alert'


export default class IncorporationQuestions extends Component {
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
    stock: '',
    purpose: '',
    rights: '',
    specifyPurpose: '',
    specifyRights: '',
    shares: '[X]',
    price: '[X]',
    preferredShares: '[X]',
    preferredPrice: '[X]',
    incorpList: [{ name: "" }],
    checkFax: "",
    registered: "[X]"

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
      stock,
      purpose,
      rights,
      specifyPurpose,
      specifyRights,
      shares,
      price,
      preferredShares,
      preferredPrice,
      incorpList,
      checkFax,
      registered

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
      stock,
      purpose,
      rights,
      specifyPurpose,
      specifyRights,
      shares,
      price,
      preferredShares,
      preferredPrice,
      incorpList,
      checkFax,
      registered

    };

    switch (step) {
      case 1:
        return <IncorporationIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          handleIncorpChange={this.handleIncorpChange}
          addIncorp={this.addIncorp}
          values={values}
        />
      case 2:
        return <IncorporationInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 3:
        return <IncorporationInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 4:
        return <IncorporationInfo3
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        />
      case 5:
        return <IncorporationPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
