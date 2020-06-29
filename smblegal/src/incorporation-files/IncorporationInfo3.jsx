import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import IncorporationDocument from './IncorporationDocument.jsx';


export default class IncorporationInfo2 extends Component {
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
            <p>Do you want to specify corporate purpose or leave it as "any lawful act or activity"?</p>
            <input
              type='radio' id="specify" name="purp" value="Specify"
              onChange={this.props.handleChange('purpose')}
            />
            <label for="yes"> Specify Corporate Purpose </label><br />
            <input
              type='radio' id="leave" name="purp" value="Leave"
              onChange={this.props.handleChange('purpose')}
            />
            <label for="no"> Leave it as is </label><br />

          </form>

          {values.purpose === 'Specify' && (
            <div>
              <form>
                <p>Please enter the corporate purpose:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('specifyPurpose')}
                />
              </form>
              <br />
            </div>
          )}


          <form>
            <p>Do you want to leave the rights and preferences of preferred stock up to the Board of Directors?</p>
            <input
              type='radio' id="yes" name="right" value="Yes"
              onChange={this.props.handleChange('rights')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="right" value="No"
              onChange={this.props.handleChange('rights')}
            />
            <label for="no"> No </label><br />

          </form>


          {values.rights === 'No' && (
            <div>
              <form>
                <p>Please enter what rights and preferences shall be:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('specifyRights')}
                />
              </form>
              <br />
            </div>
          )}


          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <IncorporationDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}