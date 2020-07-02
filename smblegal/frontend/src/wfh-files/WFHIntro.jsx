import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import DisciplinaryDocument from '../disciplinary-files/DisciplinaryDocument.jsx';
import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import WFHDocument from './WFHDocument.jsx';
import Navbar from '../components/nav-bar.jsx';




export default class WFHIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }


  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <Navbar />

        <div class="back-button" style={{ paddingLeft: "20px", marginLeft: "20px" }}>
          <Link to="/Covid_19" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
        </div>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>

          <form>
            <p>Enter the company's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('companyName')}
            />
          </form>
          <br />


          <form>
            <p>What is your position of working from home?</p>
            <input
              type='text'
              onChange={this.props.handleChange('wfh')}
            />
          </form>
          <br />

          <form>
            <p>Do you have general schedule changes?</p>
            <input
              type='radio' id="yes" name="sched" value="Yes"
              onChange={this.props.handleChange('schedChange')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="sched" value="No"
              onChange={this.props.handleChange('schedChange')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {values.schedChange === 'Yes' && (
            <div>
              <form onChange={this.props.handleScheduleChange} >
                <div class='listExp'>
                  <p>Enter a schedule change: </p>
                </div>
                <div class='expButton'>
                  <button class='add' onClick={this.props.addScheduleChange}>+</button>
                </div>

                {
                  (values.changeList).map((val, idx) => {
                    let nameId = `name-${idx}`
                    return (
                      <div key={idx}>
                        <label htmlFor={nameId}>Schedule Change</label>
                        <input
                          type="text"
                          name={nameId}
                          data-id={idx}
                          id={nameId}
                          value={(values.changeList)[idx].name}
                          className="name"
                        />
                      </div>
                    )
                  })
                }
                <br /><br />

              </form>

            </div>
          )}

          <form>
            <p>Large gatherings of how many people will be prohibited?</p>
            <input
              type='text'
              onChange={this.props.handleChange('prohibited')}
            />
          </form>
          <br />

          <form>
            <p>Large gatherings of how many people will be discouraged to take place outside of work?</p>
            <input
              type='text'
              onChange={this.props.handleChange('discouraged')}
            />
          </form>
          <br />



          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <WFHDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}