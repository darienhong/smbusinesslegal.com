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
import BoardMinutesDocument from './BoardMinutesDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';




export default class BoardMinutesIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <Navbar2 />

        <div class="back-button" style={{ paddingLeft: "20px", marginLeft: "20px" }}>
          <Link to="/GovernanceLogin" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
        </div>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>

          <form>
            <p>Enter the company's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('companyName')}
            />
          </form>
          <br />

          <form>
            <p>Is this an annual or special meeting?</p>
            <input
              type='radio' id="annual" name="annual" value="Annual"
              onChange={this.props.handleChange('type')}
            />
            <label for="inc"> Annual </label><br />
            <input
              type='radio' id="special" name="special" value="Special"
              onChange={this.props.handleChange('type')}
            />
            <label for="share"> Special </label><br />

          </form>
          <br />

          <form>
            <p>When was the meeting held?</p>
            <input
              type='date'
              onChange={this.props.handleChange('date')}
            />
          </form>
          <br />

          <form>
            <p>Where was the meeting held?</p>
            <input
              type='text'
              onChange={this.props.handleChange('location')}
            />
          </form>
          <br />

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <BoardMinutesDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}