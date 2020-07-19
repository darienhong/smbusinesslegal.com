import React, { Component } from 'react';
import '../App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { Progress } from 'semantic-ui-react'
import SaleDocument from './SaleDocument.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import StripeCheckout from "react-stripe-checkout";



export default class SaleInfo2 extends Component {
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
            <p>Up to how much of the shipping costs <br />will Buyer be liable for?</p>
            <input
              type='text'
              onChange={this.props.handleChange('costs')}
            />
          </form>
          <br />
          <form>
            <p>On or before what date will the Goods <br /> be delivered to the Buyer?</p>
            <input
              type='date'
              onChange={this.props.handleChange('deliverDate')}
            />
          </form>
          <br />

          <form>
            <p>Do you want to insert any warranties or remain with a disclaimer of express and implied warranties?</p>
            <input
              type='radio' id="insert" name="insert" value='Insert' checked={values.warranties === 'Insert'}
              onChange={this.props.handleChange('warranties')}
            />
            <label for="insert"> Insert Warranties </label><br />
            <input
              type='radio' id="remain" name="rem" value='Remain' checked={values.warranties === 'Remain'}
              onChange={this.props.handleChange('warranties')}
            />
            <label for="remain"> Remain </label><br />

          </form>
          <br />


          {values.warranties === 'Insert' && (
            <div>
              <form onChange={this.props.handleWarrantiesChange}>
                <div class='listExp'>
                  <p>Enter a warranty: </p>
                </div>
                <div class='expButton'>
                  <button class='add' onClick={this.props.addWarranty}>+</button>
                </div>
                <br />
                <div class='listExp'>
                  {
                    (values.warrantiesList).map((val, idx) => {
                      let warrantyId = `warranty-${idx}`
                      return (
                        <div key={idx}>
                          <label htmlFor={warrantyId}>{`Warranty #${idx + 1}`}</label>
                          <input
                            type="text"
                            name={warrantyId}
                            data-id={idx}
                            id={warrantyId}
                            value={(values.warrantiesList)[idx].name}
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
            </div>
          )}


          <form>
            <p>How many goods will the Seller deliver to the Buyer?</p>
            <input
              type='number'
              onChange={this.props.handleChange('number')}
            />
          </form>
          <br />

          <button class='prev' onClick={this.previous}>Previous </button>

          {/* PAYMENTS BELOW */} {/*
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
        */}
          {/* PAYMENTS ABOVE */}

          <button class='next' onClick={this.next}>Next </button>

        </div>
        <div class='col right'>
          <SaleDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}