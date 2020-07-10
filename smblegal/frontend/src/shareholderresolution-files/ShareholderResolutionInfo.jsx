import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import ShareholderResolutionDocument from './ShareholderResolutionDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";



export default class ShareholderResolutionInfo extends Component {
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
        <Navbar2/>

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
          <br /><br />

          <form onChange={this.props.handleResolutionChange}>
            <div class='listExp'>
              <p>What are resolutions being adopted <br /> by the shareholders?</p>
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
          <ShareholderResolutionDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}