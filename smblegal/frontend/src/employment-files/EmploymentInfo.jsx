import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import EmploymentDocument from './EmploymentDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class EmploymentInfo extends Component {
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
        <Navbar />

        <div class='col height'>


          <form onChange={this.props.handleChange('responsibilities')}>
            <p>What are the job responsibilities?</p>
            <textarea name="message" rows="5" cols="30"></textarea>

          </form>
          <br />

          <form>
            <p>Enter the employee's status: </p>
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
            <p>Enter base wage:</p>
            <input
              type='text'
              onChange={this.props.handleChange('wage')}
            />
          </form>

          <br />

          <form>
            <p>Is this for a restaurant job?</p>
            <input
              type='radio' id="yes" name="res" value="Yes"
              onChange={this.props.handleChange('restaurant')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="res" value="No"
              onChange={this.props.handleChange('restaurant')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {(values.restaurant === 'Yes') && (
            <div>
              <form>
                <p>Enter the tipping procedure:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('tipping')}
                />
              </form>
              <br />
            </div>
          )}

          {(values.state === 'California') && (
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

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <EmploymentDocument class='doc' values={values}
          />
        </div>
      </div>

    );
  }


}