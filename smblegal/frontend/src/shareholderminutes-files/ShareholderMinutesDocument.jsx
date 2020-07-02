import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class ShareholderMinutesDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");

    let upper = values.type.toUpperCase();


    let incorp = values.docName
    let otherCheck = values.docName === 'Other'
    if (otherCheck) {
      incorp = values.docNameOther
    }

    // let unanimousCheck = values.unanimous === 'Yes'
    // let undersigned = 'the directors voting in favor of the resolution(s)'
    // if (unanimousCheck) {
    //   undersigned = 'all the directors'
    // }

    // let presentCheck = values.present === 'Yes'
    // let person = ''
    // let electronic = 'By Electronic Means: '
    // if (presentCheck) {
    //   person = 'All'
    //   electronic = ''
    // }
    // else {
    //   person = values.inPerson
    //   electronic = 'By Electronic Means: ' + values.electronic
    // }

    let noticeCheck = values.notice === 'Yes'
    let reasonCheck = values.reason === 'Bylaws'
    let prov = ''
    if (noticeCheck) {
      prov = 'The meeting was held pursuant to written notice, given to all shareholders of the ' +
        'corporation. A copy of the notice has been inserted in the minute book.'
    }
    else {
      if (reasonCheck) {
        prov = 'No notice was given in accordance with the bylaws.'
      }
      else {
        prov = 'The signed waivers of notice or ' +
          'consent are attached to this minute book and made part of these minutes by incorporation ' +
          'by reference.'
      }
    }

    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>MINUTES OF <br /> {upper}  <br /> MEETING OF <br /> THE SHAREHOLDERS
            <br /> OF <br /> {values.companyName}</h5>
        </center>
        <br />
        <p>The {values.type} meeting of the shareholders of {values.companyName} was held on {formattedDate} at {values.location}.
        </p>

        <center>
          <h6 class='indoc'>Chair and Secretary</h6>

        </center>
        <p>
          {values.chair}, {values.position} of the corporation, acted as Chair and presided over the meeting and {values.secretary},
          Secretary of the corporation, acted as the secretary of the meeting.
        </p>
        <center>
          <h6 class='indoc'>Notice</h6>
        </center>
        <p>{prov}</p>
        <center>
          <h6 class='indoc'>Attendance and Quorum</h6>

        </center>

        <p>
          The secretary reports that the following shareholders were present at the meeting in
          person:
        </p>
        <div>
          {
            (values.directors).map((val, idx) => {
              let nameId = `name-${idx}`
              return (
                <div key={idx}>
                  <div class='line'>
                    <p>{(values.directors)[idx]['name']}</p>
                  </div>
                </div>

              )
            })
          }
        </div>
        <p>
          The secretary reports that of the {values.outstanding} shares outstanding and entitled to vote on the record
          date for the meeting, {values.represented} shares were represented in person or by proxy.
        </p>
        <p>
          The meeting was called to order. It was determined that a quorum was present either in
          person or by proxy and that the meeting could conduct business.
        </p>

        <center>
          <h6 class='indoc'>Agenda</h6>
        </center>
        <p>{values.agenda}</p>
        <br />
        <center>
          <h6 class='indoc'>Minutes</h6>
        </center>
        <p>{values.minutes}</p>


      </div >

    );
  }


}