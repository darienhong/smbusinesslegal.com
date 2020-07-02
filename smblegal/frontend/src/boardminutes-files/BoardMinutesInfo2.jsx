import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import BoardMinutesDocument from './BoardMinutesDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class BoardMinutesInfo2 extends Component {
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
        <Navbar />

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col height'>

          <form>
            <p>Who acted as Chair and presided over the meeting?</p>
            <input
              type='text'
              onChange={this.props.handleChange('chair')}
            />
          </form>
          <br />

          <form>
            <p>What is their position in the corporation?</p>
            <input
              type='text'
              onChange={this.props.handleChange('position')}
            />
          </form>
          <br />

          <form>
            <p>Who is the secretary?</p>
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
          <BoardMinutesDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}