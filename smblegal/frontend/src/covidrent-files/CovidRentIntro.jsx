import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import CovidRentDocument from './CovidRentDocument.jsx';



export default class CovidRentIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <div class="back-button" style={{ paddingLeft: "20px", marginLeft: "20px" }}>
          <Link to="/Covid_19Login" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
        </div>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>

          <p>NOTE: SHOULD BE SENT TO LANDLORD WITHIN 7 DAYS OF BEING UNABLE TO PAY
          RENT/NOT PAYING RENT ON THE DUE DATE
          </p>
          <form>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('tenant')}
            />
          </form>
          <br />

          <form>
            <p>Enter landlord's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('landlord')}
            />
          </form>
          <br />

          <form>
            <p>Enter the subject of the letter:</p>
            <input
              type='text'
              onChange={this.props.handleChange('subject')}
            />
          </form>
          <br />


          <form>
            <p>Enter the date:</p>
            <input
              type='date'
              onChange={this.props.handleChange('date')}
            />
          </form>
          <br />

          <form>
            <p>Do you have less than 10 employees?</p>
            <input
              type='radio' id="yes" name="emp" value="Yes"
              onChange={this.props.handleChange('employees')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="emp" value="No"
              onChange={this.props.handleChange('employees')}
            />
            <label for="no"> No </label><br />

          </form>

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <CovidRentDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}