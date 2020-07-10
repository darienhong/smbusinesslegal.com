import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class DisclosureNDADocument extends Component {
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

    let condCheck = values.confidential === ''
    let cond = ''
    if (condCheck) {
      cond = 'Confidential Information includes, but is not limited to information pertaining ' +
        'to products, technical information, formula, specifications, designs, processes, ' +
        'plans, policies, procedures, employees, work conditions, legal and regulatory ' +
        'affairs, assets, inventory, discoveries, trademarks, parents, manufacturing, ' +
        'packaging, distribution, sales, marketing, expenses, financial statements and ' +
        'data, customer and supplier lists, raw materials, costs of goods and relationships ' +
        'with third parties, know - how, techniques, inventions, software programs, ' +
        'algorithms, software source documents, future and proposed product releases, ' +
        'pricing, margins, merchandising plans and strategies, customer lists, and trade ' +
        'secrets. Additional Confidential Information are notes, analysis, compilations or ' +
        'studies or documents prepared by the Recipient which contain or were based on ' +
        'Confidential Information.'
    }
    else {
      cond = values.confidential
    }

    let condUseCheck = values.confidentialUseCheck === 'Yes'
    let condUse = ''
    if (condUseCheck) {
      condUse = ' or ' + values.confidentialUse
    }

    let partiesCheck = values.partyCheck === 'Yes'
    let party = ''
    if (partiesCheck) {
      party = 'The Recipient will only disclose Confidential Information to other parties to the extent that is it necessary that they know Confidential Information in order to carry out the purpose of the Agreement. '
    }

    let authorizeCheck = values.authorized === 'Yes'
    let auth = ''
    if (authorizeCheck) {
      auth = ' except for ' + values.parties
    }

    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>NON-DISCLOSURE AGREEMENT</h5>
          <br />
          <p>This non-disclosure agreement (“Agreement”) is entered into as of {formattedDate}.</p>
          <br />
          <p>This Agreement is made by and between {values.employerName}, a [X] having its principal place of
          business at {values.companyName} (“Company”) and {values.employeeName}, a [X] whose
          mailing address is {values.address} (“Recipient”)
          (collectively the “Parties” or individually each a “Party”).</p>
          <p>RECITALS</p>
        </center>
        <div class='tab'>
          {
            (values.recitalList).map((val, idx) => {
              let recitalId = `recital-${idx}`
              return (
                <div key={idx}>
                  <p>{`${idx + 1}. WHEREAS, ` + (values.recitalList)[idx]['name']}</p>
                </div>

              )
            })
          }
        </div>
        <br />
        <center>
          <p>AGREEMENT</p>
        </center>
        <p>NOW, THEREFORE, the Parties agree to the following:</p>
        <h7 class='indoc'>1. Recipient Non-Disclosure.</h7>
        <p>The Company and the Recipient shall be bound by this
        Agreement. The Recipient shall be prohibited from sharing or releasing confidential
        information (as defined below). Any release of confidential information must be done
        in compliance and with the terms of the Agreement.
        </p>

        <h7 class='indoc'>2. Term. </h7>
        <p>
          Subject to permitted disclosures in clause 4 and 5 the Parties agree that this
        Agreement shall be in effect for {values.term} from the date of initial disclosure of confidential
        information.</p>

        <h7 class='indoc'>3. Disclosure to Representatives. </h7>
        <p>Recipient is prohibited from disclosing
        confidential information to third parties{auth}.</p>

        <h7 class='indoc'>4. Responsibility for Representatives Compliance.</h7>
        <p>All affiliates of the Recipient and
        all directors, officers, employees, agents and representatives of the Recipient or its
        affiliates shall be included within the definition of Recipient for purposes of this
        Agreement and shall be bound by the Agreement. The Recipient shall be responsible
        for any breaches of this Agreement by any of its affiliates and any directors, officers,
        employees, agents and representatives of such recipient party or its affiliates.
        </p>

        <h7 class='indoc'>5. Definition of Confidential Information. </h7>
        <p>“Confidential Information” shall refer to
        all non-public information or material disclosed or provided by the Company to the
        Recipient, orally or in writing, that are proprietary to the Company, whether or not
        produced or owned by the Company that are learned over the course of the relationship
        between the Parties, directly or indirectly.
        <br /><br />
          <p class='tab'>a. {cond}</p>
          <p class='tab'>b. Confidential Information does not include information publicly available through
          no action or fault of the Recipient, was already known to the Recipient prior to
          disclosure provided the source was not bound by a contractual or legal fiduciary
          duty of confidentiality or was obtained by a third party through no breach of a
          contractual or legal fiduciary duty of confidentiality, or was independently
          developer by the Recipient without reference to Confidential Information.
          </p>
        </p>

        <h7 class='indoc'>6. Use of Confidential Information. </h7>
        <p>The Recipient will not disclose and will maintain
        the confidential of the Confidential Information in both oral and written form.
        Recipient will only use the Confidential Information in the way that the Parties agree is
        necessary to carry out the underlying purpose of this Agreement{condUse}. {party}
        The Recipient represents that they handle their
        own confidential information with reasonable care and that they will treat the
        Company’s Confidential Information with the same standard of care.</p>


        <h7 class='indoc'>7. Waiver. </h7>
        <p>The Recipient may request to the Company that they are able to disclose the
        Confidential Information. In the event that the Company denies the Recipient’s request,
        the Recipient shall abide by that decision. In the event that the Company assents to the
        request, the Parties shall come to an agreement on the scope of that disclosure, execute
        an addendum to this Agreement and limit the disclosure to the extent of that
        addendum.
        </p>

        <h7 class='indoc'>8. Destruction and Return. </h7>
        <p>Upon termination of any relationship between the
        Parties, the Recipient shall destroy any Confidential Information and promptly return to
        the other party, without retaining any copies, any information or documents furnished
        to the other party.
        </p>

        <h7 class='indoc'>9. Indemnification. </h7>
        <p>Recipient shall indemnify and hold harmless the other Party
        and its affiliates and their respective directors, officers, employees, agents and
        representatives from and against any and all losses, damages, costs and expenses
        (including without limitation reasonable attorneys’ fees and expenses) caused by or
        arising out of any direct breach of this Agreement and any and all actions, suits,
        proceedings, claims, demands or judgments incident thereto.
        </p>

        <h7 class='indoc'>10. No Licenses, No Transfer of Rights or Interest. </h7>
        <p>Neither Party is granted a license,
        right or interest to any patent, copyright, trademark, trade secret, or other rights by
        disclosing Confidential Information under this Agreement.
        </p>

        <h7 class='indoc'>11. Survival. </h7>
        <p>This Agreement shall govern all communications between the Parties. The
        Agreement shall survive any relationship between the Parties, specifically Clause 3 “Use
        of Confidential Information” shall survive any termination of relationship between the
        Parties.
        </p>

        <h7 class='indoc'>12. Governing Law. </h7>
        <p>This Agreement shall be governed in all respects by the laws of the
          United States and the state of {values.state}.
        </p>

        <h7 class='indoc'>13. Injunctive Relief. </h7>
        <p>Irreparable damage will result in a breach of the Agreement
        and any of the agreements or promises made herein. It is agreed that there is no
        adequate remedy at law, and the Parties shall be entitled to injunctive relief and/or
        specific performance of the obligations contained herein. Other relief shall be granted
        as is determined to be proper (including monetary damages).
        </p>


        <h7 class='indoc'>14. Miscellaneous</h7>
        <h6 class='tab'>a. Integration.
          <br /><br />
          <p class='tab'>This Agreement contains the entire understanding between the
          Parties.  This Agreement supersedes any prior representations or
          understandings, written or oral.
          </p>
        </h6>
        <h6 class='tab'>b. Governing Law.
          <br /><br />
          <p class='tab'>The validity, interpretation, construction and performance of
          this Agreement shall be governed by the laws of the State of {values.state} without
          regard to conflicts of laws principles.
          </p>
        </h6>
        <h6 class='tab'>c. Assignment, Successors and Assigns.
          <br /><br />
          <p class='tab'>  The rights bestowed upon the Parties in
          this Agreement are personal to Parties and shall not be effective upon any
          assignment or successors in interest.  Any attempted assignment of this
          Agreement shall be null and void. This Agreement shall be binding upon the
          Parties, their subsidiaries, successors, assigns, legal representatives and all
          corporations controlling or controlled by the Parties and shall inure to the
          benefit of the Parties.
                </p>
        </h6>
        <h6 class='tab'>d. Severability.
          <br /><br />
          <p class='tab'>If one or more provisions of this Agreement are deemed void or
          unenforceable such provision shall nevertheless be enforced to the fullest extent
          possible by law and the force and validity of the remainder of the Agreement
          shall still be in effect.
          </p>
        </h6>
        <h6 class='tab'>e. Entire Agreement.
          <br /><br />
          <p class='tab'>This Agreement is the entire agreement between the Parties
          with respect to Confidential Information.  This Agreement supersedes any prior
          or contemporaneous agreements, representations, disclosures, oral or written
          statements concerning Confidential Information.  This Agreement may only be
          changed or amended with the mutual agreement of the Parties in writing.
          </p>
        </h6>
        <h6 class='tab'> f. Headings.
          <br /><br />
          <p class='tab'>
            Headings to this Agreement are used solely for the purposes of
            convenience and shall have no bearing on the applicability of any terms within
            the Agreement.
                 </p>
        </h6>
        <br />
        <p>NAME:   _____________________   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            _____________________</p>
        <p>ADDRESS:   __________________   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            _____________________</p>
        <p>PHONE NUMBER:   _____________   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            _____________________</p>
        <p>SIGNATURE:</p>
        <br />
        <br />
        <br />

      </div >

    );
  }


}