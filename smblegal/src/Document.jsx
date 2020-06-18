import React, { Component } from 'react';
import moment from 'moment';

import './App.css';


export default class Questions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;
    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");
    var startDateString = values.startDate.toString();
    var formattedStartDate = moment(startDateString).format("LL");

    return (
      <div class='internship'>
        <p ><span class='fill'>{formattedDate}</span></p>
        <p ><span class='fill'>{values.employeeName}</span></p>
        <p><span class='fill'>{values.address}</span></p>
        <p> Dear <span class='fill'>{values.internName}</span>,</p>
        <p>Welcome to the team!</p>
        <p>It is our pleasure to extend the following offer of internship to you on behalf of <span class='fill'>{values.companyName}</span> (the “Company”).
        As explained below, this offer of internship with the Company is as an at-will internship and it is conditioned upon
        the satisfactory completion of certain requirements.  Internship with the Company is conditioned upon the terms and
        conditions in this letter.  You also agree that you are relying on no prior representations or agreements, written or
        oral, other than those expressly contained in this letter.  The validity, interpretation, construction and performance of
        this offer letter shall be governed by the laws of the State of <span class='fill'>{values.state}</span>  without regard to conflicts of laws
        principals.</p>
        <p> <span class='word'>Title:</span>  <span class='fill'>{values.title}</span> </p>
        <p> <span class='word'>Duties:</span>  <span class='fill'>{values.duties} </span></p>
        <p> <span class='word'>Reporting Relationship:</span> <span class='fill'>{values.relationship}</span> </p>
        <p><span class='word'>Start Date:</span> <span class='fill'>{formattedStartDate}</span></p>
        <p><span class='word'>Base Wage:</span> <span class='fill'>{values.wage}</span>  </p>
        <p><span class='word'>Hours: [X]</span> </p>
        <p><span class='word'>Status: [Exempt or non-exempt]</span> </p>
        <p><span class='word'>At-Will Employment: [X]</span> </p>
        <p><span class='word'>[California Notice of Required Pay and Sick Leave: [X]]</span>  </p>
      </div >

    );
  }


}