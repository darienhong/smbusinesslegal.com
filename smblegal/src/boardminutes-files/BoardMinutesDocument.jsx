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
    // var endDateString = values.endDate.toString();
    // var formattedEndDate = moment(endDateString).format("LL");

    // var signDateString = values.dateSigned.toString();
    // var formattedSignDate = moment(signDateString).format("LL");

    // const cobraCheck = values.cobra === 'Yes'
    // var cobraRequire = ''
    // if (cobraCheck)
    //   cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'

    // let incorp = 'Certificate of Incorporation'
    // let articles = values.state === 'California' || values.state === 'Massachusetts' || values.state === 'Washington'
    // let certificate = values.state === 'Delaware' || values.state === 'Texas' || values.state === 'New York'
    // if (articles) {
    //   incorp = 'Articles of Incorporation'
    // }
    // else if (certificate) {
    //   incorp = 'Certificate of Incorporation'
    // }
    // else {
    //   incorp = values.docNameOther
    // }

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

    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>MINUTES OF {upper} MEETING <br />OF <br /> THE BOARD OF DIRECTORS
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
                    <p>{(values.directors)[idx]['name']}</p>
                  </div>
                  <div class='line'>
                    <p class='tab2'>{(values.directors)[idx]['address']}</p>
                  </div>
                </div>

              )
            })
          }
        </div>

      </div >

    );
  }


}