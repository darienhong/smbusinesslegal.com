import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import EmploymentDocument from './EmploymentDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



export default class EmploymentInfo3 extends Component {
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
        <Navbar2 />

        {/* <Progress percent={values.percentage} indicating /> */}

        <div class='col height'>
          <form>
            <p>Enter employee's title:</p>
            <input
              type='text'
              onChange={this.props.handleChange('title')}
            />
          </form>
          <br />

          <form>
            <p>Enter employee's duties:</p>
            <input
              type='text'
              onChange={this.props.handleChange('duties')}
            />
          </form>
          <br />

          <form>
            <p>Enter the reporting relationship:</p>

            <input
              type='text'
              onChange={this.props.handleChange('relationship')}
            />
          </form>
          <br />

          <form>
            <p> Enter the start date: </p>
            <input
              type='date' id="startdate" name="startdate"
              onChange={this.props.handleChange('startDate')}
            />

          </form>
          <br />
          <form>
            <p>Enter employee's hours:</p>
            <input
              type='number'
              onChange={this.props.handleChange('hours')}
            />
          </form>
          <br />

          <form>
            <p>Enter the basis of the employee's hours:</p>
            <input
              type='radio' id="day" name="day" value="Per Day" checked={values.hourType === 'Per Day'}
              onChange={this.props.handleChange('hourType')}
            />
            <label for="true"> Per Day </label><br />
            <input
              type='radio' id="week" name="week" value="Per Week" checked={values.hourType === 'Per Week'}
              onChange={this.props.handleChange('hourType')}
            />
            <label for="false"> Per Week </label><br />
            <input
              type='radio' id="month" name="month" value="Per Month" checked={values.hourType === 'Per Month'}
              onChange={this.props.handleChange('hourType')}
            />
            <label for="false"> Per Month </label><br />
            <input
              type='radio' id="year" name="year" value="Per Year" checked={values.hourType === 'Per Year'}
              onChange={this.props.handleChange('hourType')}
            />
            <label for="false"> Per Year </label><br />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <EmploymentDocument class='doc' values={values} />
        </div>

      </div>

    );
  }


}