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
import CovidRentDocument from './CovidRentDocument.jsx';
import StripeCheckout from "react-stripe-checkout";



export default class CovidRentIntro extends Component {

  state = {
    pay: false,
    shouldPay: true,
    docs_used: localStorage.getItem('docs_used'),
    email: localStorage.getItem('email'),
    max_docs: localStorage.getItem('max_docs'),
  }


  componentDidMount(){
    if (this.state.docs_used <= this.state.max__docs){
      this.setState({
        shouldPay: false,
      })
    }
  }


  next = (e) => {
    e.preventDefault();
    this.props.increasePercentage();
    this.props.nextStep();
    console.log(this.state.email);
    console.log(this.state.docs_used);

    const data = {
      docs_used: this.state.docs_used,
      email: this.state.email,
    }
    
    fetch('/api/updateNumDocs', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' }
    })

      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

  }

  handleClick = (e) => {
    this.setState({ pay: true });
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
        <div class="back-button" style={{ paddingLeft: "20px", marginLeft: "20px" }}>
          <Link to="/Covid_19Login" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
        </div>
        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col left height'>

          <p>NOTE: SHOULD BE SENT TO LANDLORD WITHIN 7 DAYS OF BEING UNABLE TO PAY
          RENT/NOT PAYING RENT ON THE DUE DATE
          </p>
          <form>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('tenant')}
            />
          </form>
          <br />

          <form>
            <p>Enter landlord's name:</p>
            <input
              type='text'
              onChange={this.props.handleChange('landlord')}
            />
          </form>
          <br />

          <form>
            <p>Enter the subject of the letter:</p>
            <input
              type='text'
              onChange={this.props.handleChange('subject')}
            />
          </form>
          <br />


          <form>
            <p>Enter the date:</p>
            <input
              type='date'
              onChange={this.props.handleChange('date')}
            />
          </form>
          <br />

          <form>
            <p>Do you have less than 10 employees?</p>
            <input
              type='radio' id="yes" name="emp" value="Yes"
              onChange={this.props.handleChange('employees')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="emp" value="No"
              onChange={this.props.handleChange('employees')}
            />
            <label for="no"> No </label><br />

          </form>

          {/* PAYMENTS BELOW */}
          <br />
          {/* <StripeCheckout 
            stripeKey={process.env.REACT_APP_PUBLIC_KEY}
            token={this.onToken}
            name="Premium Subscription"
            amount={5 * 100}
            billingAddress
            closed = {this.handleClick}
          />
          <br />
          {this.state.pay === true && (<button class='next' onClick={this.next}>Next </button>)} */}
          {/* PAYMENTS ABOVE */}
          <button class='next' onClick={this.next}>Next </button>

        </div>
        <div class='col right'>
          <CovidRentDocument class='doc' values={values} />
        </div>
      </div >

    );
  }


}