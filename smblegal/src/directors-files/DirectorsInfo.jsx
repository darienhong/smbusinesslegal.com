import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import DirectorsDocument from './DirectorsDocument.jsx';


export default class DirectorsInfo extends Component {
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
            <p>Who will be the Chief Executive Officers? </p>
            <input
              type='text'
              onChange={this.props.handleChange('ceo')}
            />
          </form>
          <br />

          <form>
            <p>Who will be the President? </p>
            <input
              type='text'
              onChange={this.props.handleChange('president')}
            />
          </form>
          <br />

          <form>
            <p>Who will be the Chief Financial Officers? </p>
            <input
              type='text'
              onChange={this.props.handleChange('cfo')}
            />
          </form>
          <br />

          <form>
            <p>Who will be the Secretary? </p>
            <input
              type='text'
              onChange={this.props.handleChange('secretary')}
            />
          </form>
          <br />
          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <DirectorsDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}