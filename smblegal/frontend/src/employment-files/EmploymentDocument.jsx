import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class EmploymentDocument extends Component {
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

    const sickCheck = values.state == 'California'
    var sickRequire = ''
    var benefitRequire = ''
    if (sickCheck) {
      sickRequire = 'California Notice of Required Pay and Sick Leave: ' + values.sick
      benefitRequire = 'Benefits: ' + values.benefits

    }

    const tipCheck = values.restaurant == 'Yes'
    var tipRequire = ''
    if (tipCheck)
      tipRequire = 'Tipping Procedure: ' + values.tipping

    const commCheck = values.commission == 'Yes'
    var commRequire = ''
    if (commCheck)
      commRequire = 'Commission Procedure: ' + values.comProcedure

    const handlerCheck = values.state == 'California'
    var handlerRequire = ''
    var handlerRequire2 = ''

    var background = '4. Background and Reference Check.'

    const expensesCheck = values.expenses === 'Yes'
    var expensesRequire = ''
    var expensesRequire2 = ''

    const liablilityCheck = values.liability === 'Yes'
    var liabilityRequire = ''
    var liabilityRequire2 = ''

    const competeCheck = values.compete === 'Yes'
    var competeRequire = ''
    var competeRequire2 = ''

    var breach = '5. No Breach.'
    var atwill = '6. At-Will Employment.'
    var conf = '7. Confidentiality, Non-Solicitation and Return of Property.'
    var inv = '8. Invention Assignment.'
    var misc = '9. Miscellaneous'

    if (handlerCheck) {
      handlerRequire = '4. California Food Handler Card.'
      handlerRequire2 = 'This offer of employment is contingent upon you successfully completing the courses for and obtaining a California Food Handler Card within thirty (30) days from the date of hire, if not already obtained prior to working with the Company. This offer may be revoked, and you will not be allowed to work if a California Food Handler Card is not obtained within thirty (30) days.'
      background = '5. Background and Reference Check.'
      breach = '6. No Breach'
      var atwill = '7. At-Will Employment.'
      var conf = '8. Confidentiality, Non-Solicitation and Return of Property.'
      var inv = '9. Invention Assignment.'
      var misc = '10. Miscellaneous'

      if (expensesCheck) {
        expensesRequire = '6. Expenses'
        expensesRequire2 = 'The Company shall reimburse Employee for reasonable expenses approved by the Company, in writing, and incurred by Employee which is necessary for the performance of your duties under this letter. Such expenses shall include:'
        breach = '7. No Breach'
        var atwill = '8. At-Will Employment.'
        var conf = '9. Confidentiality, Non-Solicitation and Return of Property.'
        var inv = '10. Invention Assignment.'
        var misc = '11. Miscellaneous'

        if (liablilityCheck) {
          liabilityRequire = '7. Professional Liability'
          liabilityRequire2 = 'The Company agrees that it will defend, hold harmless, and indemnify Employee from any threatened or actual demands, claims, suits, actions or legal proceedings against Employee caused by their official capacity with the Company, except where threatened or actual demands, claims, suits, actions or legal proceedings are the result of intentional or criminal acts or other acts not performed in good faith.'
          breach = '8. No Breach'
          var atwill = '9. At-Will Employment.'
          var conf = '10. Confidentiality, Non-Solicitation and Return of Property.'
          var inv = '11. Invention Assignment.'
          var misc = '12. Miscellaneous'

          if (competeCheck) {
            competeRequire = '11. Non-Compete'
            competeRequire2 = 'Employee agrees that as a condition of employment Employee will not engage in a directly competing enterprise for ' + values.competeTime + ' following the termination of the employment relationship between Employee and the Company.'
            var inv = '12. Invention Assignment.'
            var misc = '13. Miscellaneous'
          }
        }
      }
    }

    else if (expensesCheck) {
      expensesRequire = '5. Expenses'
      expensesRequire2 = 'The Company shall reimburse Employee for reasonable expenses approved by the Company, in writing, and incurred by Employee which is necessary for the performance of your duties under this letter. Such expenses shall include:'
      breach = '6. No Breach'
      var atwill = '7. At-Will Employment.'
      var conf = '8. Confidentiality, Non-Solicitation and Return of Property.'
      var inv = '9. Invention Assignment.'
      var misc = '10. Miscellaneous'
      if (liablilityCheck) {
        liabilityRequire = '6. Professional Liability'
        liabilityRequire2 = 'The Company agrees that it will defend, hold harmless, and indemnify Employee from any threatened or actual demands, claims, suits, actions or legal proceedings against Employee caused by their official capacity with the Company, except where threatened or actual demands, claims, suits, actions or legal proceedings are the result of intentional or criminal acts or other acts not performed in good faith.'
        breach = '7. No Breach'
        var atwill = '8. At-Will Employment.'
        var conf = '9. Confidentiality, Non-Solicitation and Return of Property.'
        var inv = '10. Invention Assignment.'
        var misc = '11. Miscellaneous'
        if (competeCheck) {
          competeRequire = '10. Non-Compete'
          competeRequire2 = 'Employee agrees that as a condition of employment Employee will not engage in a directly competing enterprise for ' + values.competeTime + ' following the termination of the employment relationship between Employee and the Company.'
          var inv = '11. Invention Assignment.'
          var misc = '12. Miscellaneous'
        }
      }
    }

    else if (liablilityCheck) {
      liabilityRequire = '5. Professional Liability'
      liabilityRequire2 = 'The Company agrees that it will defend, hold harmless, and indemnify Employee from any threatened or actual demands, claims, suits, actions or legal proceedings against Employee caused by their official capacity with the Company, except where threatened or actual demands, claims, suits, actions or legal proceedings are the result of intentional or criminal acts or other acts not performed in good faith.'
      breach = '6. No Breach'
      var atwill = '7. At-Will Employment.'
      var conf = '8. Confidentiality, Non-Solicitation and Return of Property.'
      var inv = '9. Invention Assignment.'
      var misc = '10. Miscellaneous'
      if (competeCheck) {
        competeRequire = '9. Non-Compete'
        competeRequire2 = 'Employee agrees that as a condition of employment Employee will not engage in a directly competing enterprise for ' + values.competeTime + ' following the termination of the employment relationship between Employee and the Company.'
        var inv = '10. Invention Assignment.'
        var misc = '11. Miscellaneous'
      }
    }
    else if (competeCheck) {
      console.log(values.competeTime);
      competeRequire = '8. Non-Compete'
      competeRequire2 = 'Employee agrees that as a condition of employment Employee will not engage in a directly competing enterprise for ' + values.competeTime + ' following the termination of the employment relationship between Employee and the Company.'
      var inv = '9. Invention Assignment.'
      var misc = '10. Miscellaneous'
    }


    return (
      <div class='size'>
        <p ><span class='fill'>{formattedDate}</span></p>
        <p ><span class='fill'>{values.employeeName}</span></p>
        <p><span class='fill'>{values.address}</span></p>
        <p> Dear <span class='fill'>{values.internName}</span>,</p>
        <p>Welcome to the team!</p>
        <p>It is our pleasure to extend the following offer of employment to you on behalf of <span class='fill'>{values.companyName}</span> (the “Company”) to <span class='fill'>{values.internName}</span> (“Employee”).
        As explained below, this offer of employment with the Company is as an at-will employee and it is conditioned upon
        the satisfactory completion of certain requirements.  Employment with the Company is conditioned upon the terms and
        conditions of this letter.  You also agree that you are relying on no prior representations or agreements, written or
        oral, other than those expressly contained in this letter.  The validity, interpretation, construction and performance of
        this offer letter shall be governed by the laws of the State of <span class='fill'>{values.state}</span>  without regard to conflicts of laws
        principals.</p>
        <p> Title:  <span class='fill'>{values.title}</span> </p>
        <p> Duties:  <span class='fill'>{values.duties} </span></p>
        <p> Reporting Relationship: <span class='fill'>{values.relationship}</span> </p>
        <p>Start Date: <span class='fill'>{formattedStartDate}</span></p>
        <p>Base Wage: <span class='fill'>{values.wage}</span>  </p>
        <p>{tipRequire}</p>
        <p>{commRequire}</p>
        <p>Hours: <span class='fill'>{values.hours}</span> <span class='fill'>{values.hourType}</span></p>
        <p>Status: <span class='fill'>{values.status}</span> </p>
        <p>At-Will Employment: Yes </p>
        <p>{benefitRequire}</p>
        <p>{sickRequire} </p>
        <br /><br />
        <p>Compensation or benefits may be adjusted based on performance or other relevant matters,
        including business conditions, at the Company’s sole discretion.  Legally mandated benefits are
        provided according to applicable law.</p>
        <br /><br />
        <div id='container'>

          <h5 class='indoc'>1. Employee Job Description. </h5>
          <p>{values.responsibilities}</p>

          <br />

          <h5 class='indoc'>2. Directives, Policies and Procedures. </h5>
          <p>Employment is conditioned upon continued adherence to the directives, policies and procedures of the Company.
          As an employee you are expected to comply with the directives of your Manager as well as the policies and procedures that the
          Company puts in place.  Policies and procedures can include, but are not limited to, the contents of an employee handbook or
              employee training manual.  These policies and procedures may be modified at any time.</p>

          {/* <h5 class='indoc'>{verifyRequire} </h5>
          <p>{verifyRequire2}</p> */}
          <h5 class='indoc'>3. Employment Eligibility Verification. </h5>
          <p>This offer of employment is contingent upon you
          showing documentation showing your right to work in the United States within three
          (3) days of being hired. This offer may be revoked, and you will not be allowed to work
          for the Company, if this documentation is not provided within three (3) days.</p>

          <h5 class='indoc'>{handlerRequire}</h5>
          <p>{handlerRequire2}</p>

          <h5 class='indoc'>{background} </h5>
          <p>The Company has the right to, if they so choose, check the
              education and professional background of its prospective or actual employees.</p>

          <h5 class='indoc'>{expensesRequire}</h5>
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
          <h5 class='indoc'>{liabilityRequire}</h5>
          <p>{liabilityRequire2}</p>

          <h5 class='indoc'>{breach} </h5>
          <p>By signing this agreement, Employee represents and warrants to the
          Company that by accepting employment with the Company Employee will not breach
          their continuing obligations to a former employer and that they have not removed any
          confidential or proprietary information from their former employer and will not use
          such information at the Company.</p>

          <h5 class='indoc'>{atwill}</h5>
          <p>All employees are “employees at will”. This means that an
          employee may terminate employment at any time, for any reason. The Company may
          also terminate the employee, with or without cause, for any reason.</p>

          <h5 class='indoc'>{conf} </h5>
          <p>As a condition of
          employment Employee must refrain from using or disclosing trade-secrets or
          confidential information of the Company or its clients. This includes files and
          information of both the client and Company, marketing data, financial information,
          forms and samples and any other materials related to the Company or its clients.
          <br /><br />After the employment relationship between Employee and the Company has ended,
          Employee agrees that trade secrets will not be used to solicit any clients or employees
          of the Company.
          <br /><br />All Company trade secrets, and confidential information will be returned upon the
          termination of the employment relationship..</p>

          <h5 class='indoc'>{competeRequire}</h5>
          <p>{competeRequire2}</p>


          <h5 class='indoc'>{inv} </h5>
          <p>All ideas, inventions, improvements, methods, processes,
          works of authorship and other forms of intellectual property, conceived of, reduced to
          practice or developed by Employee during or related to the employment relationship
          will be the sole and exclusive property of the Company. Employee hereby assigns all
          right, title and interest worldwide in such intellectual property and all corresponding
          rights to the Company.
          </p>

          <h5 class='indoc'>{misc}</h5>
          <p class='tab'>a. INTEGRATION.
          <br /><br />
            <p class='tab'>This offer letter contains the entire understanding between the
            Company and Employee. This letter supersedes any prior representations or
            understandings, written or oral.</p>
          </p>
          <p class='tab'>b. GOVERNING LAW.
          <br /><br />
            <p class='tab'>The validity, interpretation, construction and performance of this offer
            letter shall be governed by the laws of the State of <span class='fill'>{values.state}</span> without regard to conflicts of laws principals.</p>
          </p>
          <p class='tab'>c. ASSIGNMENT, SUCCESSORS AND ASSIGNS.
          <br /><br />
            <p class='tab'>  The rights bestowed upon
            Employee in this agreement are personal to Employee and shall not be effective
            upon any assignment or successors in interest. Any attempted assignment of
            this agreement shall be null and void.
                </p>
          </p>
          <p class='tab'>d. SEVERABILITY.
          <br /><br />
            <p class='tab'>If one or more provisions of this agreement are deemed void or
            unenforceable such provision shall nevertheless be enforced to the fullest extent
            possible by law and the force and validity of the remainder of the agreement
            shall still be in effect.
          </p>
          </p>
          <p class='tab'> e. COUNTERPARTS.
          <br /><br />
            <p class='tab'>
              This agreement may be executed in counterparts each of
              which shall be deemed an original and which together shall constitute one and
              the same agreement.
                 </p>
          </p>

          <br /><br />
          <p>
            Please indicate, by signing below and returning the signed copy to <span class='fill'>{values.employeeName}</span>, that you accept this offer of employment by <span class='fill'>{values.employeeName}</span>.
          </p>
          <p>
            We look forward to seeing you at <span class='fill'>{values.companyName}</span>. Please call <span class='fill'>{values.employeeName}</span> if you have any questions.
          </p>
          <br />
          <br />

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