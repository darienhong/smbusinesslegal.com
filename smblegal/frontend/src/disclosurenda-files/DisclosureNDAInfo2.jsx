import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import DisclosureNDADocument from './DisclosureNDADocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";




export default class DisclosureNDAInfo2 extends Component {
 
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
            <p>How long do you want the NDA to last?</p>
            <input
              type='text'
              onChange={this.props.handleChange('term')}
            />
          </form>
          <br />

          <form>
            <p>Enter the state: </p>
            <input
              type='text'
              onChange={this.props.handleChange('state')}
            />
          </form>
          <br />

          <form>
            <p>Do you want to list authorized parties for recipient <br />to disclose to?</p>
            <input
              type='radio' id="yes" name="auth" value="Yes"
              onChange={this.props.handleChange('authorized')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="auth" value="No"
              onChange={this.props.handleChange('authorized')}
            />
            <label for="no"> No </label><br />


            {values.authorized === 'Yes' && (
              <div>
                <form>
                  <p>Please list the authorized parties:</p>
                  <input
                    type='text'
                    onChange={this.props.handleChange('parties')}
                  />
                </form>
                <br />
              </div>
            )}


          </form>
          <form>
            <p>Do you want to permit disclosure to third parties <br />in order to carry out the purpose of the agreement?</p>
            <input
              type='radio' id="yes" name="third" value="Yes"
              onChange={this.props.handleChange('partyCheck')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="third" value="No"
              onChange={this.props.handleChange('partyCheck')}
            />
            <label for="no"> No </label><br />

          </form>



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
          <DisclosureNDADocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}