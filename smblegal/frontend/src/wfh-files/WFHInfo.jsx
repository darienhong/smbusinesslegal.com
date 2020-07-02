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

import DisciplinaryDocument from '../disciplinary-files/DisciplinaryDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import WFHDocument from './WFHDocument.jsx';
import Navbar from '../components/nav-bar.jsx';




export default class WFHInfo extends Component {

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
        <Navbar />

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>

          <form>
            <p>Do you allow physical presence at the office?</p>
            <input
              type='radio' id="yes" name="pres" value="Yes"
              onChange={this.props.handleChange('presence')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="pres" value="No"
              onChange={this.props.handleChange('presence')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          <form>
            <p>Are you taking temperature checks upon entry to the office?</p>
            <input
              type='radio' id="yes" name="temp" value="Yes"
              onChange={this.props.handleChange('tempCheck')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="temp" value="No"
              onChange={this.props.handleChange('tempCheck')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />


          <form>
            <p>Have you modified your break locations?</p>
            <input
              type='radio' id="yes" name="loc" value="Yes"
              onChange={this.props.handleChange('breaks')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="loc" value="No"
              onChange={this.props.handleChange('breaks')}
            />
            <label for="no"> No </label><br /><br />
          </form>


          {values.breaks === 'Yes' && (
            <div>
              <form>
                <p>What are the break locations?</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('locations')}
                />
              </form>
              <br />
            </div>
          )}


          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <WFHDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}