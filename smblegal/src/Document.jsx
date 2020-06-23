import React, { Component } from 'react';
import moment from 'moment';

import './App.css';


export default class Questions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;
    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");
    var startDateString = values.startDate.toString();
    var formattedStartDate = moment(startDateString).format("LL");
    const stateCheck = values.state == 'California'
    var stateRequire = 'No Food Handler Card Needed'
    if (stateCheck)
      stateRequire = 'California Food Handler Card. This offer of employment is contingent upon you successfully completing the courses for and obtaining a California Food Handler Card within thirty(30) days from the date of hire, if not already obtained prior to working with the Company.This offer may be revoked, and you will not be allowed to work if a California Food Handler Card is not obtained within thirty(30) days.'
    const creditCheck = values.credits == "True"
    var creditRequire = ''
    if (creditCheck)
      creditRequire = values.internName + ' will be receiving academic credit upon successful completion of this internship. The Company agrees to verify successful completion of this internship by ' + values.internName + ' in the event that ' + values.internName + '’s academic institution asks for such verification.'
    const expensesCheck = values.expenses == 'Yes'
    var expensesRequire = 'No Expenses Will Be Reimbursed'
    if (expensesCheck)
      expensesRequire = 'Expenses. The Company shall reimburse ' + values.internName + ' for reasonable expenses approved by the Company, in writing, and incurred by ' + values.internName + ' which is necessary for the performance of your duties under this letter.'
    const liablilityCheck = values.liability == 'Yes'
    var liabilityRequire = 'No Professional Liability'
    if (liablilityCheck)
      liabilityRequire = 'Professional Liability. The Company agrees that it will defend, hold harmless, and indemnify ' + values.internName + ' from any threatened or actual demands, claims, suits, actions or legal proceedings against ' + values.internName + ' caused by their official capacity with the Company, except where threatened or actual demands, claims, suits, actions or legal proceedings are the result of intentional or criminal acts or other acts not performance in good faith.'
    const competeCheck = values.compete == 'Yes'
    var competeRequire = 'No Non-Compete Clause'
    if (competeCheck)
      competeRequire = 'Non-Compete. ' + values.internName + ' agrees that as a condition of employment, ' + values.internName + ' will not engage in a directly competing enterprise for [X months or years] following the termination of the employment relationship between ' + values.internName + ' and the Company.'
    return (
      <div >
        <p ><span class='fill'>{formattedDate}</span></p>
        <p ><span class='fill'>{values.employeeName}</span></p>
        <p><span class='fill'>{values.address}</span></p>
        <p> Dear <span class='fill'>{values.internName}</span>,</p>
        <p>Welcome to the team!</p>
        <p>It is our pleasure to extend the following offer of internship to you on behalf of <span class='fill'>{values.companyName}</span> (the “Company”).
        As explained below, this offer of internship with the Company is as an at-will internship and it is conditioned upon
        the satisfactory completion of certain requirements.  Internship with the Company is conditioned upon the terms and
        conditions in this letter.  You also agree that you are relying on no prior representations or agreements, written or
        oral, other than those expressly contained in this letter.  The validity, interpretation, construction and performance of
        this offer letter shall be governed by the laws of the State of <span class='fill'>{values.state}</span>  without regard to conflicts of laws
        principals.</p>
        <p> <span class='word'>Title:</span>  <span class='fill'>{values.title}</span> </p>
        <p> <span class='word'>Duties:</span>  <span class='fill'>{values.duties} </span></p>
        <p> <span class='word'>Reporting Relationship:</span> <span class='fill'>{values.relationship}</span> </p>
        <p><span class='word'>Start Date:</span> <span class='fill'>{formattedStartDate}</span></p>
        <p><span class='word'>Base Wage:</span> <span class='fill'>{values.wage}</span>  </p>
        <p><span class='word'>Hours:</span> <span class='fill'>{values.hours}</span></p>
        <p><span class='word'>Status:</span> <span class='fill'>{values.status}</span> </p>
        <p><span class='word'>At-Will Employment:</span><span class='fill'>{values.atWill}</span> </p>
        <p><span class='word'>[California Notice of Required Pay and Sick Leave: [X]]</span>  </p>
        <p>Compensation or benefits may be adjusted based on performance or other relevant matters,
        including business conditions, at the Company’s sole discretion.  Legally mandated benefits are
        provided according to applicable law.</p>
        <br /><br />
        <div id='container'>
          {/* <ol class='info'>
            <li> */}
          <p>1. Internship Description. [JOB RESPONSIBILITIES]</p>
          {/* <ol class='details'>
                <li> */}
          <p class='tab'>i. <span class='word'>Educational Environment.</span>
            <p class='tab'>This internship is for the educational benefit of <span class='fill'>{values.internName}</span>. {creditRequire} <span class='fill'>{values.internName}</span> will be the primary beneficiary of this internship.</p></p>
          {/* </li>
                <li> */}
          <p class='tab'> ii. <span class='word'>No Expectation of Employment.</span>
            <p class='tab'>By signing this agreement <span class='fill'>{values.internName}</span> acknowledges and
                  agrees that this internship is for a fixed duration and comes with no promises or
                  expectations of employment beyond the internship.</p></p>
          {/* </li>
              </ol>
            </li> */}
          <br />
          {/* <li> */}
          <p>2. Directives, Policies and Procedures. Employment is conditioned upon continued adherence to the directives, policies and procedures of the Company.
          As an employee you are expected to comply with the directives of your Manager as well as the policies and procedures that the
          Company puts in place.  Policies and procedures can include, but are not limited to, the contents of an employee handbook or
              employee training manual.  These policies and procedures may be modified at any time.</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>3. Employment Eligibility Verification. This offer of employment is contingent upon you showing documentation showing your
          right to work in the United States within three (3) days of being hired.  This offer may be revoked, and you will not be
              allowed to work for the Company, if this documentation is not provided within three (3) days.</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>4. {stateRequire}</p>
          {/* </li> */}

          <br />
          {/* <li> */}
          <p>5. Background and Reference Check.  The Company has the right to, if they so choose, check the
              education and professional background of its prospective or actual employees.</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>6. {expensesRequire}</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>7. {liabilityRequire}</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>8. No Breach. <span class='fill'>{values.internName}</span> by signing this agreement, represents and warrants to Company that by
            accepting employment with the Company <span class='fill'>{values.internName}</span> will not breach their continuing obligations to a
            former employee and that they have not removed any confidential or proprietary information from
            their former employee and will not use such information at the Company.</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>9. At-Will Internship. All interns are “employees at will”.  This means that an intern may terminate
          internship at any time, for any reason.  The Company may also terminate the intern,
              with or without cause, for any reason.</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>10. Confidentiality, Non-Solicitation and Return of Property. As a condition of employment <span class='fill'>{values.internName}</span> must refrain from using or disclosing trade-secrets or confidential information of the Company or
             its clients.  This includes files and information of both the client and Company, marketing
             data, financial information, forms and samples and any other materials related to the Company or
             its clients. <br /><br />After the employment relationship between <span class='fill'>{values.internName}</span> and the Company has ended, <span class='fill'>{values.internName}</span> agrees that trade secrets will not be used to solicit any clients or employees of the Company.
             <br /><br />All Company trade secrets and confidential information will be returned upon the termination of the
             employment relationship.</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>11. {competeRequire}</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>12. Invention Assignment. All ideas, inventions, improvements, methods, processes,
          works of authorship and other forms of intellectual property, conceived of,
            reduced to practice or developed by <span class='fill'>{values.internName}</span> during the employment relationship will be
            the sole and exclusive property of the Company. Any and all intellectual property shall
            be considered “works made for hire”.</p>
          {/* </li> */}
          <br />
          {/* <li> */}
          <p>13. MISCELLANEOUS</p>
          {/* <ol class='details'>
                <li> */}
          <p class='tab'>i. <span class='word'>INTEGRATION.</span>  This offer letter contains the entire understanding between the Company
                  and  <span class='fill'>{values.internName}</span>.  This letter supersedes any prior representations or understandings, written or oral.
                {/* </li>
                <li> */}</p>
          <p class='tab'>ii. <span class='word'>GOVERNING LAW.</span> The validity, interpretation, construction and performance of this offer
                  letter shall be governed by the laws of the State of <span class='fill'>{values.state}</span> without regard to conflicts of laws principals.
                  </p>
          {/* </li>
                <li> */}
          <p class='tab'>iii. <span class='word'>ASSIGNMENT, SUCCESSORS AND ASSIGNS.</span> The rights bestowed upon <span class='fill'>{values.internName}</span> in this agreement are personal
                to <span class='fill'>{values.internName}</span> and shall not be effective upon any assignment or successors in interest.  Any
                attempted assignment of this agreement shall be null and void.
                </p>
          {/* </li>
                <li> */}
          <p class='tab'>iv. <span class='word'>SEVERABILITY.</span> If one or more provisions of this agreement are deemed void or
                  unenforceable such provision shall nevertheless be enforced to the fullest extent
                  possible by law and the force and validity of the remainder of the agreement shall still be in effect.
                  </p>
          {/* </li>
                <li> */}
          <p class='tab'> v. <span class='word'>COUNTERPARTS.</span> This agreement may be executed in counterparts each of
                  which shall be deemed an original and which together shall constitute
                  one and the same agreement.
                  </p>
          {/* 
                </li>
              </ol>
            </li>

          </ol> */}
          <p>
            Please indicate, by signing below and returning the signed copy to <span class='fill'>{values.employeeName}</span>, that you accept this offer of employment by <span class='fill'>{values.employeeName}</span>.
          </p>
          <p>
            We look forward to seeing you at <span class='fill'>{values.companyName}</span>. Please call <span class='fill'>{values.employeeName}</span> if you have any questions.
          </p>
          <br />
          <br />
          <p>
            <span class='fill'>{values.employeeName}</span>
          </p>
          <br />
          <br />
          <p>
            <span class='fill'>{values.internName}</span>
          </p>
          <p>
            <span class='fill'>{values.companyName}</span>
          </p>
          <p>
            <span class='fill'>{values.title}</span>
          </p>
          <br />
          <br />
          <p>
            I ______________ accept the job described above under the terms of this letter.
          </p>
          <br />
          <p>
            OFFER ACCEPTED BY: ____________________________
          </p>
          <p>
            DATE: __________________
          </p>



        </div>
      </div >

    );
  }


}