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

import { Progress } from 'semantic-ui-react'
import { Alert } from 'react-alert'
import IncorporationDocument from './IncorporationDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



export default class IncorporationIntro extends Component {

  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
  }

  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <Navbar2 />

        <div class="back-button" style={{ paddingLeft: "20px", marginLeft: "20px" }}>
          <Link to="/FormationLogin" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
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
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('name')}
            />
          </form>
          <br />

          <form onChange={this.props.handleIncorpChange}>
            <div class='listExp'>
              <p>Enter the incorporators:</p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addIncorp}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.incorpList).map((val, idx) => {
                  let incorpId = `incorp-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={incorpId}>{`Incorporator #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={incorpId}
                        data-id={idx}
                        id={incorpId}
                        value={(values.incorpList)[idx].name}
                        className="name"
                      />
                      {" "}
                    </div>

                  )
                })
              }
            </div>
          </form>
          <br />



          <form>
            <p>Enter your address:</p>
            <input
              type='text'
              onChange={this.props.handleChange('address')}
            />
          </form>
          <br />

          <form>
            <p>Enter your telephone number:</p>
            <input
              type='text'
              onChange={this.props.handleChange('phone')}
            />
          </form>
          <br />

          <form>
            <p>Do you have a fax number?</p>
            <input
              type='radio' id="yes" name="fax" value="Yes"
              onChange={this.props.handleChange('checkFax')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="fax" value="No"
              onChange={this.props.handleChange('checkFax')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {values.checkFax === 'Yes' && (
            <div>
              <form>
                <p>Enter your fax number:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('fax')}
                />
              </form>
              <br />
            </div>
          )}

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <IncorporationDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}