import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Document from './Document.jsx';


export default class InternshipInfo2 extends Component {
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
          <p>Enter employee's hours:</p>
          <input
            type='text'
            onChange={this.props.handleChange('hours')}
          />
        </form>
        <form>
          <p>Enter employee's status:</p>
          <input
            type='radio' id="exempt" name="stat" value=" Exempt "
            onChange={this.props.handleChange('status')}
          />
          <label for="exempt"> Exempt </label><br />
          <input
            type='radio' id="nonexempt" name="check" value=" Non-Exempt "
            onChange={this.props.handleChange('atWill')}
          />
          <label for="nonexempt"> Non-Exempt </label><br />
        </form>

        <form>
          <p>At-will Employment:</p>
          <input
            type='radio' id="true" name="check" value=" True "
            onChange={this.props.handleChange('atWill')}
          />
          <label for="true"> True </label><br />
          <input
            type='radio' id="false" name="check" value=" False"
            onChange={this.props.handleChange('atWill')}
          />
          <label for="false"> False </label><br />

        </form>
        <button class='prev' onClick={this.previous}>Previous </button>
        <button class='next' onClick={this.next}>Next </button>
        <Document class='doc' values={values}
        />
      </div>

    );
  }


}