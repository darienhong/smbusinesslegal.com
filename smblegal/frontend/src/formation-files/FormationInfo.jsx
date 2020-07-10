import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import FormationDocument from './FormationDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";



export default class FormationInfo extends Component {
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
            <p>Enter the company's address: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyAddress')}
            />
          </form>
          <br />

          <form>
            <p>Enter the city that the company is located in: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyCity')}
            />
          </form>
          <br />


          <form>
            <p>Enter the county that the company is located in: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyCounty')}
            />
          </form>
          <br />

          <form>
            <p>Enter the company's zip code: </p>
            <input
              type='text'
              onChange={this.props.handleChange('companyZip')}
            />
          </form>
          <br />

          <form>
            <p>Enter the name of the Registered Agent: </p>
            <input
              type='text'
              onChange={this.props.handleChange('registered')}
            />
          </form>
          <br />

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
          <FormationDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}