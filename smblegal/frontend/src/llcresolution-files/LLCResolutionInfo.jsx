import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import LLCResolutionDocument from './LLCResolutionDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";


export default class LLCResolutionInfo extends Component {
  
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

          <form onChange={this.props.handleRecitalChange}>
            <div class='listExp'>
              <p>
                <p>What is the reasoning for entering into <br />this agreement? Please note that each <br /> reason should be a separate recital.</p>
              </p>
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
          <br /><br />

          <form onChange={this.props.handleResolutionChange}>
            <div class='listExp'>
              <p>What are resolutions being adopted <br /> by the LLC?</p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addResolution}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.resolutionList).map((val, idx) => {
                  let resolutionId = `resolution-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={resolutionId}>{`Resolution #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={resolutionId}
                        data-id={idx}
                        id={resolutionId}
                        value={(values.resolutionList)[idx].name}
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

          <form onChange={this.props.handleVoterChange}>
            <div class='listExp'>
              <p>Who voted?</p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addVoter}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.voterList).map((val, idx) => {
                  let voterId = `voter-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={voterId}>{`Voter #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={voterId}
                        data-id={idx}
                        id={voterId}
                        value={(values.voterList)[idx].name}
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
          <LLCResolutionDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}