import React, { Component } from 'react';
import './App.css';


export default class Questions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;
    return (
      <div class='internship'>
        {/* <p>{values.date}</p> */}
        <p>{values.employeeName}</p>
        <p>{values.address}</p>
        <p>Dear {values.internName},</p>
        <p>Welcome to the team!</p>
        <p>It is our pleasure to extend the following offer of internship to you on behalf of {values.companyName} (the “Company”).
        As explained below, this offer of internship with the Company is as an at-will internship and it is conditioned upon
        the satisfactory completion of certain requirements.  Internship with the Company is conditioned upon the terms and
        conditions in this letter.  You also agree that you are relying on no prior representations or agreements, written or
        oral, other than those expressly contained in this letter.  The validity, interpretation, construction and performance of
        this offer letter shall be governed by the laws of the [State of California] without regard to conflicts of laws
        principals.</p>
        <p> <span class='word'>Title:</span> {values.title} </p>
        <p> <span class='word'>Duties:</span> {values.duties} </p>
        <p> <span class='word'>Reporting Relationship:</span> {values.relationship} </p>
        <p><span class='word'>Start Date:</span> {values.startDate} </p>
        <p><span class='word'>Base Wage:</span> {values.wage} </p>
        <p><span class='word'>Hours: [X]</span> </p>
        <p><span class='word'>Status: [Exempt or non-exempt]</span> </p>
        <p><span class='word'>At-Will Employment: [X]</span> </p>
        <p><span class='word'>[California Notice of Required Pay and Sick Leave: [X]]</span>  </p>
      </div >

    );
  }


}