import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class SaleDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");

    var deliverDateString = values.deliverDate.toString();
    var formattedDeliverDate = moment(deliverDateString).format("LL");

    // var endDateString = values.endDate.toString();
    // var formattedEndDate = moment(endDateString).format("LL");

    // var signDateString = values.dateSigned.toString();
    // var formattedSignDate = moment(signDateString).format("LL");

    // const cobraCheck = values.cobra === 'Yes'
    // var cobraRequire = ''
    // if (cobraCheck)
    //   cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'

    var misc = 'Miscellaneous'
    return (
      <div class='size' >
        <center>
          <h5 class='indoc'>SHORT FORM SALE OF GOODS CONTRACT</h5>
        </center>
        <br />
        <p>This sales agreement (“Agreement”) is entered into as of {formattedDate} (“Effective Date”) by
        and between {values.sellerName}, with an address of {values.sellerAddress} (“Seller”) and {values.buyerName}, with an address of {values.buyerAddress} (“Buyer”)
        (collectively “Parties”).</p>

        <center>
          <h6 class='indoc'>RECITALS</h6>
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
          <h6 class='indoc'>AGREEMENT</h6>
        </center>
        <p>NOW, THEREFORE, the Parties agree to the following:</p>
        <h7 class='indoc'>1. SALE OF GOODS.</h7>
        <p>Seller shall make available for sale and the Buyer shall
        purchase:
        </p>
        <div class='tab'>
          {
            (values.goodList).map((val, idx) => {
              let goodId = `good-${idx}`
              return (
                <div key={idx}>
                  <p>{`${idx + 1}. ` + (values.goodList)[idx]['name']}</p>
                </div>

              )
            })
          }
        </div>



        <h7 class='indoc'>2. DELIVERY/NON-DELIVERY. </h7>

        <p>Seller shall deliver Goods to Buyer at {values.deliver}. Goods shall be
        considered delivered when Buyer has accepted delivery in accordance with the above.
        Shipping method will be {values.method}. Buyer will be liable for shipping costs up to {values.costs}.
        <br /><br />
        Seller shall deliver Goods to Buyer on or before {formattedDeliverDate}.
        </p>

        <h7 class='indoc'>3. QUANTITY. </h7>


        <p>Seller shall deliver {values.number} Goods to Buyer at the agreed upon location at
        the agreed upon date.
        </p>
        <h7 class='indoc'>4. TITLE AND RISK OF LOSS. </h7>
        <p>Title shall transfer from Seller to the Buyer upon
        acceptance of delivery by the Buyer from the Seller. Risk of loss shall remain with the
        Seller until acceptance of the delivery of Goods by the Buyer.
        </p>

        <h7 class='indoc'>5. INSPECTION AND REJECTION OF NON-CONFORMING GOODS. </h7>
        <p>Upon delivery by
        Seller to Buyer the Buyer has the right to inspect the Goods upon delivery and before
        acceptance. Buyer shall identify any non-conformity in the Goods and may reject in
        whole or in part the Goods. Notwithstanding the foregoing, Seller has the right to cure,
        immediately, any non-conformity at their own expense. If Buyer fails to notify the
        Seller of any non-conforming Goods identifiable by reasonable inspection, they shall not

        be able to recover damages. If the Buyer discovers non-conforming Goods at a later date
        that were not identifiable by reasonable inspection the Buyer must notify the Seller of
        the non-conformity within three business days of discovery and may demand cure or
        bring suit for adequate remedies.Upon delivery by
        Seller to Buyer the Buyer has the right to inspect the Goods upon delivery and before
        acceptance. Buyer shall identify any non-conformity in the Goods and may reject in
        whole or in part the Goods. Notwithstanding the foregoing, Seller has the right to cure,
        immediately, any non-conformity at their own expense. If Buyer fails to notify the
        Seller of any non-conforming Goods identifiable by reasonable inspection, they shall not

        be able to recover damages. If the Buyer discovers non-conforming Goods at a later date
        that were not identifiable by reasonable inspection the Buyer must notify the Seller of
        the non-conformity within three business days of discovery and may demand cure or
        bring suit for adequate remedies.
        </p>

        <h7 class='indoc'>6. PRICE. </h7><p></p>

        <h7 class='indoc'>7. WARRANTIES. </h7>
        <p></p>

        <h7 class='indoc'>8. LIMITATION OF LIABILITY. </h7>
        <p>Seller will not be liable for any indirect, special,
        consequential, or punitive damages (including lost profits) arising out of or relating to
        this Agreement or the transaction is contemplates (whether for breach of contract, tort,
        negligence, or other form of action) and irrespective of whether the Seller has been
        advised of the possibility of any such damage. In no event will the Seller’s liability
        exceed the price of the Agreement.
        </p>

        <h7 class='indoc'>9. COMPLIANCE WITH LAW. </h7>
        <p>The Parties shall comply with all applicable federal and
        state laws and regulations and local ordinances in performance of the Agreement.
        </p>

        <h7 class='indoc'>10. INDEMNIFICATION. </h7>
        <p>Buyer agrees to defend, indemnify and hold Seller harmless
        from and against any and all claims or demands whatsoever, including without
        limitation, the costs, expenses, and reasonable attorneys’ fees incurred on account of
        loss, damages, or injury arising in any manner out of or incident to the performance of
        this Agreement, including without limitation all consequential damages, excepting those
        claims that arise out of the sole and gross negligence of Seller.
        </p>

        <h7 class='indoc'>11. INSURANCE. </h7>
        <p>Parties represent that they each have adequate insurance, as required
        by law, to carry out the sale of Goods covered by this Agreement.
        </p>


        <h7 class='indoc'>12. TERMINATION. </h7>
        <p>Termination in accordance with this term will be without prejudice to
        any accrued rights by the Parties and will not affect obligations which are expressed not
        to be affected by termination of this Agreement. Notwithstanding anything in this
        Agreement, the Seller may terminate the Agreement by written notice to the Buyer if:
        </p>
        <p class='tab'>
          a. Buyer commits a breach of the terms or conditions of the Agreement, including
          the schedule hereto.
        </p>
        <p class='tab'>
          b. If the Buyer becomes bankrupt or makes any arrangement with or for the benefit
          of its creditors or enters into a compulsory or voluntary liquidation or
          amalgamation, or has an administrator or manager appointed of the whole or
          substantially the whole of its undertakings or if any distress or execution will be
          threatened or if the Buyer is unable to pay its debts in accordance with the law
          relating to this Agreement.
        </p>

        <h7 class='indoc'>13. CONFIDENTIAL INFORMATION. </h7>
        <p>“Confidential Information” is information that is
        garnered in the course of executing this Agreement, including all non-public
        information or material disclosed or provided by the Seller to the Buyer, orally or in
        writing, that are proprietary to the Seller, whether or not produced or owned by the
        Seller that are learned over the course of the relationship between the Parties, directly
        or indirectly. Buyer agrees that they will not disclose such Confidential Information.
        Buyer agrees that they will not use the Goods to reverse engineer any proprietary
        information, including anything considered “trade secret”.
        </p>

        <h7 class='indoc'>14. MISCELLANEOUS</h7>
        <br />
        <h6 class='tab'>a. FORCE MAJEURE.
          <br /><br />
          <p class='tab'>It shall not be considered a breach of this Agreement
          and Seller shall not be liable for any failure or delay in the performance of this
          Agreement for the period of such failure or delay that is attributable to causes
          beyond the Seller’s reasonable control, such causes shall include but are not
          limited to, acts of God, war, supply shortages, strikes or labor disputes,
          embargoes or government orders, or other unforeseeable events.
          </p>
        </h6>
        <h6 class='tab'>b. INTEGRATION.
          <br /><br />
          <p class='tab'>This Agreement contains the entire understanding between
          the Company and {values.sellerName}. This Agreement supersedes any prior representations or
          understandings, written or oral.
            </p>
        </h6>
        <h6 class='tab'>c. GOVERNING LAW.
          <br /><br />
          <p class='tab'>  The validity, interpretation, construction and
          performance of this Agreement shall be governed by the laws of the State of {values.state} without
          regard to conflicts of laws principals.
                </p>
        </h6>
        <h6 class='tab'>d. ASSIGNMENT, SUCCESSORS AND ASSIGNS.
          <br /><br />
          <p class='tab'>The rights bestowed upon each
          Party in this Agreement are personal to each Party and shall not be effective
          upon any assignment or successors in interest. Any attempted assignment of
          this Agreement shall be null and void.
          </p>
        </h6>
        <h6 class='tab'>e. SEVERABILITY.
          <br /><br />
          <p class='tab'>If one or more provisions of this Agreement are deemed void
          or unenforceable such provision shall nevertheless be enforced to the fullest
          extent possible by law and the force and validity of the remainder of the
          Agreement shall still be in effect.
          </p>
        </h6>
        <h6 class='tab'> f. COUNTERPARTS.
          <br /><br />
          <p class='tab'>
            This Agreement may be executed in counterparts each
            of which shall be deemed an original and which together shall constitute one and
            the same agreement.
                 </p>
        </h6>
        <br />
        <p>NAME:   _____________________   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            _____________________</p>
        <p>ADDRESS:   __________________   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            _____________________</p>
        <p>PHONE NUMBER:   _____________   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             _____________________</p>
        <p>SIGNATURE:</p>
        <br />
        <br />
        <br />

      </div >

    );
  }


}