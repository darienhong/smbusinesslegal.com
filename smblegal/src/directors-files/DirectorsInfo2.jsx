import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import DirectorsDocument from './DirectorsDocument.jsx';


export default class DirectorsInfo2 extends Component {
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
            <p>When was the Certificate of Incorporation filed? </p>
            <input
              type='date'
              onChange={this.props.handleChange('date')}
            />
          </form>
          <br />

          <form>
            <p>Are you going to issue common stock to someone right away?</p>
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
                <p>How many shares of Common stock are <br />authorized to be sold and issued?</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('shares')}
                />
              </form>
              <br />
            </div>
          )}

          <form>
            <p>Who will be the Chief Financial Officers? </p>
            <input
              type='text'
              onChange={this.props.handleChange('cfo')}
            />
          </form>
          <br />

          <form>
            <p>Who will be the Secretary </p>
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