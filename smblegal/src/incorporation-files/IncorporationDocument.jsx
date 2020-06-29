import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class IncorporationDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");

    const purposeCheck = values.purpose === 'Specify'
    let purposeRequire = 'engage in any lawful act or activity for which corporations may be organized under the General Corporation Law of Delaware.'
    if (purposeCheck) {
      purposeRequire = values.specifyPurpose
    }

    const preferCheck = values.stock === 'Yes'
    let preferRequire = ''
    let incorporator = '6. The name and mailing address of the incorporator are as follows ' + values.name + ', ' + values.address
    const rightsCheck = values.rights === 'Yes'

    if (preferCheck) {
      preferRequire = '6. The total amount of preferred stock this corporation is authorized to issue is ' + values.preferredShares + ' shares (authorized) with a par value of $' + values.preferredPrice + ' per share.'
      incorporator = '7. The name and mailing address of the incorporator are as follows ' + values.name + ', ' + values.address
      if (rightsCheck) {
        preferRequire = '6. The total amount of preferred stock this corporation is authorized to issue is ' + values.preferredShares + ' shares (authorized) with a par value of $' + values.preferredPrice + ' per share.' +
          'The preferred stock shall have such rights and preferences as deemed appropriate by the Board of Directors of the ' +
          'Corporation.'
      }
      else {
        preferRequire = '6. The total amount of preferred stock this corporation is authorized to issue is ' + values.preferredShares + ' shares (authorized) with a par value of $' + values.preferredPrice + ' per share.' +
          values.specifyRights
      }
    }

    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>DELAWARE CERTIFICATE OF INCORPORATION <br />INSTRUCTIONS</h5>
        </center>
        <br />
        <p>Please complete all of the information below to complete your self-help Delaware
        Certificate of Incorporation guide.
          </p>
        <p>In order to fill out the form you will need to pick a valid name and will need to either have
        someone who can receive service of process in Delaware or contract with a Registered
        Agent Service to receive service of process. Please use the following links to complete
        those steps.
        </p>
        <p>
          A Certificate of Incorporation fee is applied, this fee begins at $89 and increases with the
          size of the authorized shares of stock. Please consult <a href="https://corp.delaware.gov/">this</a> fee chart to keep up to date on
          the fees.
        </p>
        <p>
          Corporation Name: <a href="https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx">Link</a>

        </p>
        <p>
          Registered Agent: <a href="https://corp.delaware.gov/agents/">Link</a>
        </p>

        <br />
        <center className="page-break">
          <h5 class='indoc'>CERTIFICATE OF INCORPORATION <br />
        COVER LETTER</h5>
        </center>
        <br />
        <p>Dear Department of State Division of Corporation,</p>
        <p>Please find attached our Certificate of Incorporation for {values.companyName}. Additionally, we have enclosed
        this cover letter for the convenience of the Division, in case they should need to
        contact us.
        </p>
        <p>Name: {values.name}</p>
        <p>Address: {values.address}</p>
        <p>Telephone Number: {values.phone}</p>
        <p>Fax Number: {values.fax}</p>
        <p>Thank you,</p>
        <p>{values.name}</p>
        <center className="page-break">
          <h5 class='indoc'>CERTIFICATE OF INCORPORATION <br />
          A STOCK CORPORATION</h5>
        </center>
        <br />
        <p>The undersigned Incorporator[s], desiring to form a corporation pursuant to the General
        Corporation Law of the State of Delaware, hereby certifies as follows:
        </p>
        <p>1. The name of the Corporation is {values.companyName}.</p>
        <p>2. The Registered Office of the corporation in the State of Delaware is located at {values.companyAddress}, in the
        City of {values.companyCity}, County of {values.companyCounty}, with a Zip Code of {values.companyZip}.
        </p>
        <p>
          3. The name of the Registered Agent at such address upon whom process against this
          corporation may be served is {values.name}.
        </p>
        <p>
          4. The purpose of this corporation is to {purposeRequire}.
        </p>
        <p>
          5. The total amount of common stock this corporation is authorized to issue is {values.shares} shares
          (authorized) with a par value of ${values.price} per share.
        </p>
        <p>{preferRequire}</p>
        <p>{incorporator}</p>
        <p></p>
        <br /><br />
        <p>By: ______________________________</p>
        <p>Authorized Person</p>


      </div >

    );
  }


}