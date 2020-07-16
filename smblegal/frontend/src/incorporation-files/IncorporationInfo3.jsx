import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import IncorporationDocument from './IncorporationDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";



export default class IncorporationInfo3 extends Component {
  
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

  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
    this.props.decreasePercentage();

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
        <Navbar2 />

        {/* <Progress percent={values.percentage} indicating /> */}
        <div class='col height'>

          <form>
            <p>Do you want to specify corporate purpose or leave it as "any lawful act or activity"?</p>
            <input
              type='radio' id="specify" name="purp" value="Specify"
              onChange={this.props.handleChange('purpose')}
            />
            <label for="yes"> Specify Corporate Purpose </label><br />
            <input
              type='radio' id="leave" name="purp" value="Leave"
              onChange={this.props.handleChange('purpose')}
            />
            <label for="no"> Leave it as is </label><br />

          </form>

          {values.purpose === 'Specify' && (
            <div>
              <form>
                <p>Please enter the corporate purpose:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('specifyPurpose')}
                />
              </form>
              <br />
            </div>
          )}
          <br />

          <form>
            <p>Do you want to leave the rights and preferences of preferred stock up to the Board of Directors?</p>
            <input
              type='radio' id="yes" name="right" value="Yes"
              onChange={this.props.handleChange('rights')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="right" value="No"
              onChange={this.props.handleChange('rights')}
            />
            <label for="no"> No </label><br />

          </form>


          {values.rights === 'No' && (
            <div>
              <form>
                <p>Please enter what rights and preferences shall be:</p>
                <input
                  type='text'
                  onChange={this.props.handleChange('specifyRights')}
                />
              </form>
              <br />
            </div>
          )}


          <button class='prev' onClick={this.previous}>Previous </button>
          <button class='next' onClick={this.next}>Next </button>

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

        </div>
        <div class='col right'>
          <IncorporationDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}