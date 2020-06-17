import React, { Component } from 'react';
import './App.css';


export default class Questions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class='internship'>
        <p>{this.props.date}</p>
        <p>{this.props.employeeName}</p>
        <p>{this.props.address}</p>
        <p>Dear {this.props.internName},</p>
        <p>Welcome to the team!</p>
        <p>It is our pleasure to extend the following offer of internship to you on behalf of [LEGAL NAME] (the “Company”).
        As explained below, this offer of internship with the Company is as an at-will internship and it is conditioned upon
        the satisfactory completion of certain requirements.  Internship with the Company is conditioned upon the terms and
        conditions in this letter.  You also agree that you are relying on no prior representations or agreements, written or
        oral, other than those expressly contained in this letter.  The validity, interpretation, construction and performance of
        this offer letter shall be governed by the laws of the [State of California] without regard to conflicts of laws
        principals.</p>
      </div>

    );
  }


}