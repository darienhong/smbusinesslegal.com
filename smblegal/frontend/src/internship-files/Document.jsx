import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class Document extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;
    const expenses = values.expenses.toString()

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");
    var startDateString = values.startDate.toString();
    var formattedStartDate = moment(startDateString).format("LL");
    const stateCheck = values.state == 'California'
    var stateRequire = 'No Food Handler Card.'
    if (stateCheck)
      stateRequire = 'California Food Handler Card. This offer of employment is contingent upon you successfully completing the courses for and obtaining a California Food Handler Card within thirty(30) days from the date of hire, if not already obtained prior to working with the Company.This offer may be revoked, and you will not be allowed to work if a California Food Handler Card is not obtained within thirty(30) days.'
    const creditCheck = values.credits == "True"
    var creditRequire = ''
    if (creditCheck)
      creditRequire = 'Intern will be receiving academic credit upon successful completion of this internship. The Company agrees to verify successful completion of this internship by Intern in the event that Intern’s academic institution asks for such verification.'


    const paidCheck = values.paid === 'Yes'
    let wageRequire = ''
    if (paidCheck) {
      wageRequire = 'Base Wage: ' + values.wage
    }

    const competeCheck = values.compete == 'Yes'
    var competeRequire = 'No Non-Compete Clause.'
    if (competeCheck)
      competeRequire = 'Non-Compete. ' + values.internName + ' agrees that as a condition of employment, ' + values.internName + ' will not engage in a directly competing enterprise for [X months or years] following the termination of the employment relationship between ' + values.internName + ' and the Company.'

    const sickCheck = values.state == 'California'
    var sickRequire = ''
    if (sickCheck && paidCheck)
      sickRequire = 'California Notice of Required Pay and Sick Leave: ' + values.sick

    const verify = values.verification == 'Yes'
    var verifyRequire = ''
    var verifyRequire2 = ''
    var background = '3. Background and Reference Check.'
    const expensesCheck = values.expenses == 'Yes'
    var expensesRequire = ''
    var expensesRequire2 = ''
    const liablilityCheck = values.liability == 'Yes'
    var liabilityRequire = ''
    var liabilityRequire2 = ''
    var breach = '4. No Breach.'
    var atwill = '5. At-Will Internship.'
    var conf = '6. Confidentiality, Non-Solicitation and Return of Property.'
    var inv = '7. Invention Assignment.'
    var misc = '8. Miscellaneous'
    if (verify) {
      verifyRequire = '3. Employment Eligibility Verification.'
      verifyRequire2 = 'This offer of internship is contingent upon you showing documentation showing your right to work in the United States within three (3) days of being hired.  This offer may be revoked, and you will not be allowed to work for the Company, if this documentation is not provided within three (3) days.'
      background = '4. Background and Reference Check.'
      breach = '5. No Breach'
      var atwill = '6. At-Will Internship.'
      var conf = '7. Confidentiality, Non-Solicitation and Return of Property.'
      var inv = '8. Invention Assignment.'
      var misc = '9. Miscellaneous'
      if (expensesCheck) {
        expensesRequire = '5. Expenses'
        expensesRequire2 = 'The Company shall reimburse Intern for reasonable expenses approved by the Company, in writing, and incurred by Intern which is necessary for the performance of your duties under this letter. Such expenses shall include:'
        breach = '6. No Breach'
        var atwill = '7. At-Will Internship.'
        var conf = '8. Confidentiality, Non-Solicitation and Return of Property.'
        var inv = '9. Invention Assignment.'
        var misc = '10. Miscellaneous'
        if (liablilityCheck) {
          liabilityRequire = '6. Professional Liability'
          liabilityRequire2 = 'The Company agrees that it will defend, hold harmless, and indemnify Intern from any threatened or actual demands, claims, suits, actions or legal proceedings against Intern caused by their official capacity with the Company, except where threatened or actual demands, claims, suits, actions or legal proceedings are the result of intentional or criminal acts or other acts not performed in good faith.'
          breach = '7. No Breach'
          var atwill = '8. At-Will Internship.'
          var conf = '9. Confidentiality, Non-Solicitation and Return of Property.'
          var inv = '10. Invention Assignment.'
          var misc = '11. Miscellaneous'
        }
      }
    }
    else if (expensesCheck) {
      expensesRequire = '4. Expenses'
      expensesRequire2 = 'The Company shall reimburse Intern for reasonable expenses approved by the Company, in writing, and incurred by Intern which is necessary for the performance of your duties under this letter. Such expenses shall include:'
      breach = '5. No Breach'
      var atwill = '6. At-Will Internship.'
      var conf = '7. Confidentiality, Non-Solicitation and Return of Property.'
      var inv = '8. Invention Assignment.'
      var misc = '9. Miscellaneous'
      if (liablilityCheck) {
        liabilityRequire = '5. Professional Liability'
        liabilityRequire2 = 'The Company agrees that it will defend, hold harmless, and indemnify Intern from any threatened or actual demands, claims, suits, actions or legal proceedings against Intern caused by their official capacity with the Company, except where threatened or actual demands, claims, suits, actions or legal proceedings are the result of intentional or criminal acts or other acts not performed in good faith.'
        breach = '6. No Breach'
        var atwill = '7. At-Will Internship.'
        var conf = '8. Confidentiality, Non-Solicitation and Return of Property.'
        var inv = '9. Invention Assignment.'
        var misc = '10. Miscellaneous'
      }
    }
    else if (liablilityCheck) {
      liabilityRequire = '4. Professional Liability'
      liabilityRequire2 = 'The Company agrees that it will defend, hold harmless, and indemnify Intern from any threatened or actual demands, claims, suits, actions or legal proceedings against Intern caused by their official capacity with the Company, except where threatened or actual demands, claims, suits, actions or legal proceedings are the result of intentional or criminal acts or other acts not performed in good faith.'
      breach = '5. No Breach'
      var atwill = '6. At-Will Internship.'
      var conf = '7. Confidentiality, Non-Solicitation and Return of Property.'
      var inv = '8. Invention Assignment.'
      var misc = '9. Miscellaneous'
    }


    return (
      <div class='size'>
        <p ><span class='fill'>{formattedDate}</span></p>
        <p ><span class='fill'>{values.employeeName}</span></p>
        <p><span class='fill'>{values.address}</span></p>
        <br />
        <p> Dear <span class='fill'>{values.internName}</span>,</p>
        <p>Welcome to the team!</p>
        <p>It is our pleasure to extend the following offer of internship to you on behalf of <span class='fill'>{values.companyName}</span> (the “Company”) and <span class='fill'>{values.internName}</span> (“Intern”).
        As explained below, this offer of internship with the Company is as an at-will internship and is conditioned upon
        the satisfactory completion of certain requirements.  Internship with the Company is conditioned upon
        the terms and conditions in this letter.  You also agree that you are relying on no prior
        representations or agreements, written or oral, other than those expressly contained in this letter.
         The validity, interpretation, construction and performance of this offer letter shall be governed by
         the laws of the State of <span class='fill'>{values.state}</span>  without regard to conflicts of laws principles.
        </p>
        <p> Title:  <span class='fill'>{values.title}</span> </p>
        <p> Duties:  <span class='fill'>{values.duties} </span></p>
        <p> Reporting Relationship: <span class='fill'>{values.relationship}</span> </p>
        <p>Start Date: <span class='fill'>{formattedStartDate}</span></p>
        <p>{wageRequire}</p>
        <p>Hours: <span class='fill'>{values.hours}</span> <span class='fill'>{values.hourType}</span></p>
        <p>Status: <span class='fill'>{values.status}</span> </p>
        <p>At-Will Employment: Yes </p>
        <p>{sickRequire} </p>
        <br /><br />
        <p>Compensation or benefits may be adjusted based on performance or other relevant matters,
        including business conditions, at the Company’s sole discretion.  Legally mandated
        benefits are provided according to applicable law.
        </p>
        <br /><br />
        <div id='container'>

          <h6 class='indoc'>1. Internship Description.</h6>
          <p>{values.responsibilities}</p>
          <p class='tab'>i. Educational Environment.
          <br /><br />
            <p class='tab'>This internship is for the educational benefit of Intern. {creditRequire} Intern will be the primary beneficiary of this internship.</p></p >
          < p class='tab'> ii. No Expectation of Employment.
          <br /><br />
            < p class='tab' > By signing this agreement, Intern acknowledges and
            agrees that this internship is for a fixed duration and comes with no promises or
    expectations of employment beyond the internship.</p ></p >
          <br />

          <h6 class='indoc'>2. Directives, Policies and Procedures. </h6>
          <p>
            Internship is conditioned upon continued adherence to the directives, policies
            and procedures of the Company.  As an intern you are expected to comply
            with the directives of your Manager as well as the policies and procedures
            that the Company puts in place.  Policies and procedures can include, but are
            not limited to, the contents of an employee or intern handbook or employee or
            intern training manual.  These policies and procedures may be modified at any time.
          </p>

          <h6 class='indoc'>{verifyRequire} </h6>
          <p>{verifyRequire2}</p>

          <h6 class='indoc'>{background} </h6>
          <p>The Company has the right to, if they so choose, check the
              education and professional background of its prospective or actual interns.</p>

          <h6 class='indoc'>{expensesRequire}</h6>
          <p>{expensesRequire2}</p>

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
          <h6 class='indoc'>{liabilityRequire}</h6>
          <p>{liabilityRequire2}</p>

          <h6 class='indoc'>{breach} </h6>
          <p>Intern by signing this agreement, represents and warrants to Company that
          by accepting internship with the Company Intern will not breach their
          continuing obligations to a former employer and that they have not
          removed any confidential or proprietary information from their former
          employer and will not use such information at the Company.
            </p>

          <h6 class='indoc'>{atwill}</h6>
          <p>All interns are “interns at will”. This means that an intern
          may terminate internship at any time, for any reason. The Company
          may also terminate the intern, with or without cause, for any reason.
              </p>

          <h6 class='indoc'>{conf} </h6>
          <p>As a condition of internship Intern must refrain from using or 
            disclosing trade-secrets or confidential information of the Company or its clients.  
            This includes files and information of both the client and Company, marketing 
            data, financial information, forms and samples and any other materials related to the Company or its clients.
             
             <br /><br />After the internship relationship between Intern and the Company 
             has ended, Intern agrees that trade secrets will not be used to solicit any clients or employees of the Company. 
             
             <br /><br />All Company trade secrets and confidential information will be returned upon the termination of the
             employment relationship.</p>

          <h6 class='indoc'>{inv} </h6>
          <p>All ideas, inventions, improvements, methods, processes, 
            works of authorship and other forms of intellectual property, conceived of, 
            reduced to practice or developed by Intern during or related to the internship 
            relationship will be the sole and exclusive property of the Company.
          </p>

          <h6 class='indoc'>{misc}</h6>
          <p class='tab'>a. INTEGRATION.
          <br /><br />
            <p class='tab'>This offer letter contains the entire understanding between the Company and Intern.  
            This letter supersedes any prior representations or understandings, written or oral.
                  </p>
          </p>
          <p class='tab'>b. GOVERNING LAW.
          <br /><br />
            <p class='tab'>The validity, interpretation, construction and performance of this offer
                  letter shall be governed by the laws of the State of <span class='fill'>{values.state}</span> 
                  without regard to conflicts of laws principles.</p>
          </p>
          <p class='tab'>c. ASSIGNMENT, SUCCESSORS AND ASSIGNS.
          <br /><br />
            <p class='tab'>  The rights bestowed upon Intern in this agreement are personal to Intern and 
            shall not be effective upon any assignment or successors in interest.  Any attempted 
            assignment of this agreement shall be null and void.
                </p>
          </p>
          <p class='tab'>d. SEVERABILITY.
          <br /><br />
            <p class='tab'>If one or more provisions of this agreement are deemed void or 
            unenforceable such provision shall nevertheless be enforced to the fullest extent 
            possible by law and the force and validity of the remainder of the agreement shall still be in effect.
          </p>
          </p>
          <p class='tab'> e. COUNTERPARTS.
          <br /><br />
            <p class='tab'>
              This agreement may be executed in counterparts, each of
              which shall be deemed an original and which together shall constitute
              one and the same agreement.
                 </p>
          </p>

          <br /><br />
          <p>
            Please indicate, by signing below and returning the signed copy to <span class='fill'>{values.employeeName}</span>, that 
            you accept this offer of employment by <span class='fill'>{values.employeeName}</span>.
          </p>
          <p>
            We look forward to seeing you at <span class='fill'>{values.companyName}</span>. Please 
            call <span class='fill'>{values.employeeName}</span> if you have any questions.
          </p>
          <br />
          <br />
          <p><span class='fill'>{values.employeeName}</span></p>

          <br />
          <br />
          <p>
            <span class='fill'>{values.employeeName}</span>
          </p>
          <p>
            <span class='fill'>{values.companyName}</span>
          </p>
          <p>
            <span class='fill'>{values.employerTitle}</span>
          </p>
          <p ><span class='fill'>{values.email}</span></p>
          <p ><span class='fill'>{values.phone}</span></p>
          <br />
          <br />
          <br />
          <br />
          <br /><br />
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



        </div >
      </div >

    );
  }


}