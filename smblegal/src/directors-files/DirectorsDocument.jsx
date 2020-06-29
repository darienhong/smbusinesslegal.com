import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class DirectorsDocument extends Component {
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

    // let incorp = 'Certificate of Incorporation'
    // let articles = values.state === 'California' || values.state === 'Massachusetts' || values.state === 'Washington'
    // let certificate = values.state === 'Delaware' || values.state === 'Texas' || values.state === 'New York'
    // if (articles) {
    //   incorp = 'Articles of Incorporation'
    // }
    // else if (certificate) {
    //   incorp = 'Certificate of Incorporation'
    // }
    // else {
    //   incorp = values.docNameOther
    // }

    let incorp = values.docName
    let otherCheck = values.docName === 'Other'
    if (otherCheck) {
      incorp = values.docNameOther
    }

    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>BOARD OF DIRECTORS RESOLUTION OF <br />{values.companyName}
            <br /> A {values.state} CORPORATION</h5>
        </center>
        <br />
        <p>The undersigned, being [all the directors] [the directors voting in favor of the
        resolution[s]] of {values.companyName} Corporation, a {values.corporation} corporation (the “Company”), do hereby adopt the
        following resolutions and direct that this written resolution be filed with the minutes of the
        proceedings of the Company:
        </p>
        <p>WHEREAS, the Company has been formed, the initial directors do hereby adopt the
        following initial action by the Board of Directors:
        </p>
        <h6 class='indoc'>APPOINTMENT OF DIRECTORS</h6>
        <p>
          RESOLVED, that the initial number of authorized directors who sit on the Board of
          Directors shall be {values.number}.
        </p>
        <p>
          RESOLVED, that the Statement and Resignation of the Incorporator appointing the
          initial directors is ratified and approved.
        </p>
        <h6 class='indoc'>CERTIFICATE OF INCORPORATION</h6>
        <p>
          RESOLVED, that the {incorp} of the Company filed on {formattedDate} is
          ratified and affirmed.
        </p>
        <h6 class='indoc'>ELECTION OF OFFICERS</h6>
        <p>
          RESOLVED, that the following are appointed as officers of the Company to serve at
          the pleasure of the board (“Officers”):
        </p>
        <p class='tab'>Chief Executive Officers: {values.ceo}</p>
        <p class='tab'>President: {values.president}</p>
        <p class='tab'>Chief Financial Officers: {values.cfo}</p>
        <p class='tab'>Secretary: {values.secretary}</p>
        <h6 class='indoc'>ELECTION OF OFFICERS</h6>
        <p>
          RESOLVED, that the Bylaws are adopted and ratified; and
        </p>
        <p>
          RESOLVED, that the Secretary is authorized and directed to execute Certificate of
          the Secretary adopting the bylaws and that a copy of the Bylaws is kept at the principal
          office as required by law.
        </p>
        <h6 class='indoc'>EMPLOYER TAX IDENTIFICATION NUMBER</h6>
        <p>
          RESOLVED, that the officers of the Company are directed to apply for an
          employment identification number from the Internal Revenue Service.
        </p>
        <h6 class='indoc'>WITHHOLDING TAXES</h6>
        <p>RESOLVED, that the Chief Financial Officer is responsible for withholding taxes and
        is authorized and directed to collect and pay such taxes when due.
        </p>
        <h6 class='indoc'>STATEMENT BY FOREIGN CORPORATION</h6>
        <p>
          RESOLVED, that the Company is qualified to do business in any jurisdiction that the
          Board of Directors deems fit. The Officers of the Company are authorized and directed to
          execute any instruments necessary on behalf of the Company to be qualified to do business
          in such a jurisdiction.
        </p>
        <h6 class='indoc'>DESIGNATION OF DEPOSITARY</h6>
        <p>
          RESOLVED, that the Chief Executive Officer, the President and the Chief Financial
          Officer of the Company are authorized to open a bank account in the name of the Company
          which may be deposited with Company funds or withdrawn on checks, drafts, advices of
          debit, notes or other orders for payments for the Company; and
        </p>
        <p>
          RESOLVED, that the Chief Executive Officer, the President and the Chief Financial
          Officer of the Company may execute any rules or regulations regarding the maintenance of
          such bank accounts.
        </p>
        <h6 class='indoc'>FISCAL YEAR</h6>
        <p>
          RESOLVED, that the fiscal year shall be {values.fiscalYear}
        </p>
        <h6 class='indoc'>PRINCIPAL OFFICE</h6>
        <p>
          RESOLVED, that the principal office of the Company shall be {values.office}
        </p>
        <h6 class='indoc'>MANAGEMENT POWERS</h6>
        <p>
          RESOLVED, that the Officers are authorized to sign and execute agreements on
          behalf of the Company that may be necessary in the ordinary course of business of the
          Company.
        </p>
        <h6 class='indoc'>STOCK CERTIFICATES</h6>
        <p>
          RESOLVED, that stock certificates representing Common Stock shall be in the form
          as determined by the Secretary of the Company, each Certificate shall have the name of the
          Company, number of shares, name of the owner, date shares were issued, their consecutive
          identifying number, be signed by two Officers of the Company and may contain any other
          wording relating to ownership, issuance and transferability of shares.
        </p>

        {values.stock === 'Yes' && (
          <div>
            <h6 class='indoc'>SALE OF COMMON STOCK</h6>
            <p>
              RESOLVED, that the Officers of the Company are authorized by the [Articles of
              Incorporation] to sell and issue, on behalf of the Company {values.shares} shares of Common stock for
              the aggregate price set below, in cash or for any other form of consideration permitted by
              law:
            </p>
            <p>
              Name of Purchaser Number of Shares Total Purchase Price
            </p>
            <p>
              RESOLVED, that the per share purchase price is equal to or in excess of the fair
              market value of the Common Stock on the date of this consent;
            </p>
            <p>
              RESOLVED, that the offer and sale of Common Stock shall be in accordance with
              applicable state and federal securities laws;
            </p>
            <p>
              RESOLVED, that the Officers of the Company are authorized and directed, on behalf
              of the Company, to execute such additional documents (such as a Restricted Stock Purchase
              Agreement) as each may deem necessary or appropriate to carry out the purposes of the
              sale of common stock.
            </p>
          </div>
        )}
        <h6 class='indoc'>INCORPORATION EXPENSES</h6>
        <p>
          RESOLVED, that the sole incorporator shall be reimbursed for any expenses
          incurred in the process of incorporating and organizing the Company.
        </p>
        <h6 class='indoc'>ADDITIONAL FILINGS</h6>
        <p>
          RESOLVED, that the Officers of the Company are authorized to make any more
          filings necessary to complete the organization of the Company.
        </p>
        <p>
          RESOLVED, that all acts are taken above, and the resolutions are approved, ratified
          and adopted. The undersigned, by affixing their signatures hereto, do hereby consent to,
          vote in favor of and approve the foregoing resolutions in their capacity as members of the
          board of directors of the Company and waive any and all requirements of notice.
        </p>
        <br />
        <p>
          Approved and made effective this ________ day of __________ 20_____
        </p>
        <div>
          {
            (values.signersList).map((val, idx) => {
              let signerId = `signer-${idx}`
              return (
                <div key={idx}>
                  <p>{(values.signersList)[idx]['name']}</p>
                  <p>______________________________</p>
                </div>

              )
            })
          }
        </div>


      </div >

    );
  }


}