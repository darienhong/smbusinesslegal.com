import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import ConsultingDocument from './ConsultingDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class ConsultingInfo extends Component {
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
            <p>What is the Company's definition of technical Confidential Information?</p>
            <input
              type='text'
              onChange={this.props.handleChange('techConfidential')}
            />
          </form>
          <br />

          <form>
            <p>What is the Company's definition of nontechnical Confidential Information?</p>
            <input
              type='text'
              onChange={this.props.handleChange('nontechConfidential')}
            />
          </form>
          <br />


          <form>
            <p>Do you need the Consultant to represent that they carry adequate insurance?</p>
            <input
              type='radio' id="yes" name="ins" value="Yes"
              onChange={this.props.handleChange('insurance')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="ins" value="No"
              onChange={this.props.handleChange('insurance')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          <form>
            <p>Is the Consultant agreeing to only work for you?</p>
            <input
              type='radio' id="yes" name="bus" value="Yes"
              onChange={this.props.handleChange('other')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="bus" value="No"
              onChange={this.props.handleChange('other')}
            />
            <label for="no"> No </label><br />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <ConsultingDocument class='doc' values={values} />
        </div>

      </div>

    );
  }


}