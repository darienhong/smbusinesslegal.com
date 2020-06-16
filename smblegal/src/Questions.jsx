import React, { Component } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Document from './Document.jsx';


export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      name: '[NAME]',
      address: '[ADDRESS]'
    };
  }


  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handleAddressChange = event => {
    this.setState({ address: event.target.value });
  }

  render() {
    var dateString = this.state.startDate.toString();
    var formattedDate = moment(dateString).format("LL");

    return (
      <div class='qs'>
        <div class='date'>
          <p> Enter the date: </p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDateChange}
          />
        </div>
        <form>
          <p>Enter your name:</p>
          <input
            type='text'
            onChange={this.handleNameChange}
          />
        </form>
        <form>
          <p>Enter your address:</p>
          <input
            type='text'
            onChange={this.handleAddressChange}
          />
        </form>

        <div class='display'>
          <Document date={formattedDate} name={this.state.name} address={this.state.address} />
        </div>
      </div>
    );
  }


}
