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


    // const cobraCheck = values.cobra === 'Yes'
    // var cobraRequire = ''
    // if (cobraCheck)
    //   cobraRequire = 'Additionally, you will receive a second letter containing information on the Consolidated Omnibus Budget Reconciliation Act (COBRA) continuation of group coverage of your Company provided health benefits.'


    let large = 'b. Large Gatherings Prohibited.'
    let large2 = 'Large gatherings of ' + values.prohibited + ' or more people will be ' +
      'prohibited on ' + values.companyName + "'s property. Additionally, large gatherings of more than " + values.discouraged + ' or ' +
      'more people are discouraged to take place outside of work that are undertaken ' +
      'pursuant to ' + values.companyName + "s business."

    let schedCheck = values.schedChange === 'Yes'
    let presenceCheck = values.presence === 'Yes'
    let pres = ''
    let pres2 = ''

    let temp = values.tempCheck === 'Yes'
    let addToTitle = ''
    let addToBlock = ''
    let addToVisitors = ''
    if (temp) {
      addToTitle = ' and Temperature Checks'
      addToBlock = 'In the event that you are cleared for physical presence in the office you must submit to a temperature check each time that you enter the premises.'
      addToVisitors = ' submit to temperature checks and'
    }

    let meeting = 'c. Meeting Restrictions.'
    let meeting2 = 'Meetings are encouraged to be done via electronic ' +
      'means to adhere to social distancing guidelines. In no event may a physical ' +
      'meeting take place where there are ' + values.prohibited + ' or more people present.'

    let six = 'd. Six-Foot Distance.'
    let six2 = 'In the event that employees are on ' + values.companyName + "'s premises all " +
      'employees must adhere to social distancing guidelines. This means that all ' +
      'employees must maintain a six-foot distance from all others.'

    let symptoms = 'e. Symptoms.'
    let symptoms2 = 'In the event that employees are feeling any symptoms of ' +
      'Covid-19, as listed on the CDC website, they are prohibited from interacting – ' +
      'physically – with other employees and are prohibited from ' + values.companyName + "’s premises. Upon " +
      'the cessation of symptoms, the employee must quarantine for two weeks before ' +
      'being able to return to ' + values.companyName + "’s premises."

    let greetings = 'f. No Physical Greetings.'
    let greetings2 = 'Employees are prohibited from engaging in physical greetings of any kind.'

    let spaces = 'g. Common Spaces.'
    let spaces2 = 'Common spaces are being retrofitted to adhere to the ' +
      'Policy, this includes making it possible to adhere to the six-feet rule. In some ' +
      'events this may mean that, with respect to common spaces, there may be a limit ' +
      'on the number of people allowed in a space at any one time. This may mean a ' +
      'one person at a time rule. Common spaces require adherence to the six-foot rule.'

    let breakCheck = values.breaks === 'Yes'
    let locs = ''
    let locs2 = ''

    let visitor = 'h. Visitors Limitations.'
    let visitor2 = 'Except for essential business purposes, all visitors are ' +
      'prohibited from entering the premises. Essential business visitors are required to' +
      addToVisitors + ' wear masks while on the premises.'

    let suppliesCheck = values.supplies === 'Yes'
    let supplies = ''
    let supplies2 = ''

    let notices = 'i. Consult Posted Notices.'
    let notices2 = 'Employees are required to consult posted ' +
      'notices that are posted on the premises. All posted notices are incorporated by ' +
      'reference hereto and shall be complied with as if they are part of this Policy.'

    let flexible = 'j. Be Flexible.'
    let flexible2 = 'These are uncertain times and information is changing rapidly. ' +
      values.companyName + ' asks all employees to remain flexible in their working habits and ' +
      'arrangements. This Policy may change frequently, and employees are asked to ' +
      'keep abreast of these changes.'

    if (schedCheck) {
      large = 'c. Large Gatherings Prohibited.'
      meeting = 'd. Meeting Restrictions.'
      six = 'e. Six-Foot Distance.'
      symptoms = 'f. Symptoms.'
      greetings = 'g. No Physical Greetings.'
      spaces = 'h. Common Spaces.'
      visitor = 'i. Visitors Limitations.'
      notices = 'j. Consult Posted Notices.'
      flexible = 'k. Be Flexible.'
      if (presenceCheck) {
        pres = 'd. Physical Presence at the Office' + addToTitle + '.'
        pres2 = 'Physical presence at the office for any period of time must be cleared with management. ' + addToBlock +
          ' Refusal to do so will result in denial of entry from the premises.'
        meeting = 'e. Meeting Restrictions.'
        six = 'f. Six-Foot Distance.'
        symptoms = 'g. Symptoms.'
        greetings = 'h. No Physical Greetings.'
        spaces = 'i. Common Spaces.'
        visitor = 'j. Visitors Limitations.'
        notices = 'k. Consult Posted Notices.'
        flexible = 'l. Be Flexible.'
        if (breakCheck) {
          locs = 'j. Break Locations.'
          locs2 = values.locations
          visitor = 'k. Visitors Limitations.'
          notices = 'l. Consult Posted Notices.'
          flexible = 'm. Be Flexible.'
          if (suppliesCheck) {
            supplies = 'l. Shared Supplies and Equipment.'
            supplies2 = values.newPolicy
            notices = 'm. Consult Posted Notices.'
            flexible = 'n. Be Flexible.'
          }
        }
      }
    }
    else if (presenceCheck) {
      pres = 'c. Physical Presence at the Office' + addToTitle + '.'
      pres2 = 'Physical presence at the office for any period of time must be cleared with management. ' + addToBlock +
        ' Refusal to do so will result in denial of entry from the premises.'
      meeting = 'd. Meeting Restrictions.'
      six = 'e. Six-Foot Distance.'
      symptoms = 'f. Symptoms.'
      greetings = 'g. No Physical Greetings.'
      spaces = 'h. Common Spaces.'
      visitor = 'i. Visitors Limitations.'
      notices = 'j. Consult Posted Notices.'
      flexible = 'k. Be Flexible.'
      if (breakCheck) {
        locs = 'i. Break Locations.'
        locs2 = values.locations
        visitor = 'j. Visitors Limitations.'
        notices = 'k. Consult Posted Notices.'
        flexible = 'l. Be Flexible.'
        if (suppliesCheck) {
          supplies = 'k. Shared Supplies and Equipment.'
          supplies2 = values.newPolicy
          notices = 'l. Consult Posted Notices.'
          flexible = 'm. Be Flexible.'
        }
      }
    }
    else if (breakCheck) {
      locs = 'h. Break Locations.'
      locs2 = values.locations
      visitor = 'i. Visitors Limitations.'
      notices = 'j. Consult Posted Notices.'
      flexible = 'k. Be Flexible.'
      if (suppliesCheck) {
        supplies = 'j. Shared Supplies and Equipment.'
        supplies2 = values.newPolicy
        notices = 'k. Consult Posted Notices.'
        flexible = 'l. Be Flexible.'
      }
    }
    else if (suppliesCheck) {
      supplies = 'i. Shared Supplies and Equipment.'
      supplies2 = values.newPolicy
      notices = 'j. Consult Posted Notices.'
      flexible = 'k. Be Flexible.'
    }



    let provCheck = values.provisions === 'Yes'
    let last = '5. Acknowledgement of Receipt and Review.'
    let last2 = 'By signing this Policy, you acknowledge that you have read and reviewed the terms of the Policy and agree to be bound by them.'

    let last3 = 'Acknowledgement of Receipt and Review.'
    let last4 = 'By signing this Policy, you acknowledge that you have read and reviewed the terms of the Policy and agree to be bound by them.'
    if (provCheck) {
      last = ''
      last2 = ''

    }


    return (
      <div class='size' >
        <center>
          <h6 class='indoc'>{values.companyName} Work From Home Policy</h6>
        </center>
        <br /><br />
        <h7 class='indoc'>Policy Purpose</h7>
        <br /><br />

        <p >We designed our work from home policy (this “Agreement”, “Policy”) to make sure that our
        team members stay safe during the Covid-19 pandemic. At {values.companyName}, we understand the
        importance of social distancing, not only for an individual’s health, but also for the health of
        our greater community. Due to this fact we have implemented our Policy. The following
        comprises our Policy. Please read the Policy and understand that we expect and require
        your strict adherence to the Policy.
        </p>
        <br />
        <h7 class='indoc'>1. Social Distancing Measures.</h7>
        <br />
        <p class='tab'>a. Work from Home. {values.wfh}</p>
        {values.schedChange === 'Yes' && (
          <div class='tab'>
            <p>
              b. Schedule Changes. Due to the results of Covid-19 and the effect of this Policy, {values.companyName}'s employee schedules will change.
              The following schedule changes will occur
            </p>
            {
              (values.changeList).map((val, idx) => {
                let changeId = `change-${idx}`
                return (
                  <div key={idx}>
                    <p class='tab'>{`${idx + 1}. ` + (values.changeList)[idx]['name']}</p>
                  </div>

                )
              })
            }
          </div>
        )}
        <p class='tab'>{large} {large2}</p>
        <p class='tab'>{pres} {pres2}</p>
        <p class='tab'>{meeting} {meeting2}</p>
        <p class='tab'>{six} {six2}</p>
        <p class='tab'>{symptoms} {symptoms2}</p>
        <p class='tab'>{greetings} {greetings2}</p>
        <p class='tab'>{spaces} {spaces2}</p>
        <p class='tab'>{locs} {locs2}</p>
        <p class='tab'>{visitor} {visitor2}</p>
        <p class='tab'>{supplies} {supplies2}</p>
        <p class='tab'>{notices} {notices2}</p>
        <p class='tab'>{flexible} {flexible2}</p>





        <h7 class='indoc'>2. Policy Modification.</h7>
        <p>
          This Policy may be changed, with or without notice, by the
          policy administrator (defined below). In the event that the Policy is changed, prompt
          notice shall be given to all employees. Such changes will be incorporated herein and
          any objections to the Policy change must be made in writing, if there is no timely
          objection made then you have assented to the Policy modification.
        </p>
        <h7 class='indoc'>3. Enforcement and Non-Retaliation.</h7>
        <p>
          This Policy will be enforced. Failure to adhere to
          this Policy can result in formal warning and/or termination from your at-will
          employment with {values.companyName}. This Policy has been created to ensure the physical health and
          well-being of all employees at {values.companyName}. In the event that an employee sees a violation of this
          Policy, whether from other employees or management, they are encouraged to report it
          to their supervisor who will notify the policy administrator. No employee who notifies
          the policy administrator of a violation of the Policy will be fired or encounter any type
          of retaliation.
        </p>
        <h7 class='indoc'>4. Policy Administration.</h7>
        <p>
          The Policy will be administered by the policy administrator
          (“Policy Administrator”). The Policy Administrator will be {values.administrator}.
        </p>
        {values.provisions === 'Yes' && (
          <div>
            {
              (values.provisionList).map((val, idx) => {
                let provisionId = `provision-${idx}`
                return (
                  <div key={idx}>
                    <h7 class='indoc'>{`${idx + 5}. `}</h7>
                    <p>{(values.provisionList)[idx]['name']}</p>
                    {values.provisionList[idx + 1] ? '' :
                      <div>
                        <h7 class='indoc'>{`${idx + 5 + 1}. ` + last3}</h7>
                        <p>{last4}</p>
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>
        )
        }
        <p class='indoc'>{last}</p>
        <p>{last2}</p>




        {/* <h5 className="page-break">{releaseRequire}</h5>
        <p>{releaseRequire2}</p>

        <h5>{disparagementRequire}</h5>
        <p>{disparagementRequire2}</p>

        <h5>{publicityRequire}</h5>
        <p>{publicityRequire2}</p> */}



      </div >

    );
  }


}