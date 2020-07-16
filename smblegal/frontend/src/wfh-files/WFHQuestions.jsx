import React, { Component } from 'react';
import '../App.css';
import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import WFHIntro from './WFHIntro.jsx';
import WFHInfo from './WFHInfo.jsx';
import WFHInfo2 from './WFHInfo2.jsx';

import WFHPDF from './WFHPDF.jsx';


// import DisciplinaryInfo from './DisciplinaryInfo.jsx';
// import DisciplinaryPDF from './DisciplinaryPDF.jsx';
import { Alert } from 'react-alert'


export default class WFHQuestions extends Component {
  state = {
    step: 1,
    percent: 50,
    date: new Date(),
    companyName: '[X]',
    wfh: '[X]',
    schedChange: '',
    changeList: [{ name: "" }],
    presence: '',
    tempCheck: '',
    breaks: '',
    locations: '[X]',
    supplies: '',
    administrator: '[X]',
    provisions: '',
    provisionList: [{ name: "" }],
    prohibited: '[X]',
    discouraged: '[X]',
    newPolicy: '[X]',
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

  handleScheduleChange = (e) => {
    let changeList = [...this.state.changeList]
    changeList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ changeList }, () => console.log(this.state.changeList))
  }

  addScheduleChange = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      changeList: [...prevState.changeList, { name: "" }],
    }));
  }

  handleProvisionChange = (e) => {
    let provisionList = [...this.state.provisionList]
    provisionList[e.target.dataset.id][e.target.className] = e.target.value
    this.setState({ provisionList }, () => console.log(this.state.provisionList))
  }

  addProvision = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      provisionList: [...prevState.provisionList, { name: "" }],
    }));
  }

  render() {
    const { step } = this.state;
    const {
      percent,
      date,
      companyName,
      wfh,
      schedChange,
      changeList,
      presence,
      tempCheck,
      breaks,
      locations,
      supplies,
      newPolicy,
      administrator,
      provisions,
      provisionList,
      prohibited,
      discouraged,
      docs_used
    } = this.state;
    const values = {
      percent,
      date,
      companyName,
      wfh,
      schedChange,
      changeList,
      presence,
      tempCheck,
      breaks,
      locations,
      supplies,
      administrator,
      provisions,
      provisionList,
      prohibited,
      discouraged,
      newPolicy

    };

    switch (step) {
      case 1:
        return <WFHIntro
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleScheduleChange={this.handleScheduleChange}
          addScheduleChange={this.addScheduleChange}
        // doc={EmploymentDocument}
        />
      case 2:
        return <WFHInfo
          nextStep={this.nextStep}
          prevStep={this.prevStep}

          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
        // doc={EmploymentDocument}
        />
      case 3:
        return <WFHInfo2
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          increasePercentage={this.increasePercentage}
          decreasePercentage={this.decreasePercentage}
          values={values}
          handleProvisionChange={this.handleProvisionChange}
          addProvision={this.addProvision}
        // doc={EmploymentDocument}
        />
      case 4:
        return <WFHPDF
          prevStep={this.prevStep}
          values={values} />
    }
  }


}
