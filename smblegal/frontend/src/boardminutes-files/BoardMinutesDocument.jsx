import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class BoardMinutesDocument extends Component {
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

    let unanimousCheck = values.unanimous === 'Yes'
    let undersigned = 'the directors voting in favor of the resolution(s)'
    if (unanimousCheck) {
      undersigned = 'all the directors'
    }

    let presentCheck = values.present === 'Yes'
    let person = ''
    let electronic = 'By Electronic Means: '
    if (presentCheck) {
      person = 'All'
      electronic = ''
    }
    else {
      person = values.inPerson
      electronic = 'By Electronic Means: ' + values.electronic
    }

    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>MINUTES OF <br /> {upper}  <br /> MEETING OF <br /> THE BOARD OF DIRECTORS
            <br /> OF <br /> {values.companyName}</h5>
        </center>
        <br />
        <p>The {values.type} meeting of the board of directors of {values.companyName} was held on {formattedDate} at {values.location}.
        </p>
        <p>
          Those present were:
        </p>
        <div>
          {
            (values.directors).map((val, idx) => {
              let nameId = `name-${idx}`
              return (
                <div key={idx}>
                  <div class='line'>
                    <p>Name</p>
                    <p>{(values.directors)[idx]['name']}</p>
                  </div>
                  <div class='line'>
                    <p class='tab2'>Address</p>
                    <p class='tab2'>{(values.directors)[idx]['address']}</p>

                  </div>

                  <br /><br />

                </div>

              )
            })
          }
        </div>

        {/* <div>
          {
            (values.presence).map((val, idx) => {
              let person = `person-${idx}`
              return (
                <div key={idx}>
                  <p>{`${idx + 1} ` + (values.presence)[idx]['person']}</p>
                </div>

              )
            })
          }
        </div> */}
        {/* <div class='line'>
          Name
          </div>
        <div class='line'>
          <p class='tab'>Address</p>
        </div> */}
        <p>
          The meeting was called to order. It was determined that a quorum was present either in
          person and that the meeting could conduct business.
        </p>
        <p>
          {values.chair}, {values.position} of the corporation, acted as Chair and presided over the meeting and {values.secretary},
          Secretary of the corporation, acted as the secretary of the meeting.
        </p>
        <p>
          The following directors were present:
        </p>

        <p>In-person: {person}</p>
        <p>{electronic}</p>
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