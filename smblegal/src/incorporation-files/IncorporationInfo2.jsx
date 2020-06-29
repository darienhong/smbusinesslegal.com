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
            <p>How many shares of common stock are you authorized to issue? </p>
            <input
              type='text'
              onChange={this.props.handleChange('shares')}
            />
          </form>
          <br />

          <form>
            <p>What is the value of each share of common stock? </p>
            <input
              type='text'
              onChange={this.props.handleChange('price')}
            />
          </form>
          <br />


          <form>
            <p>Do you want to issue preferred stock?</p>
            <input
              type='radio' id="yes" name="st" value="Yes"
              onChange={this.props.handleChange('stock')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="st" value="No"
              onChange={this.props.handleChange('stock')}
            />
            <label for="no"> No </label><br />

          </form>

          {values.stock === 'Yes' && (
            <div>
              <form>
                <p>How many shares of preferred stock are you authorized to issue?</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('preferredShares')}
                />
              </form>
              <br />
              <form>
                <p>What is the value of each share of preferred stock?</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('preferredPrice')}
                />
              </form>
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