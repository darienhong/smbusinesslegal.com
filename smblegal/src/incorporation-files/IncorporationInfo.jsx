import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import IncorporationDocument from './IncorporationDocument.jsx';


export default class IncorporationInfo extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();

  }
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
    this.props.decreasePercentage();

  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col height'>

          <form>
            <p>Enter the company's address: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyAddress')}
            />
          </form>
          <br />

          <form>
            <p>Enter the city that the company is located in: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyCity')}
            />
          </form>
          <br />


          <form>
            <p>Enter the county that the company is located in: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyCounty')}
            />
          </form>
          <br />

          <form>
            <p>Enter the company's zip code: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyZip')}
            />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <IncorporationDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}