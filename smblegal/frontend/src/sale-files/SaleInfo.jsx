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



export default class SaleInfo extends Component {
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
          <br />

          <form onChange={this.props.handleGoodChange}>
            <div class='listExp'>
              <p>What goods are being sold?</p>
            </div>
            <div class='expButton'>
              <button class='add' onClick={this.props.addGood}>+</button>
            </div>
            <br />
            <div class='listExp'>
              {
                (values.goodList).map((val, idx) => {
                  let goodId = `good-${idx}`
                  return (
                    <div key={idx}>
                      <label htmlFor={goodId}>{`Good #${idx + 1}`}</label>
                      <input
                        type="text"
                        name={goodId}
                        data-id={idx}
                        id={goodId}
                        value={(values.goodList)[idx].name}
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
            <p>Where will the goods be delivered?</p>
            <input
              type='text'
              onChange={this.props.handleChange('deliver')}
            />
          </form>
          <br />
          <form>
            <p>What is the shipping method?</p>
            <input
              type='text'
              onChange={this.props.handleChange('method')}
            />
          </form>
          <br />






          <button class='prev' onClick={this.previous}>Previous </button>

          <button class='next' onClick={this.next}>Next </button>

        </div>
        <div class='col right'>
          <SaleDocument class='doc' values={values} />
        </div>

      </div >

    );
  }


}