import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class ConsultingDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var endDateString = values.endDate.toString();
    var formattedEndDate = moment(endDateString).format("LL");

    const expensesCheck = values.expenses == 'Yes'
    var expensesRequire = ''
    if (expensesCheck) {
      expensesRequire = 'Notwithstanding the foregoing, the Company has agreed to reimburse the Consultant for the following expenses: '
    }

    // const techConfidentialCheck = values.techConfidential === ''
    // let techRequire = ''
    // if (techConfidentialCheck) {
    //   techRequire = 'Technical data, trade secrets, know-how, research, product or service ideas or plans, software codes and designs, developments, inventions, laboratory notebooks, processes, formulas, techniques, materials, engineering designs and drawings, configurations, lists of or information or information relating to employees and consultants of the company, any intellectual property developed by the Consultant (as described above).'
    // }
    // else {
    //   techRequire += values.techConfidential
    // }

    // let techRequire = 'Technical data, trade secrets, know-how, research, product or service ideas or plans, software codes and designs, developments, inventions, laboratory notebooks, processes, formulas, techniques, materials, engineering designs and drawings, configurations, lists of or information or information relating to employees and consultants of the company, any intellectual property developed by the Consultant (as described above).'


    // const nontechConfidentialCheck = values.nontechConfidential === ''
    // let nontechRequire = ''
    // if (nontechConfidentialCheck) {
    //   nontechRequire = 'Non-technical information relating to products, pricing, price lists, margins, market-share data, merchandising plans and strategies, finances, financial accounting data and information, suppliers, customers, customer lists, purchasing data, sales and marketing plans, current or future business plans.'
    // }
    // else {
    //   nontechRequire += values.nontechConfidential
    // }


    const insuranceCheck = values.insurance === 'Yes'
    var insuranceRequire = ''
    var insuranceRequire2 = ''

    const otherCheck = values.other === 'Yes'
    var otherRequire = ''
    var otherRequire2 = ''

    var termination = '11. TERMINATION.'
    var solicitation = '12. NON-SOLICITITATION AND RETURN OF PROPERTY.'
    var assignment = '13. ASSIGNMENT, SUCCESSORS AND ASSIGNS.'
    var remedies = '14. REMEDIES.'
    var misc = '15. MISCELLANEOUS'
    if (insuranceCheck) {
      insuranceRequire = '11. INSURANCE.'
      insuranceRequire2 = 'Consultant has any necessary insurance needed to comply with any laws or requirements of undertaking a consulting role.'
      termination = '12. TERMINATION.'
      solicitation = '13. NON-SOLICITITATION AND RETURN OF PROPERTY.'
      assignment = '14. ASSIGNMENT, SUCCESSORS AND ASSIGNS.'
      remedies = '15. REMEDIES.'
      misc = '16. MISCELLANEOUS'
      if (otherCheck) {
        otherRequire = '13. OTHER BUSINESS ACTIVITIES.'
        otherRequire2 = 'Other than those agreed to prior to the Agreement by Consultant and Company, the Consultant agrees that they will perform no other consulting services for third parties.'
        solicitation = '14. NON-SOLICITITATION AND RETURN OF PROPERTY.'
        assignment = '15. ASSIGNMENT, SUCCESSORS AND ASSIGNS.'
        remedies = '16. REMEDIES.'
        misc = '17. MISCELLANEOUS'
      }
    }
    else if (otherCheck) {
      otherRequire = '12. OTHER BUSINESS ACTIVITIES.'
      otherRequire2 = 'Other than those agreed to prior to the Agreement by Consultant and Company, the Consultant agrees that they will perform no other consulting services for third parties.'
      solicitation = '13. NON-SOLICITITATION AND RETURN OF PROPERTY.'
      assignment = '14. ASSIGNMENT, SUCCESSORS AND ASSIGNS.'
      remedies = '15. REMEDIES.'
      misc = '16. Miscellaneous'
    }

    return (
      <div class='size'>
        <center>
          <h5 class='indoc'>CONSULTING AGREEMENT</h5>
        </center>
        <br />

        <p >This consulting agreement (“Agreement”) is between <span class='fill'>{values.employeeName}</span>, a <span class='fill'>{values.companyName}</span>, registration number <span class='fill'>{values.registration}</span>
        (“Company”) and <span class='fill'>{values.consultantName}</span> (“Consultant”) (collectively, the “Parties” or individually each a
        “Party”).</p>

        <div id='container'>

          <h5 class='indoc'>1. SCOPE.</h5>
          <p >The services rendered by the Consultant shall be carried out in accordance with
          the description in Exhibit A attached hereto.</p >

          <h5 class='indoc'>2. TERM. </h5>
          <p>The Agreement shall last until <span class='fill'>{formattedEndDate}</span>.</p>

          <h5 class='indoc'>3. COMPENSATION. </h5>
          <p>The Company shall pay Consultant <span class='fill'>{values.compensation}</span> as total compensation for
          completion of the project as described in Exhibit A. Payment shall be made in the
          following manner <span class='fill'>{values.compSched}</span>.</p>

          <h5 class='indoc'>4. FEES AND EXPENSES. </h5>
          <p>Consultant shall not be reimbursed for expenses or fees incurred
          in the course of performing the obligations under this Agreement. {expensesRequire}</p>
          {values.expenses === 'Yes' && (
            <div class='tab'>
              {
                (values.expenseList).map((val, idx) => {
                  let expenseId = `expense-${idx}`
                  return (
                    <div key={idx}>
                      <p>{`${idx + 1}. ` + (values.expenseList)[idx]['name']}</p>
                    </div>

                  )
                })
              }
            </div>
          )}
          <h5 class='indoc'>5. RELATIONSHIP OF THE PARTIES AND INDEPENDENT CONTRACTOR.</h5>
          <p>The
          Consultant is an independent contractor to the Company. The relationship is that of an
          independent contractor and not that of an employee. No part of the compensation shall
          be subject to withholding for payment of required payroll taxes and fees.</p>
          <p>In no event shall anything in this Agreement or otherwise be construed to create any
          type of relationship between Contractor and Company other than that of an
          independent contractor.</p>
          <p class='tab'> a. METHOD.
            <br />
            <br />
            <p class='tab'>The Consultant shall be solely responsible for the methods, details
            and means of successfully carrying out the Agreement as described in Exhibit A.
            The Consultant, at their own expense, may engage other third parties in an effort
            to complete the Agreement. Any others so engaged by the Consultant shall not
            be employees of the Company and the Company shall not be held liable by others
            for any reason whatsoever.
            </p>
          </p>

          <p class='tab'> b. NO AGENCY.
            <br />
            <br />
            <p class='tab'>Consultant acknowledges and recognizes that they have no ability
            or agency to bind the Company to any contract without the express prior written
            authorization of the Company.
            </p>
          </p>

          <p class='tab'> c. INDEMNIFICATION.
            <br />
            <br />
            <p class='tab'>Consultant agrees to indemnify, defend and hold Company
            harmless from any liability with respect to taxes, or labor or employment
            requirements that arise in the course of completing this Agreement. Consultant
            agrees to indemnify, defend and hold Company harmless from any liability with
            respect to any third parties engaged pursuant to this Agreement or any binding
            contracts entered into by the Consultant in breach of this Agreement.</p>
          </p>

          <h5 class='indoc'>6. INTELLECTUAL PROPERTY RIGHTS.</h5>
          <p>Consultant irrevocably assigns to the Company
          all right, title and interest worldwide in and to the intellectual property (as described
          below) and all rights therein. Consultant agrees that all ideas, inventions,
          improvements, methods, processes, works of authorship and other forms of intellectual
          property that are conceived of, reduced to practice or developed by the Consultant
          during this Agreement or pursuant to this Agreement, whether alone or in conjunction,
          including, but not limited to design, data, code, ideas, inventions, know-how, materials,
          marks, memorandum, methods, procedures, interfaces or other forms of technology or
          intellectual property, will be the sole and exclusive property of the Company.</p>
          <p>Any patentable inventions or processes shall be disclosed promptly by the Consultant
          to the Company. The Consultant agrees that other than the disclosure to the Company
          the Consultant will keep such information confidential.</p>
          <p>Any intellectual property that are works of authorship eligible to be “works made for
          hire” under U.S. Copyright Act must have the Company as “author” and the work must
          be considered to be works made for hire or inventions made for hire to the extent
          permitted by applicable law.</p>
          <p>The Consultant has secured or agrees to secure all necessary rights to intellectual
          property created from any third parties the Consultant contracts with to complete the
          deliverables as described in Exhibit A.</p>
          <p>Consultant agrees to assist the Company in securing any intellectual property rights as
          described above.</p>

          <h5 class='indoc'>7. CONFIDENTIALITY. </h5>
          <p>Consultant understands and agrees that during the Agreement, the
          Company intends to provide the Consultant with confidential information without
          which the Consultant could not do the job as described in Exhibit A. Consultant
          understands that confidential information includes, but is not limited to the following
          (“Confidential Information”):</p>
          <p class='tab'>i. {values.techConfidential}
          </p>
          <p class='tab'>ii. {values.nontechConfidential}</p>
          <p>Consultant will not disclose and will maintain the confidence of the Confidential
          information in both oral and written form. Confidential Information will only be
          disclosed to employees to the extent necessary, or with the written consent of the
          Company to the Consultant. Consultant represents that they will handle Confidential
          Information with the same reasonable care that they represent they treat their own
          confidential information with.</p>
          <p>Consultant understands and agrees at all times to not use the Confidential Information
          except for the benefit of the Company. Confidential Information shall not be copied
          except for the extent necessary to complete the job or in the ordinary course.</p>
          <p>This Agreement supplements any rights the Company has in law or equity with respect
          to the protection of trade secrets, confidential or proprietary information.</p>

          <h5 class='indoc'>8. CONSULTANT REPRESENTATIONS AND WARRANTIES</h5>
          <p class='tab'>i. RIGHT TO ENTER AGREEMENT.
          <br /><br />
            <p class='tab'>Consultant represents and warrants
          that they have all applicable authority to enter into this Agreement.</p></p>

          <p class='tab'>ii. SKILL, EXPERIENCE AND QUALIFICATIONS.
          <br /><br />
            <p class='tab'>Consultant represents
            and warrants that they have all the represented and needed skill,
            experience and qualifications necessary to complete the specifications
            described in Exhibit A. The Consultant represents and warrants that to
            the extent they do not possess these abilities they will, at their own
          expense, find a qualified third party to do so.</p></p>

          <p class='tab'>iii. COMPLIANCE WITH APPLICABLE LAWS.
          <br /><br />
            <p class='tab'>Consultant represents and
            warrants that they are in compliance with and by accepting this
            Agreement, will continue to be, in compliance with any applicable laws or
          regulations.</p></p>

          <p class='tab'>iv. TRANSFER OF GOOD AND VALID TITLE TO WORK PRODUCT.
          <br /><br />
            <p class='tab'>Consultant represents and warrants that any good and valid title to work
            product created in the course of this Agreement will be transferred into
            the good and valid title of the Company. In the event that this does not
            happen the Consultant will transfer good and valid title as soon as
          discovered and pursue all legal remedies on behalf of the Company.</p></p>

          <p class='tab'>v. ORIGINAL WORK.
          <br /><br />
            <p class='tab'>Consultant represents and warrants that any works
            developed under this Agreement will be original work and will not
            infringe on other’s rights. In the event the work produced by the
            Consultant infringes on other’s rights the Consultant will indemnify and
          hold harmless the Company.</p></p>

          <h5 class='indoc'>9. INDEMNIFICATION. </h5>
          <p>Consultant agrees to indemnify and hold the Company harmless
          as well as directors, officers and employees against all claims (threatened or actual),
          demands, taxes, losses, damages, liabilities, costs and expenses, including attorneys’
          fees and other legal expenses that come from or in connection with – directly or
          indirectly –negligent reckless or wrongful acts by the Consultant or their third parties, a
          breach of the covenants in this agreement, a breach of the representations and
          warranties in this agreement, any failure of services under applicable laws and
          regulations, or any violation of a third party’s rights coming from the use of deliverables
          from the Consultant.</p>

          <h5 class='indoc'>10. LIMITATION OF LIABILITY. </h5>
          <p>EXCEPT AS PROHIBITED BY LAW, THE COMPANY SHALL
          NOT BE HELD LIABLE TO CONSULTANT FOR ANY OTHER INDIRECT, INCIDENTAL,
          SPECIAL OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS OR LOSS
          OF BUSINESS, HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, WHETHER
          BASED IN CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR OTHER
          THEORY OF LIABILITY, REGARDLESS OF WHETHER THE COMPANY WAS ADVISED OF
          THE POSSIBILITY AND NOTWITHSTANDING THE FAILURE OF ESSENTIAL PURPOSE
          OF ANY LIMITED REMEDY. IN NO EVENT SHALL THE COMPANY’S LIABILITY ARISING

          OUT OF OR IN CONNECTION WITH THIS CONTRACT EXCEED THE COMPENSATION
          PAID TO THE CONSULTANT UNDER THIS AGREEMENT.
          </p>

          <h5 class='indoc'>{insuranceRequire}</h5>
          <p>{insuranceRequire2}</p>

          <h5 class='indoc'>{termination}</h5>
          <p>Termination of the consulting relationship may be done by Consultant
          with 14 (fourteen) days written notice. Company may terminate the consulting
          relationship at any time.</p>
          <p>Clauses 6, 7, 9 and 10 shall survive the termination of this Agreement.</p>

          <h5 class='indoc'>{otherRequire}</h5>
          <p>{otherRequire2}</p>

          <h5 class='indoc'>{solicitation}</h5>
          <p>During and after the consulting
          relationship between Consultant and the Company, Consultant agrees that trade secrets
          or Confidential Information will not be used to solicit any clients or employees of the
          Company for [X] amount of time.</p>
          <p>All Company trade secrets, and Confidential Information will be returned upon the
          termination of the consulting relationship.</p>

          <h5 class='indoc'>{assignment}</h5>
          <p>The rights bestowed upon Consultant in
          this Agreement are personal to Consultant and shall not be effective upon any
          assignment or successors in interest. Any attempted assignment of this Agreement
          shall be null and void. However, to the extent that rights in intellectual property are
          assigned by the Consultant to successors or assigns the Consultant agrees to help the
          Company enforce any rights they may have to that intellectual property.</p>

          <h5 class='indoc'>{remedies}</h5>
          <p>Violation of the Agreement may cause harm, and Consultant agrees and
          understands that the Company may seek extraordinary relief in court.</p>


          <h5 class='indoc'>{misc}</h5>
          <p class='tab'>i. GOVERNING LAW.
          <br /><br />
            <p class='tab'> The validity, interpretation, construction and
            performance of this Agreement shall be governed by the laws of the State
            of <span class='fill'>{values.state}</span> without regard to conflicts of laws principals.</p>
          </p>
          <p class='tab'>ii. ENTIRE AGREEMENT.
          <br /><br />
            <p class='tab'> This Agreement contains the entire
            understanding between the Company and Consultant. This letter
            supersedes any prior representations or understandings, written or oral.</p>
          </p>
          <p class='tab'>iii. SEVERABILITY.
          <br /><br />
            <p class='tab'>  If one or more provisions of this Agreement are
            deemed void or unenforceable such provision shall nevertheless be
            enforced to the fullest extent possible by law and the force and validity of
            the remainder of the Agreement shall still be in effect.
                </p>
          </p>
          <p class='tab'>iv. COUNTERPARTS.
          <br /><br />
            <p class='tab'>This agreement may be executed in counterparts
            each of which shall be deemed an original and which together shall
            constitute one and the same agreement.
          </p>
          </p>
          <p class='tab'> v. SURVIVAL.
          <br /><br />
            <p class='tab'>
              Clauses 6, 7, 9 and 10 shall survive the termination of this
              Agreement.
                 </p>
          </p>

          <br /><br />
          <br />
          <br />

          <br />
          <br />

          <p >Signature Blocks</p>
          <br />
          <br />
          <center>
            <p>Exhibit A</p>
          </center>
          <p>1. Scope: {values.scope} </p>
          <p>2. Work hours:  {values.hours} </p>
          <p>3. Term: {values.term} </p>
          <p>4. Supervision: {values.supervision} </p>

        </div >
      </div >

    );
  }


}