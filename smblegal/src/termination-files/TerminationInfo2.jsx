import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import TerminationDocument from './TerminationDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class TerminationInfo2 extends Component {
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
        {/* <Progress percent={values.percentage} indicating /> */}
        <Navbar />

        <div class='col height'>

          <form>
            <p>Enter the date of the last payment:</p>
            <input
              type='date'
              onChange={this.props.handleChange('endDate')}
            />
          </form>
          <br />
          <br />

          <form>
            <p>Enter any company property that has to be returned:</p>
            <input
              type='text'
              onChange={this.props.handleChange('property')}
            />
          </form>
          <br />
          <br />

          <form>
            <p>Enter the cessation of any company benefits:</p>
            <input
              type='text'
              onChange={this.props.handleChange('benefits')}
            />
          </form>
          <br />

          <form>
            <p>What date was their employment agreement signed?</p>
            <input
              type='date'
              onChange={this.props.handleChange('dateSigned')}
            />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <TerminationDocument class='doc' values={values} />
        </div>

      </div>

    );
  }


}