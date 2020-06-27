import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import RecipientNDADocument from './RecipientNDADocument.jsx';


export default class RecipientNDAInfo2 extends Component {
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
        <div class='col height'>


          <form>
            <p>How long do you want the NDA to last?</p>
            <input
              type='text'
              onChange={this.props.handleChange('term')}
            />
          </form>
          <br />

          <form>
            <p>Enter the state: </p>
            <input
              type='text'
              onChange={this.props.handleChange('state')}
            />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <RecipientNDADocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}