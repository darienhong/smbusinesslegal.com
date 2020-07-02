import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class CovidRentDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");


    let employeeCheck = values.employees === 'Yes'
    let employee = ''
    if (employeeCheck) {
      employee = 'Pursuant to the Order, paragraph 1.e, we have less than ten (10) employees and self-certify our inability to pay rent.'
    }

    return (
      <div class='size' >

        <p>From: {values.tenant}</p>
        <p>To: {values.landlord}</p>
        <p>Re: {values.subject}</p>
        <p>Date: {formattedDate}</p>

        <p>{values.landlord}</p>
        <p>
          Pursuant to the March 19, 2020 Executive Order of the Chair of the County of Los Angeles
          (“Original Order”) and the associated amendment to the Original Order on April 14, 2020
          (the “Amendment”, together with the Original Order the “Order”) we are writing to let you
          know that we have been financially impacted by Covid-19 and will be unable to pay our
          rent, to you {values.landlord} (“Landlord”) for this month.
        </p>

        <p>
          We plan to follow the Order and any future amendments to the Order, including extensions
          of the 12-month period to pay rents. Given our relationship we would like to further
          attempt to comply with Paragraph 1.e of the Order by attempting to work out a payment
          plan, either by paying a portion of rents owed this month or to pro-rate those payments
          over the next twelve (12) months.
        </p>
        <p>{employee}</p>
        <p>Please confirm receipt of this notice. We look forward to working with you.</p>
        <br />
        <p>[X] _____________________________</p>

      </div >

    );
  }


}