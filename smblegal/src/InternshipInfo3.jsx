import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Document from './Document.jsx';


export default class InternshipInfo3 extends Component {
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
        <div class='col'>
          <form>
            <p>Academic credits given for internship:</p>
            <input
              type='radio' id="true" name="cred" value="True"
              onChange={this.props.handleChange('credits')}
            />
            <label for="true"> True </label><br />
            <input
              type='radio' id="false" name="cred" value="False"
              onChange={this.props.handleChange('credits')}
            />
            <label for="false"> False </label><br />

          </form>

          <form>
            <p>Are specific expenses of the intern covered by the company?</p>
            <input
              type='radio' id="yes" name="exp" value="Yes"
              onChange={this.props.handleChange('expenses')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="exp" value="No"
              onChange={this.props.handleChange('expenses')}
            />
            <label for="no"> No </label><br />

          </form>

          <form>
            <p>Will the company have professional liability for the employee?</p>
            <input
              type='radio' id="yes" name="lia" value="Yes"
              onChange={this.props.handleChange('liability')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="lia" value="No"
              onChange={this.props.handleChange('liability')}
            />
            <label for="no"> No </label><br />

          </form>

          <form>
            <p>Non-Compete Clause</p>
            <input
              type='radio' id="yes" name="comp" value="Yes"
              onChange={this.props.handleChange('compete')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="comp" value="No"
              onChange={this.props.handleChange('compete')}
            />
            <label for="no"> No </label><br />

          </form>

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <Document class='doc' values={values}
          />
        </div>
      </div>

    );
  }


}