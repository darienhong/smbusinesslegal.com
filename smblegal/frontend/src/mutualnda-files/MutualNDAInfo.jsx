import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import MutualNDADocument from './MutualNDADocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';



export default class MutualNDAInfo extends Component {
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

          <form onChange={this.props.handleRecitalChange}>
            <div class='listExp'>
              <p>What is the reasoning for entering into <br />this agreement? Please note that each <br /> reason should be a separate recital.</p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addRecital}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.recitalList).map((val, idx) => {
                  let recitalId = `recital-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={recitalId}>{`Recital #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={recitalId}
                        data-id={idx}
                        id={recitalId}
                        value={(values.recitalList)[idx].name}
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
            <p>What is the Company's definition of <br />Confidential Information?</p>
            <input
              type='text'
              onChange={this.props.handleChange('confidential')}
            />
          </form>
          <br />

          <form>
            <p>Are there any other authorized disclosures <br />of Confidential Information that the Company <br />wants to put in the Agreement?</p>
            <input
              type='radio' id="yes" name="dis" value="Yes"
              onChange={this.props.handleChange('confidentialUseCheck')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="dis" value="No"
              onChange={this.props.handleChange('confidentialUseCheck')}
            />
            <label for="no"> No </label><br />

          </form>


          {values.confidentialUseCheck === 'Yes' && (
            <div>
              <form>
                <p>Please enter the authorized disclosures:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('confidentialUse')}
                />
              </form>
              <br />
            </div>
          )}

          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>
        </div>
        <div class='col right'>
          <MutualNDADocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}