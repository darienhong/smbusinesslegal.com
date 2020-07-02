import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import WaiverShareholderDocument from './WaiverShareholderDocument.jsx';
import Navbar from '../components/nav-bar.jsx';



export default class WaiverShareholdersInfo extends Component {
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
            <p>How many shares of stock does the shareholder hold?</p>
            <input
              type='text'
              onChange={this.props.handleChange('shares')}
            />
          </form>
          <br />


          <form>
            <p>When will the meeting be held?</p>
            <input
              type='date'
              onChange={this.props.handleChange('date')}
            />
          </form>
          <br />

          <form>
            <p>
              Is this going to one shareholder or all?
            </p>
            <input
              type='radio' id="one" name="dir" value="One"
              onChange={this.props.handleChange('number')}
            />
            <label for="yes"> One shareholder </label><br />
            <input
              type='radio' id="all" name="dir" value="All"
              onChange={this.props.handleChange('number')}
            />
            <label for="no"> All </label><br />

          </form>
          <br />

          {values.number === 'All' && (
            <div>
              <form onChange={this.props.handleSignerChange}>
                <div class='listExp'>
                  <p>List the names of the shareholders: </p>
                </div>
                <div class='expButton'>
                  <button class='add' onClick={this.props.addSigner}>+</button>
                </div>
                <br />
                <div class='listExp'>
                  {
                    (values.signerList).map((val, idx) => {
                      let signerId = `signer-${idx}`
                      return (
                        <div key={idx}>
                          <label htmlFor={signerId}>{`Shareholder #${idx + 1}`}</label>
                          <input
                            type="text"
                            name={signerId}
                            data-id={idx}
                            id={signerId}
                            value={(values.signerList)[idx].name}
                            className="name"
                          />
                          {" "}
                        </div>

                      )
                    })
                  }
                </div>
              </form>
              <br /><br />
              <br />
            </div>
          )}




          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <WaiverShareholderDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}