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
import StatementDocument from './StatementDocument.jsx';
import Navbar from '../components/nav-bar.jsx';




export default class StatementIntro extends Component {

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
            <p>Enter the state:</p>
            <input
              type='text'
              onChange={this.props.handleChange('state')}
            />
          </form>
          <br />

          <form onChange={this.props.handleChange('docName')}>
            <label for="state">Choose the document of incorporation based on your state:</label>
            <br />
            <select id="state" name="state">
              {/* <option value="California" selected>California</option>
              <option value="Delaware">Delaware</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="New York">New York</option> */}
              <option value="Articles of Incorporation">Articles of Incorporation (CA, MA, WA)</option>
              <option value="Certificate of Incorporation">Certificate of Incorporation (DE, NY, TX)</option>
              <option value='Other'>Other</option>
            </select>
          </form>
          <br />

          {values.docName === 'Other' && (
            <div>
              <form>
                <p>Enter the name of the document of incorporation: </p>
                <input
                  type='text'
                  onChange={this.props.handleChange('docNameOther')}
                />
              </form>
              <br />
            </div>
          )}

          <form onChange={this.props.handleDirectorChange}>
            <div class='listExp'>
              <p>
                Who are the initial directors going to be?
              </p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addDirector}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.directorList).map((val, idx) => {
                  let directorId = `director-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={directorId}>{`Director #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={directorId}
                        data-id={idx}
                        id={directorId}
                        value={(values.directorList)[idx].name}
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

          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <StatementDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}