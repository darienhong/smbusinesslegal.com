import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import DirectorsDocument from './DirectorsDocument.jsx';


export default class DirectorsInfo3 extends Component {
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
        <div class='col height'>

          <form>
            <p>What is the fiscal year? </p>
            <input
              type='text'
              onChange={this.props.handleChange('fiscalYear')}
            />
          </form>
          <br />

          <form>
            <p>What is the principal office? </p>
            <input
              type='text'
              onChange={this.props.handleChange('office')}
            />
          </form>
          <br />

          <form onChange={this.props.handleSignersChange}>
            <div class='listExp'>
              <p>Who will be signing this?</p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addSigner}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.signersList).map((val, idx) => {
                  let signerId = `signer-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={signerId}>{`Signer #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={signerId}
                        data-id={idx}
                        id={signerId}
                        value={(values.signersList)[idx].name}
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






          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <DirectorsDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}