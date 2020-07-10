import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import ConsultingDocument from './ConsultingDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";



export default class ConsultingInfo3 extends Component {
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
        {/* <Progress percent={values.percentage} indicating /> */}
        <Navbar2 />

        <div class='col height'>
          <form>
            <p>Enter the scope of the services rendered by the consultant: </p>
            <input
              type='text'
              onChange={this.props.handleChange('scope')}
            />
          </form>
          <br />

          <form>
            <p>Enter the consultant's work hours: </p>
            <input
              type='text'
              onChange={this.props.handleChange('hours')}
            />
          </form>
          <br />


          <form>
            <p>How will the consultant be supervised? </p>
            <input
              type='text'
              onChange={this.props.handleChange('supervision')}
            />
          </form>
          <br />

          <form>
            <p>Enter the term: </p>
            <input
              type='text'
              onChange={this.props.handleChange('term')}
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
          <ConsultingDocument class='doc' values={values} />
        </div>

      </div>

    );
  }


}