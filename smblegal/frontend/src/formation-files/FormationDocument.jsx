import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class FormationDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");
    // var endDateString = values.endDate.toString();
    // var formattedEndDate = moment(endDateString).format("LL");

    // var signDateString = values.dateSigned.toString();
    // var formattedSignDate = moment(signDateString).format("LL");

    // const cobraCheck = values.cobra === 'Yes'
    // var cobraRequire = ''
    // if (cobraCheck)
    //   cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'

    let len = values.incorpList.length;
    let title = 'Incorporator'
    if (len > 1) {
      title = 'Incorporators'
    }

    let fax = ''
    if (values.checkFax == 'Yes') {
      fax = 'Fax Number: ' + values.fax
    }

    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>DELAWARE CERTIFICATE OF FORMATION <br />INSTRUCTIONS</h5>
        </center>
        <br />
        <p>Please complete all of the information below to complete your self-help Delaware
          Certificate of Formation guide.</p>
        <p>In order to fill out the form you will need to pick a valid name and will need to either have
        someone who can receive service of process in Delaware or contract with a Registered
        Agent Service to receive service of process. Please use the following links to complete
          those steps.</p>
        <p>
          A Certificate of Formation fee is applied, this fee is $90. Please consult <a href="https://corp.delaware.gov/">Link</a> fee
          chart to keep up to date on the fees.
          </p>
        <p>
          LLC Name: <a href="https://icis.corp.delaware.gov/ecorp/namereserv/namereservation.aspx">Link</a>

        </p>
        <p>
          Registered Agent: <a href="https://corp.delaware.gov/agents/">Link</a>
        </p>

        <br />
        <center className="page-break">
          <h5 class='indoc'>CERTIFICATE OF FORMATION <br />
        COVER LETTER</h5>
        </center>
        <br />
        <p>Dear Department of State Division of Corporation,</p>
        <p>Please find attached our Certificate of Formation for {values.companyName}. Additionally, we have enclosed
        this cover letter for the convenience of the for the Division, in case they should need to
        contact us.
        </p>
        <p>Name: {values.name}</p>
        <p>Address: {values.address}</p>
        <p>Telephone Number: {values.phone}</p>
        <p>{fax}</p>
        <p>Thank you,</p>
        <p>{values.name}</p>
        <center className="page-break">
          <h5 class='indoc'>CERTIFICATE OF FORMATION <br />
          OF A LIMITED LIABILITY COMPANY</h5>
        </center>
        <br />
        <p>The undersigned {title}, desiring to form a corporation pursuant to the Limited
        Liability Company Act of the State of Delaware, hereby certifies as follows:
        </p>
        <p>1. The name of the limited liability company is {values.companyName}.</p>
        <p>2. The Registered Office of the corporation in the State of Delaware is located at {values.companyAddress}, in the
        City of {values.companyCity}, County of {values.companyCounty}, with a Zip Code of {values.companyZip}.
        </p>
        <p>
          3. The name of the Registered Agent at such address upon whom process against this
          corporation may be served is {values.registered}.
        </p>
        <br /><br />

        <div>
          {
            (values.incorpList).map((val, idx) => {
              let incorpId = `incorp-${idx}`
              return (
                <div key={idx}>
                  <p>By: _________________________</p>
                  <p>Authorized Person</p>
                </div>
              )
            })
          }
        </div>



      </div >

    );
  }


}