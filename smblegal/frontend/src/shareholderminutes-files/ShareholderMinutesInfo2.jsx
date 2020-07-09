import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import ShareholderMinutesDocument from './ShareholderMinutesDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



export default class ShareholderMinutesInfo2 extends Component {
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
            <p>
              Was notice given of the meeting?
            </p>
            <input
              type='radio' id="yes" name="not" value='Yes'
              onChange={this.props.handleChange('notice')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="not" value='No'
              onChange={this.props.handleChange('notice')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

          {values.notice === 'No' && (
            <div>
              <form>
                <p>
                  Was notice not given because of bylaws or waivers of notice?
            </p>
                <input
                  type='radio' id="bylaws" name="reason" value='Bylaws'
                  onChange={this.props.handleChange('reason')}
                />
                <label for="yes"> Bylaws </label><br />
                <input
                  type='radio' id="waivers" name="reason" value='Waivers'
                  onChange={this.props.handleChange('reason')}
                />
                <label for="no"> Waivers of Notice </label><br />

              </form>
              <br />
            </div>
          )}

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
            <p>Who acted as the secretary?</p>
            <input
              type='text'
              onChange={this.props.handleChange('secretary')}
            />
          </form>
          <br />
          <form>
            <p>What is their position in the company?</p>
            <input
              type='text'
              onChange={this.props.handleChange('secPosition')}
            />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <ShareholderMinutesDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}