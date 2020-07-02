import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import ShareholderMinutesDocument from './ShareholderMinutesDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class ShareholderMinutesInfo3 extends Component {
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
        <div class='col height'>

          <form onChange={this.props.handleChange('agenda')}>
            <p>What is the agenda of the Shareholders Meeting?</p>
            <textarea name="message" rows="10" cols="30"></textarea>

          </form>
          <br />

          <form onChange={this.props.handleChange('minutes')}>
            <p>What happened at the meeting?</p>
            <textarea name="message" rows="10" cols="30"></textarea>

          </form>

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <ShareholderMinutesDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}