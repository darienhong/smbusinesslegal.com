import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class WaiverDirectorsDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");

    let typeUpper = values.type.toUpperCase()
    var misc = 'Miscellaneous'
    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>WAIVER OF NOTICE OF <br /> {typeUpper}  <br /> MEETING OF THE BOARD OF DIRECTORS OF <br />
            {values.companyName} <br /> A {values.state} CORPORATION</h5>
          <br /><br />
        </center>
        <p>{values.name}, the undersigned and director of {values.companyName}, does hereby waive any required notice of
        the {typeUpper} meeting of the board of directors of the company, and consents
        to the holding of the meeting that is scheduled to be held on {formattedDate}.
        </p>
        <p>
          {values.name} consents to the holding of the meeting and the transaction of business at the
          meeting. {values.name} further requests that the secretary file this waiver with the minutes in the
          corporate records.
        </p>
        <br />
        <p>
          Approved and made effective this ________ day of __________ 20_____
        </p>
        <div>
          {
            (values.signerList).map((val, idx) => {
              let signerId = `signer-${idx}`
              return (
                <div key={idx}>
                  <p>{(values.signerList)[idx]['name']}</p>
                  <p>__________________________________</p>
                </div>

              )
            })
          }
        </div>

      </div >

    );
  }


}