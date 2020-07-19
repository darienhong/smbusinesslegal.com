import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import SaleIntro from './SaleIntro.jsx';
import SaleInfo from './SaleInfo.jsx';
import SaleInfo2 from './SaleInfo2.jsx';
import SalePDF from './SalePDF.jsx';

import { Alert } from 'react-alert'


export default class SaleQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    deliverDate: new Date(),
    sellerName: '[X]',
    buyerName: '[X]',
    sellerAddress: '[X]',
    buyerAddress: '[X]',
    corporation: '[X]',
    adopted: '[X]',
    recitalList: [{ name: "" }],
    goodList: [{ name: "" }],
    deliver: '[X]',
    method: '[X]',
    costs: '[X]',
    warranties: '[X]',
    price: '[X]',
    warrantiesList: [{ name: "" }],
    state: '[X]',
    number: '[X]'

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

  handleGoodChange = (e) => {
    let goodList = [...this.state.goodList]
    goodList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ goodList }, () => console.log(this.state.goodList))
  }

  addGood = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      goodList: [...prevState.goodList, { name: "" }],
    }));
  }

  handleWarrantiesChange = (e) => {
    let warrantiesList = [...this.state.warrantiesList]
    warrantiesList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ warrantiesList }, () => console.log(this.state.warrantiesList))
  }

  addWarranty = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      warrantiesList: [...prevState.warrantiesList, { name: "" }],
    }));
  }


  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      deliverDate,
      sellerName,
      buyerName,
      sellerAddress,
      buyerAddress,
      corporation,
      adopted,
      recitalList,
      goodList,
      deliver,
      method,
      costs,
      warranties,
      price,
      warrantiesList,
      state,
      number

    } = this.state;
    const values = {
      percent,
      date,
      deliverDate,
      sellerName,
      buyerName,
      sellerAddress,
      buyerAddress,
      corporation,
      adopted,
      recitalList,
      goodList,
      deliver,
      method,
      costs,
      warranties,
      price,
      warrantiesList,
      state,
      number
    };

    switch (step) {
      case 1:
        return <SaleIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />
      case 2:
        return <SaleInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          handleRecitalChange={this.handleRecitalChange}
          handleGoodChange={this.handleGoodChange}
          addRecital={this.addRecital}
          addGood={this.addGood}
          values={values}
        // doc={EmploymentDocument}
        />

      case 3:
        return <SaleInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          handleWarrantiesChange={this.handleWarrantiesChange}
          addWarranty={this.addWarranty}
          values={values}
        // doc={EmploymentDocument}
        />
      case 4:
        return <SalePDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
