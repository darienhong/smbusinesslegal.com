import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class SecretaryDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");

    var dateAdoptedString = values.dateAdopted.toString();
    var formattedDateAdopted = moment(dateAdoptedString).format("LL");


    // const cobraCheck = values.cobra === 'Yes'
    // var cobraRequire = ''
    // if (cobraCheck)
    //   cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'
    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>{values.companyName} <br />CERTIFICATE OF THE SECRETARY</h5>
        </center>
        <br />
        <p>
          I HEREBY CERTIFY that I am the duly elected, qualified and acting Secretary of {values.companyName}, a {values.corporation} corporation (“Company”), and that the attached Bylaws were adopted as the Bylaws of the
          Company as of {formattedDateAdopted} by the {values.adopted} of the Company and
          are presently in effect.
        </p>
        <p>IN WITNESS WHEREOF, I have hereunto subscribed my name on {formattedDate}</p>
        <br /><br />
        <div class='rightAlign'>
          <p>______________________________</p>
          <p>{values.name}</p>
          <p>Secretary</p>
        </div>


      </div >

    );
  }


}