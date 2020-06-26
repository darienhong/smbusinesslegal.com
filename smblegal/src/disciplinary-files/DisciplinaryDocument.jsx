import React, { Component } from 'react';
import moment from 'moment';

import '../App.css';


export default class DisciplinaryDocument extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { values } = this.props;

    var dateString = values.date.toString();
    var formattedDate = moment(dateString).format("LL");

    var signDateString = values.dateSigned.toString();
    var formattedSignDate = moment(signDateString).format("LL");

    const restaurantCheck = values.restaurant === 'Yes'
    let restRequire = ''
    let restRequire2 = ''
    let safety = 'a. Safety Procedures'
    if (restaurantCheck) {
      restRequire = 'a. Cleanliness'
      restRequire2 = 'b. Food Handling'
      safety = 'c. Safety Procedures'
    }



    return (
      <div class='size'>
        <p >{formattedDate}</p>
        <br />
        <p >{values.employeeName}</p>
        <p >{values.address}</p>
        <br />
        <p >{values.employeeName},</p>
        <br />
        <p>This letter is to confirm that you were notified about {values.warning} on {formattedDate}.</p>
        <p>Pursuant to the offer letter and employment agreement you signed on {formattedSignDate} you were
        notified that adherence to Company directives, policies and procedures are a prerequisite
        to continued employment. Due to {values.warning}, this is a written warning indicating that you have
        violated and therefore not complied with those directives, policies or procedures. Due to
        this fact you are being issued an official warning and further violations of Company
        directives, policies and procedures may result in termination. Attached is the formal
        written warning.</p>
        <p>It is expected that you will immediately address the situation and consistently improve
        performance. Failure to do so may result in termination of your employment with the
        Company. </p>
        <p>Because of {values.warning} the following actions will be taken:</p>
        <div class='tab'>
          {
            (values.actionList).map((val, idx) => {
              let actionId = `action-${idx}`
              return (
                <div key={idx}>
                  <p>{`${idx + 1}. ` + (values.actionList)[idx]['name']}</p>
                </div>

              )
            })
          }
        </div>
        <p>Should you have any concerns going forward, please do not hesitate to get in touch with
        me. We continue to believe that you are a valuable member of the team and look forward
        to seeing more positive results in the future.</p>
        <br />
        <br />

        <p>Sincerely,</p>
        <p>{values.employerName}</p>
        <p>CC: Employee File</p>
        <p>__________________________</p>
        <br />
        <center>
          <h4 className="page-break">DISCIPLINARY WRITTEN WARNING</h4>
        </center>
        <br />
        <p>Employee Name: ______________</p>
        <p>Date: __________</p>
        <p>Title: _________________</p>
        <p>Date of Incident:  ________________</p>
        <p>Suspension: _____________  From: _____________  Through: ________________</p>
        <p>Discharge Effective Date: _________________</p>
        <p>Reason for Warning:</p>
        <p>1. Violation of work Procedures</p>
        <p class='tab'>{restRequire}</p>
        <p class='tab'>{restRequire2}</p>
        <p class='tab'>{safety}</p>
        <p>2. Insubordination</p>
        <p>3. Absenteeism, tardiness</p>
        <p>4. Working under the influence</p>
        <p>5. Dishonesty</p>
        <p>6. Guest/Client Interactions</p>
        <p>7. Unauthorized removal or taking of Company property</p>
        <p>8. Physical or verbal abuse</p>
        <p>9. Other (see below)</p>
        <br />
        <p>Explanation of warning</p>
        <p>_______________________________________________________________________</p>
        <p>_______________________________________________________________________</p>
        <p>_______________________________________________________________________</p>
        <p>_______________________________________________________________________</p>


      </div >

    );
  }


}