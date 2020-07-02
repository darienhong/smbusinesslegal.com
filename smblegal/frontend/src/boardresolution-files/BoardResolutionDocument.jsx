import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class BoardResolutionDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");

    let unanimousCheck = values.unanimous === 'Yes'
    let undersigned = 'the directors voting in favor of the resolution(s)'
    if (unanimousCheck) {
      undersigned = 'all the directors'
    }

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

    var misc = 'Miscellaneous'
    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>BOARD OF DIRECTORS RESOLUTION OF <br />
            {values.companyName} <br /> A {values.state} CORPORATION</h5>
          <br />
        </center>
        <p>The undersigned, being {undersigned} of {values.companyName} Corporation, a {values.state} corporation (the “Company”), do hereby adopt the
        following resolutions and direct that this written resolution be filed with the minutes of the
        proceedings of the Company:
        </p>
        <div class='tab'>
          {
            (values.recitalList).map((val, idx) => {
              let recitalId = `recital-${idx}`
              return (
                <div key={idx}>
                  <p>{`WHEREAS, ` + (values.recitalList)[idx]['name']}</p>
                </div>

              )
            })
          }
        </div>
        <br />
        <div class='tab'>
          {
            (values.resolutionList).map((val, idx) => {
              let resolutionId = `resolution-${idx}`
              return (
                <div key={idx}>
                  <p>{`RESOLVED, that ` + (values.resolutionList)[idx]['name']}</p>
                </div>

              )
            })
          }
        </div>
        <p class='tab'>
          RESOLVED, that all acts are taken above, and the resolutions are approved, ratified
          and adopted. The undersigned, by affixing their signatures hereto, do hereby consent to,
          vote in favor of and approve the foregoing resolutions in their capacity as members of the
          board of directors of the Company and waive any and all requirements of notice.
        </p>
        <br />
        <p>
          Approved and made effective this ________ day of __________ 20_____
        </p>
        <br />
        <div>
          {
            (values.voterList).map((val, idx) => {
              let voterId = `voter-${idx}`
              return (
                <div key={idx}>
                  <p>{(values.voterList)[idx]['name']}</p>
                  <p>____________________________</p>
                </div>

              )
            })
          }
        </div>

      </div >

    );
  }


}