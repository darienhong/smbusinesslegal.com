import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import WaiverDirectorsDocument from './WaiverDirectorsDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";



export default class WaiverDirectorsInfo extends Component {
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

  state = {
    pay: false
  }

  handleClick = (e) => {
    this.setState({pay: true});
  }

   onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
    }


  render() {
    const { values } = this.props;
    return (
      <div class='ask'>
        <Navbar2 />

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col height'>

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
              Is this going to one director or all?
            </p>
            <input
              type='radio' id="one" name="dir" value="One"
              onChange={this.props.handleChange('number')}
            />
            <label for="one"> One director </label><br />
            <input
              type='radio' id="all" name="dir" value="All"
              onChange={this.props.handleChange('number')}
            />
            <label for="all"> All </label><br />

          </form>


          {values.number === 'All' && (
            <div>
              <form onChange={this.props.handleSignerChange}>
                <div class='listExp'>
                  <p>List the names of the directors: </p>
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
                          <label htmlFor={signerId}>{`Director #${idx + 1}`}</label>
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


     {/* PAYMENTS BELOW */}
     <br />          
          <StripeCheckout 
            stripeKey={process.env.REACT_APP_PUBLIC_KEY}
            token={this.onToken}
            name="Premium Subscription"
            amount={5 * 100}
            billingAddress
            closed = {this.handleClick}
          />
          <br />
          {this.state.pay === true && (<button class='next' onClick={this.next}>Next </button>)}
        {/* PAYMENTS ABOVE */}


        </div>
        <div class='col right'>
          <WaiverDirectorsDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}