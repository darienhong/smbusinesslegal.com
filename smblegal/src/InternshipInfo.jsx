import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Document from './Document.jsx';


export default class InternshipInfo extends Component {
  next = (e) => {
    e.preventDefault();
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
        <form>
          <p>Enter employee's title:</p>
          <input
            type='text'
            onChange={this.props.handleChange('title')}
          />
        </form>
        <form>
          <p>Enter employee's duties:</p>
          <input
            type='text'
            onChange={this.props.handleChange('duties')}
          />
        </form>

        <form>
          <p>Enter the reporting relationship:</p>
          <input
            type='text'
            onChange={this.props.handleChange('relationship')}
          />
        </form>
        <form>
          <p> Enter the start date: </p>
          <input
            type='date' id="startdate" name="startdate"
            onChange={this.props.handleChange('startDate')}
          />

        </form>
        <form>
          <p>Enter the base wage:</p>
          <input
            type='text'
            onChange={this.props.handleChange('wage')}
          />
        </form>

        <button class='prev' onClick={this.previous}>Previous </button>
        <button class='next' onClick={this.next}>Next </button>
        <Document class='doc' values={values}
        />
      </div>

    );
  }


}