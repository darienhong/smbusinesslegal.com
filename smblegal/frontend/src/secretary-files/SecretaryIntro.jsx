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
import SecretaryDocument from './SecretaryDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';




export default class SecretaryIntro extends Component {

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

          <form>
            <p>Enter the date the bylaws were adopted:</p>
            <input
              type='date'
              onChange={this.props.handleChange('dateAdopted')}
            />
          </form>
          <br />

          <form>
            <p>How were the bylaws adopted?</p>
            <input
              type='radio' id="inc" name="inc" value="Incorporator" checked={values.adopted === 'Incorporator'}
              onChange={this.props.handleChange('adopted')}
            />
            <label for="inc"> Incorporator </label><br />
            <input
              type='radio' id="share" name="share" value="Shareholders" checked={values.adopted === 'Shareholders'}
              onChange={this.props.handleChange('adopted')}
            />
            <label for="share"> Shareholders </label><br />
            <input
              type='radio' id="board" name="board" value="Board of Directors" checked={values.adopted === 'Board of Directors'}
              onChange={this.props.handleChange('adopted')}
            />
            <label for="board"> Board of Directors </label><br />

          </form>
          <br />


          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <SecretaryDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}