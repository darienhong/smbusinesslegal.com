import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import DisciplinaryDocument from './DisciplinaryDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'



export default class DisciplinaryIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>

          <form>
            <p>Enter the date:</p>
            <input
              type='date'
              onChange={this.props.handleChange('date')}
            />
          </form>
          <br />

          <form>
            <p>Enter employee's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('employeeName')}
            />
          </form>
          <br />

          <form>
            <p>Enter employee's address:</p>
            <input
              type='text'
              onChange={this.props.handleChange('address')}
            />
          </form>
          <br />

          <form>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('employerName')}
            />
          </form>
          <br />

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          {/* <Document class='doc' values={values}
          /> */}
          <DisciplinaryDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}