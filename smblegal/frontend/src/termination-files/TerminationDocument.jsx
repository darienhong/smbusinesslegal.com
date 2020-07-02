import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class TerminationDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");
    var endDateString = values.endDate.toString();
    var formattedEndDate = moment(endDateString).format("LL");

    var signDateString = values.dateSigned.toString();
    var formattedSignDate = moment(signDateString).format("LL");

    const cobraCheck = values.cobra === 'Yes'
    var cobraRequire = ''
    if (cobraCheck)
      cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'

    const releaseCheck = values.release == 'Yes'
    var releaseRequire = ''
    var releaseRequire2 = ''

    const disparagementCheck = values.disparagement == 'Yes'
    var disparagementRequire = ''
    var disparagementRequire2 = ''

    const publicityCheck = values.publicity == 'Yes'
    var publicityRequire = ''
    var publicityRequire2 = ''

    var misc = '1. Miscellaneous'

    if (releaseCheck) {
      releaseRequire = '1. Complete Release.'
      releaseRequire2 = 'As a condition of signing this agreement Employee agrees to release and waive all known and unknown claims you presently have against the Company, its current or former officers, employees or consultants, to the fullest extent of the law except for those prohibited by law or the ability to enforce this Agreement.'
      misc = '2. Miscellaneous'

      if (disparagementCheck) {
        disparagementRequire = '2. Non-Disparagement'
        disparagementRequire2 = 'Employee agrees that as a condition of termination Employee will not disparage the Company in any way.'
        misc = '3. Miscellaneous'

        if (publicityCheck) {
          publicityRequire = '3. Publicity and Announcements.'
          publicityRequire2 = 'As a condition of termination Employee agrees to not engage in any publicity or announcements of their termination from the Company.'
          misc = '4. Miscellaneous'
        }
      }
    }

    else if (disparagementCheck) {
      disparagementRequire = '1. Non-Disparagement'
      disparagementRequire2 = 'Employee agrees that as a condition of termination Employee will not disparage the Company in any way.'
      misc = '2. Miscellaneous'
      if (publicityCheck) {
        publicityRequire = '2. Publicity and Announcements.'
        publicityRequire2 = 'As a condition of termination Employee agrees to not engage in any publicity or announcements of their termination from the Company.'
        misc = '3. Miscellaneous'
      }
    }

    else if (publicityCheck) {
      publicityRequire = '1. Publicity and Announcements.'
      publicityRequire2 = 'As a condition of termination Employee agrees to not engage in any publicity or announcements of their termination from the Company.'
      misc = '2. Miscellaneous'
    }



    return (
      <div class='size' >
        <p >{formattedDate}</p>
        <p >{values.employeeName}</p>
        <p >{values.address}</p>
        <br />
        <p >{values.employeeName},</p>
        <p>This letter is to confirm termination of the employment relationship between {values.companyName} (“Company”) and {values.employeeName} (“Employee”). The employment agreement (“Employment
        Agreement”) entered into between Company and Employee on {formattedSignDate} is terminated as of {formattedDate}.</p>
        <p>Due to {values.cause}, the employment relationship has ended.</p>
        <p>The terms of this termination (“Agreement”) are as follows:</p>
        <br />
        <p>Date of last payment: {formattedEndDate}</p>
        <p>Return of Company property if any: {values.property}</p>
        <p>Cessation of Company benefits if any: {values.benefits}</p>
        <p>Contact for {values.reference} of employment: {values.contact}</p>
        <br />
        <p>You will need to update the Company with your current mailing address. The obligation to
        update your address is so that the Company may send a W-2 form to you to comply with
        IRS mandates.</p>
        <p>{cobraRequire}</p>
        <br />
        <p>Sincerely,</p>
        <p>_______________</p>
        <p>CC: Employee File</p>

        <h5 className="page-break">{releaseRequire}</h5>
        <p>{releaseRequire2}</p>

        <h5>{disparagementRequire}</h5>
        <p>{disparagementRequire2}</p>

        <h5>{publicityRequire}</h5>
        <p>{publicityRequire2}</p>

        <h5 class='indoc'>{misc}</h5>
        <h6 class='tab'>i. INTEGRATION.
          <br /><br />
          <p class='tab'>This offer letter contains the entire understanding between the
          Company and Employee. This letter supersedes any prior representations or
          understandings, written or oral. Notwithstanding this provision, any terms of the
          Employment Agreement agreed to survive termination shall still be in full force
          and effect.</p>
        </h6>
        <h6 class='tab'>ii. GOVERNING LAW.
          <br /><br />
          <p class='tab'>The validity, interpretation, construction and performance of this offer
          letter shall be governed by the laws of the State of
            {values.state} without regard to conflicts of laws principals.</p>
        </h6>
        <h6 class='tab'>iii. ASSIGNMENT, SUCCESSORS AND ASSIGNS.
          <br /><br />
          <p class='tab'>  The rights bestowed upon
          Employee in this agreement are personal to Employee and shall not be effective
          upon any assignment or successors in interest. Any attempted assignment of
          this agreement shall be null and void.
                </p>
        </h6>
        <h6 class='tab'>iv. SEVERABILITY.
          <br /><br />
          <p class='tab'>If one or more provisions of this agreement are deemed void or
          unenforceable such provision shall nevertheless be enforced to the fullest extent
          possible by law and the force and validity of the remainder of the agreement
          shall still be in effect.
          </p>
        </h6>
        <h6 class='tab'> v. COUNTERPARTS.
          <br /><br />
          <p class='tab'>
            This agreement may be executed in counterparts each of
            which shall be deemed an original and which together shall constitute one and
            the same agreement.
                 </p>
        </h6>
        <br />
        <p>[X]</p>
        <p>______________________</p>
        <p>[X]</p>
        <p>______________________</p>

      </div >

    );
  }


}