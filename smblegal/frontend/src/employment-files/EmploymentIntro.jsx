import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import EmploymentDocument from './EmploymentDocument.jsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';





export default class EmploymentIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    // alert(values.percentage)
    return (
      <div class='ask'>
        <Navbar2 />

        <div class="back-button" style={{ paddingLeft: "20px", marginLeft: "20px" }}>
          <Link to="/EmploymentLogin" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
        </div>

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>
          {/* <DayPicker showOutsideDays
            selectedDays={values.date}
            onDayClick={this.handleDateClick} /> */}
          <form>
            <p> Enter the date: </p>
            <input
              type='date' id="letterdate" name="letterdate"
              onChange={this.props.handleChange('date')}
            />

          </form>
          <br />

          <form>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('employeeName')}
            />
          </form>
          <br />


          <form>
            <p>Enter your address:</p>
            <input
              type='text'
              onChange={this.props.handleChange('address')}
            />
          </form>
          <br />

          <form>
            <p>Enter employee's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('internName')}
            />
          </form>
          <br />


          <form>
            <p>Enter company's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('companyName')}
            />
          </form>
          <br />


          <form>
            <p>Enter the state:</p>
            <input
              type='text'
              onChange={this.props.handleChange('state')}
            />
          </form>
          <br />

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          {/* <Document class='doc' values={values}
          /> */}
          <EmploymentDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}