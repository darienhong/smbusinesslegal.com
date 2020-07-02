import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class ShareholderResolutionDocument extends Component {
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

    let numberCheck = values.number === 'Multiple'
    let title = 'SOLE SHAREHOLDER          '
    let para = 'ALL'
    let share = 'shareholder'
    if (numberCheck) {
      title = 'SHAREHOLDERS'
      para = 'A QUORUM'
      share = 'shareholders'
      if (unanimousCheck) {
        para = 'ALL'
      }
    }
    let upperShare = share.toUpperCase()

    var misc = 'Miscellaneous'
    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>{title} <br /> RESOLUTION OF <br />
            {values.companyName} <br /> A {values.state} CORPORATION</h5>
          <br />
        </center>
        <p>The undersigned, being {para} of the {share} of {values.companyName} Corporation, a {values.state} corporation (the “Company”), do hereby adopt the
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
          and adopted. The undersigned, by affixing their signature hereto, does hereby determine
          and report that notice of the meeting was properly given or waived by the shareholders
          and that a quorum was present in accordance with the bylaws. The {upperShare} do hereby consent to, vote in favor of and approve the foregoing
          resolutions in their capacity as {upperShare} of the Company and
          waive any and all requirements of notice.
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