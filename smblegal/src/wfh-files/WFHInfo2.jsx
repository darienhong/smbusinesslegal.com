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




export default class WFHInfo2 extends Component {

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
        <div class='col left height'>

          <form>
            <p>Do you have a new policy on shared supplies and equipment?</p>
            <input
              type='radio' id="yes" name="supp" value="Yes"
              onChange={this.props.handleChange('supplies')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="supp" value="No"
              onChange={this.props.handleChange('supplies')}
            />
            <label for="no"> No </label><br /><br />

          </form>

          {values.supplies === 'Yes' && (
            <div>
              <form>
                <p>What is the new policy on shared supplies and equipment?</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('newPolicy')}
                />
              </form>
              <br />
            </div>
          )}


          <form>
            <p>Who will administer the Work From Home Policy?</p>
            <input
              type='text'
              onChange={this.props.handleChange('administrator')}
            />
          </form>
          <br />

          <form>
            <p>Do you have any other provisions you would like to add?</p>
            <input
              type='radio' id="yes" name="prov" value="Yes"
              onChange={this.props.handleChange('provisions')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="prov" value="No"
              onChange={this.props.handleChange('provisions')}
            />
            <label for="no"> No </label><br />

          </form>

          {values.provisions === 'Yes' && (
            <div>
              <form onChange={this.props.handleProvisionChange} >
                <div class='listExp'>
                  <p>Enter a provision: </p>
                </div>
                <div class='expButton'>
                  <button class='add' onClick={this.props.addProvision}>+</button>
                </div>

                {
                  (values.provisionList).map((val, idx) => {
                    let nameId = `name-${idx}`
                    return (
                      <div key={idx}>
                        <label htmlFor={nameId}>Provision</label>
                        <input
                          type="text"
                          name={nameId}
                          data-id={idx}
                          id={nameId}
                          value={(values.provisionList)[idx].name}
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


          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <WFHDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}