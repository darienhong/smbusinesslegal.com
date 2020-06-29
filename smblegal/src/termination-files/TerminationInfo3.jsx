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
            <p>Are you required to give COBRA to this employee?</p>
            <input
              type='radio' id="yes" name="cob" value="Yes"
              onChange={this.props.handleChange('cobra')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="cob" value="No"
              onChange={this.props.handleChange('cobra')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          <form>
            <p>Do you want a complete release?</p>
            <input
              type='radio' id="yes" name="rel" value="Yes"
              onChange={this.props.handleChange('release')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="rel" value="No"
              onChange={this.props.handleChange('release')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          <form>
            <p>Do you want a non-disparagement clause?</p>
            <input
              type='radio' id="yes" name="dis" value="Yes"
              onChange={this.props.handleChange('disparagement')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="dis" value="No"
              onChange={this.props.handleChange('disparagement')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          <form>
            <p>Do you want a non-publicity clause?</p>
            <input
              type='radio' id="yes" name="pub" value="Yes"
              onChange={this.props.handleChange('publicity')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="pub" value="No"
              onChange={this.props.handleChange('publicity')}
            />
            <label for="no"> No </label><br />

          </form>

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