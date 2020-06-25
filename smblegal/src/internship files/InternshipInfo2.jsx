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
        <div class='col height'>

          <form>
            <p>Enter the intern's status: </p>
            <input
              type='radio' id="exempt" name="exe" value="Exempt"
              onChange={this.props.handleChange('status')}
            />
            <label for="exempt"> Exempt </label><br />
            <input
              type='radio' id="nonexempt" name="exe" value="Non-Exempt"
              onChange={this.props.handleChange('status')}
            />
            <label for="nonexempt"> Non-Exempt </label><br />

          </form>
          <br />
          <form>
            <p>Is this a paid internship?</p>
            <input
              type='radio' id="yes" name="pay" value="Yes"
              onChange={this.props.handleChange('paid')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="not" value="No"
              onChange={this.props.handleChange('paid')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {values.paid === 'Yes' && (
            <div>
              <form>
                <p>Enter base wage:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('wage')}
                />
              </form>
              <br />
            </div>
          )}

          {(values.state === 'California') && (values.paid === 'Yes') && (
            <div>
              <form>
                <p>Please make your statement of California required pay and sick leave:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('sick')}
                />
              </form>
              <br />
            </div>
          )}
          <form>
            <p>Is the intern receiving academic credit?</p>
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