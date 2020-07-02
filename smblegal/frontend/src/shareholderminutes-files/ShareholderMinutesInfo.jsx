import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import ShareholderMinutesDocument from './ShareholderMinutesDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class ShareholderMinutesInfo extends Component {
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


          {/* <form>
            <p>Were all the directors present in person?</p>
            <input
              type='radio' id="yes" name="pres" value="Yes"
              onChange={this.props.handleChange('present')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="pres" value="No"
              onChange={this.props.handleChange('present')}
            />
            <label for="no"> No </label><br />

          </form>
          <br /> */}



          <form onChange={this.props.handleDirectorsChange}>
            <div class='listExp'>
              <p>Enter the shareholders present at <br /> the meeting in person: </p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addDirector}>+</button>
            </div>
            {
              (values.directors).map((val, idx) => {
                let nameId = `name-${idx}`
                return (
                  <div key={idx}>
                    <label htmlFor={nameId}>Name of Director </label>
                    <input
                      type="text"
                      name={nameId}
                      data-id={idx}
                      id={nameId}
                      value={(values.directors)[idx].name}
                      className="name"
                    />
                    <br /><br />
                    {" "}
                  </div>

                )

              })
            }
          </form>
          <br />

          <form>
            <p>How many shares were outstanding <br /> and entitled to vote on the record
            date <br /> for the meeting? </p>
            <input
              type='text'
              onChange={this.props.handleChange('outstanding')}
            />
          </form>
          <br />

          <form>
            <p>How many shares were represented <br /> in person or by proxy?</p>
            <input
              type='text'
              onChange={this.props.handleChange('represented')}
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