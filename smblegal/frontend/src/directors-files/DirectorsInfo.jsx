import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import DirectorsDocument from './DirectorsDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



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
        <Navbar2 />

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col height'>

          <form>
            <p>Is this a unanimous vote by the directors?</p>
            <input
              type='radio' id="yes" name="vote" value="Yes"
              onChange={this.props.handleChange('unanimous')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="vote" value="No"
              onChange={this.props.handleChange('unanimous')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

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