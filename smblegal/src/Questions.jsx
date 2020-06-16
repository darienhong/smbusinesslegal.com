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
      employeeName: '[NAME]',
      address: '[ADDRESS]',
      internName: '[NAME]'
    };
  }


  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleEmployeeNameChange = event => {
    this.setState({ employeeName: event.target.value });
  }

  handleAddressChange = event => {
    this.setState({ address: event.target.value });
  }

  handleInternNameChange = event => {
    this.setState({ internName: event.target.value });
  }

  render() {
    var dateString = this.state.startDate.toString();
    var formattedDate = moment(dateString).format("LL");

    return (
      <div class='qs'>
        <div class='ask'>
          <p> Enter the date: </p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDateChange}
          />
          <form>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.handleEmployeeNameChange}
            />
          </form>
          <form>
            <p>Enter your address:</p>
            <input
              type='text'
              onChange={this.handleAddressChange}
            />
          </form>

          <form>
            <p>Enter your intern's name:</p>
            <input
              type='text'
              onChange={this.handleInternNameChange}
            />
          </form>
        </div>


        <div class='display'>
          <Document date={formattedDate} employeeName={this.state.employeeName} address={this.state.address}
            internName={this.state.internName}
          />
        </div>
      </div>
    );
  }


}
