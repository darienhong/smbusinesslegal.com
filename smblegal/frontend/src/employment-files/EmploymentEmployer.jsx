import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import EmploymentDocument from './EmploymentDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';




export default class EmploymentEmployer extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }


  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <Navbar2 />

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>
          <form>
            <p>Enter your title:</p>
            <input
              type='text'
              onChange={this.props.handleChange('employerTitle')}
            />
          </form>
          <br />
          <form>
            <p>Enter your phone number:</p>
            <input
              type='text'
              onChange={this.props.handleChange('phone')}
            />
          </form>
          <br />
          <form>
            <p>Enter your email:</p>
            <input
              type='email'
              onChange={this.props.handleChange('email')}
            />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <EmploymentDocument class='doc' values={values}
          />
        </div>
      </div >

    );
  }


}