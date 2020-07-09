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
import LLCResolutionDocument from './LLCResolutionDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';




export default class LLCResolutionIntro extends Component {

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
            <p>Enter the state:</p>
            <input
              type='text'
              onChange={this.props.handleChange('state')}
            />
          </form>
          <br />


          <form>
            <p>Is there only one member or multiple members?</p>
            <input
              type='radio' id="one" name="holder" value="One"
              onChange={this.props.handleChange('number')}
            />
            <label for="yes"> One Member </label><br />
            <input
              type='radio' id="multiple" name="holder" value="Multiple"
              onChange={this.props.handleChange('number')}
            />
            <label for="no"> Multiple Members </label><br />

          </form>
          <br />


          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <LLCResolutionDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}