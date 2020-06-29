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
    // const cobraCheck = values.cobra === 'Yes'
    // var cobraRequire = ''
    // if (cobraCheck)
    //   cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'
    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>STATEMENT AND RESIGNATION  <br />
          OF THE INCORPORATOR OF <br />
            {values.companyName}</h5>
        </center>
        <br />
        <p>The undersigned, being the incorporator of {values.companyName}, who signed and filed {values.companyName}’s [Articles of
        Incorporation – depends on state see Google Drive] with {values.state} state’s appropriate office, appoints
        the following to serve as directors of {values.companyName} (“Initial Directors”). These Initial Directors shall serve
        as directors of {values.companyName} until the first meeting of the shareholders where directors shall be elected
        and until successors are elected and agree to serve on the board.
        </p>
        <p>
          Effective immediately, the undersigned hereby tenders their resignation as incorporator for {values.companyName},
          as well as resigns and disclaims any involvement, control of, or authority over {values.companyName}.
        </p>
        <p>Initial Directors:</p>
        <div class='tab'>
          {
            (values.directorList).map((val, idx) => {
              let directorId = `director-${idx}`
              return (
                <div key={idx}>
                  <p>{(values.directorList)[idx]['name']}</p>
                </div>
              )
            })
          }
        </div>
        <br />
        <p>Date: {formattedDate}</p>
        <p>Signature</p>


      </div >

    );
  }


}