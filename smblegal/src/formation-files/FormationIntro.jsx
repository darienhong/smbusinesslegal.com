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
import FormationDocument from './FormationDocument.jsx';



export default class FormationIntro extends Component {

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
          <Link to="/Formation" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
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
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('name')}
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
            <p>Enter your telephone number:</p>
            <input
              type='text'
              onChange={this.props.handleChange('phone')}
            />
          </form>
          <br />

          <form>
            <p>Enter your fax number (if applicable):</p>
            <input
              type='text'
              onChange={this.props.handleChange('fax')}
            />
          </form>
          <br />

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <FormationDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}