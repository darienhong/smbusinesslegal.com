import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import TerminationDocument from './TerminationDocument.jsx';


export default class TerminationInfo extends Component {
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
            <p>Is this a termination for cause or a mutual ending of the employment relationship?</p>
            <input
              type='radio' id="forcause" name="term" value="ForCause"
              onChange={this.props.handleChange('forCause')}
            />
            <label for="forcause"> For Cause </label><br />
            <input
              type='radio' id="mutual" name="term" value="Mutual"
              onChange={this.props.handleChange('forCause')}
            />
            <label for="no"> Mutual Ending </label><br />

          </form>
          <br />

          {values.forCause === 'ForCause' && (
            <div>
              <form>
                <p>Please write the cause:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('cause')}
                />
              </form>
              <br />
            </div>
          )}

          {values.forCause === 'Mutual' && (
            <div>
              <form>
                <p>Please write your conception of the termination of the relationship:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('cause')}
                />
              </form>
              <br />
            </div>
          )}

          <form>
            <p>Are you willing to give a reference or only a confirmation of employment?</p>
            <input
              type='radio' id="reference" name="ref" value="Reference"
              onChange={this.props.handleChange('reference')}
            />
            <label for="reference"> Reference </label><br />
            <input
              type='radio' id="confirmation" name="ref" value="Confirmation"
              onChange={this.props.handleChange('reference')}
            />
            <label for="no"> Confirmation </label><br />
          </form>
          <br />

          <form>
            <p>Enter your contact number:</p>
            <input
              type='text'
              onChange={this.props.handleChange('contact')}
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