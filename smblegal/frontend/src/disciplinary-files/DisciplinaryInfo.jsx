import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import DisciplinaryDocument from './DisciplinaryDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";




export default class DisciplinaryInfo extends Component {
 
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
            <p>What is the employee being warned for?</p>
            <input
              type='text'
              onChange={this.props.handleChange('warning')}
            />
          </form>
          <br />

          <form>
            <p>What date was their employment agreement signed</p>
            <input
              type='date'
              onChange={this.props.handleChange('dateSigned')}
            />
          </form>
          <br />

          {/* <form>
            <p>What remedial actions are ordered to be taken?</p>
            <input
              type='radio' id="yes" name="exp" value="Yes"
              onChange={this.props.handleChange('expenses')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="exp" value="No"
              onChange={this.props.handleChange('expenses')}
            />
            <label for="no"> No </label><br />

          </form>
          <br /> */}

          <form onChange={this.props.handleActionChange}>
            <div class='listExp'>
              <p>What remedial actions are ordered to be taken?</p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addAction}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.actionList).map((val, idx) => {
                  let actionId = `action-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={actionId}>{`Action #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={actionId}
                        data-id={idx}
                        id={actionId}
                        value={(values.actionList)[idx].name}
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
            <p>Is this a restaurant?</p>
            <input
              type='radio' id="yes" name="res" value="Yes"
              onChange={this.props.handleChange('restaurant')}
            />
            <label for="yes"> Yes </label><br />
            <input
              type='radio' id="no" name="res" value="No"
              onChange={this.props.handleChange('restaurant')}
            />
            <label for="no"> No </label><br />

          </form>
          <br />

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
          <DisciplinaryDocument class='doc' values={values} />
        </div>

      </div>

    );
  }


}