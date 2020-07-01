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

    // let unanimousCheck = values.unanimous === 'Yes'
    // let undersigned = 'the directors voting in favor of the resolution(s)'
    // if (unanimousCheck) {
    //   undersigned = 'all the directors'
    // }

    // let numberCheck = values.number === 'Multiple'
    // let title = 'SOLE SHAREHOLDER'
    // let para = 'ALL'
    // let share = 'shareholder'
    // if (numberCheck) {
    //   title = 'SHAREHOLDERS'
    //   para = 'A QUORUM'
    //   share = 'shareholders'
    //   if (unanimousCheck) {
    //     para = 'ALL'
    //   }
    // }
    // let upperShare = share.toUpperCase()

    // var endDateString = values.endDate.toString();
    // var formattedEndDate = moment(endDateString).format("LL");

    // var signDateString = values.dateSigned.toString();
    // var formattedSignDate = moment(signDateString).format("LL");

    // const cobraCheck = values.cobra === 'Yes'
    // var cobraRequire = ''
    // if (cobraCheck)
    //   cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'

    // let condCheck = values.confidential === ''
    // let cond = ''
    // if (condCheck) {
    //   cond = 'Confidential Information includes, but is not limited to information pertaining' +
    //     'to products, technical information, formula, specifications, designs, processes, ' +
    //     'plans, policies, procedures, employees, work conditions, legal and regulatory ' +
    //     'affairs, assets, inventory, discoveries, trademarks, parents, manufacturing, ' +
    //     'packaging, distribution, sales, marketing, expenses, financial statements and ' +
    //     'data, customer and supplier lists, raw materials, costs of goods and relationships ' +
    //     'with third parties, know - how, techniques, inventions, software programs, ' +
    //     'algorithms, software source documents, future and proposed product releases, ' +
    //     'pricing, margins, merchandising plans and strategies, customer lists, and trade ' +
    //     'secrets.Additional Confidential Information are notes, analysis, compilations or ' +
    //     'studies or documents prepared by either Party which contain or were based on ' +
    //     'Confidential Information.'
    // }
    // else {
    //   cond = values.confidential
    // }

    // let condUseCheck = values.confidentialUseCheck === 'Yes'
    // let condUse = ''
    // if (condUseCheck) {
    //   condUse = ' or ' + values.confidentialUse
    // }

    let typeUpper = values.type.toUpperCase()
    var misc = 'Miscellaneous'
    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>WAIVER OF NOTICE OF <br /> {typeUpper}  <br /> MEETING OF THE BOARD OF DIRECTORS OF <br />
            {values.companyName} <br /> A {values.state} CORPORATION</h5>
          <br />
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
        <p>
          Approved and made effective this ________ day of __________ 20_____
        </p>
        <div class='tab'>
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