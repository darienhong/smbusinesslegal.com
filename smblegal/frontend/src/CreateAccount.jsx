import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ModalTest from './components/modal.jsx';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ExpansionPanelActions } from '@material-ui/core';

//for payment (phil)
//npm install react-stripe-checkout
import StripeCheckout from "react-stripe-checkout"
import React1, {useState} from 'react';



const plans = [
  {
    value: 'Freemium',
    label: 'Freemium',
  },
  {
    value: 'Premium',
    label: 'Premium',
  },
  {
    value: 'Formation Documents',
    label: 'Formation Documents',
  },
  {
    value: 'Existing Plan',
    label: 'Existing Plan',
  }
]

const booleans = [
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  }
]

const companies = [
  {
    value: 'Corporation',
    label: 'Corporation',
  },
  {
    value: 'LLC',
    label: 'LLC',
  },
  {
    value: 'Parternship',
    label: 'Partnership',
  },
];

const states = [
  {
    value: 'Alabama',
    label: 'AL'
  },
  {
    value: 'Alaska',
    label: 'AK',
  },
  {
    value: 'Arizona',
    label: 'AZ',
  },
  {
    value: 'Arkansas',
    label: 'AR',
  },
  {
    value: 'California',
    label: 'CA',
  },
  {
    value: 'Colorado',
    label: 'CO',
  },
  {
    value: 'Connecticut',
    label: 'CT',
  },
  {
    value: 'Delaware',
    label: 'DE',
  },
  {
    value: 'Florida',
    label: 'FL',
  },
  {
    value: 'Georgia',
    label: 'GA',
  },
  {
    value: 'Hawaii',
    label: 'HI',
  },
  {
    value: 'Idaho',
    label: 'ID',
  },
  {
    value: 'Illinois',
    label: 'IL',
  },
  {
    value: 'Indiana',
    label: 'IN',
  },
  {
    value: 'Iowa',
    label: 'IA',
  },
  {
    value: 'Kansas',
    label: 'KS',
  },
  {
    value: 'Kentucky',
    label: 'KY',
  },
  {
    value: 'Louisiana',
    label: 'LA',
  },
  {
    value: 'Maine',
    label: 'ME',
  },
  {
    value: 'Maryland',
    label: 'MD',
  },
  {
    value: 'Massachusetts',
    label: 'MA',
  },
  {
    value: 'Michigan',
    label: 'MI',
  },
  {
    value: 'Minnesota',
    label: 'MN',
  },
  {
    value: 'Mississippi',
    label: 'MS',
  },
  {
    value: 'Missouri',
    label: 'MO',
  },
  {
    value: 'Montana',
    label: 'MT',
  },
  {
    value: 'Nebraska',
    label: 'NE',
  },
  {
    value: 'Nevada',
    label: 'NV',
  },
  {
    value: 'New Hampshire',
    label: 'NH',
  },
  {
    value: 'New Jersey',
    label: 'NJ',
  },
  {
    value: 'New Mexico',
    label: 'NM',
  },
  {
    value: 'New York',
    label: 'NY',
  },
  {
    value: 'North Carolina',
    label: 'NC',
  },
  {
    value: 'North Dakota',
    label: 'ND',
  },
  {
    value: 'Ohio',
    label: 'OH',
  },
  {
    value: 'Oklahoma',
    label: 'OK',
  },
  {
    value: 'Oregon',
    label: 'OR',
  },
  {
    value: 'Pennsylvania',
    label: 'PA',
  },
  {
    value: 'Rhode Island',
    label: 'RI',
  },
  {
    value: 'South Carolina',
    label: 'SC',
  },
  {
    value: 'South Dakota',
    label: 'SD',
  },
  {
    value: 'Tennessee',
    label: 'TN',
  },
  {
    value: 'Texas',
    label: 'TX',
  },
  {
    value: 'Utah',
    label: 'UT',
  },
  {
    value: 'Vermont',
    label: 'VT',
  },
  {
    value: 'Virginia',
    label: 'VA',
  },
  {
    value: 'Washington',
    label: 'WA',
  },
  {
    value: 'West Virginia',
    label: 'WV',
  },
  {
    value: 'Wisconsin',
    label: 'WI',
  },
  {
    value: 'Wyoming',
    label: 'WY',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function CreateAccount() {

  //Payments below
  const [premium_subscription, setPremSub] = useState({
  name: "Premium Subscription",
  price: 10,
  productBy: "SMBLegal"
  });

  const makePayment = token => {
    const body = {
      token,
      premium_subscription
    };
    const headers = {
      "Content-Type": "application/json"
    };

  return fetch('http://localhost:8282/payment',{
    method: "POST",
    headers,
    body: JSON.stringify(body)
  })
  .then(response => {
    console.log("RESPONSE ", response)
    const {status} = response;
    console.log("STATUS", status)
  })
  .catch(error => console.log(error));
  };
  //Payments above

  const classes = useStyles();
  const [company, setCompany] = React.useState();
  const [USstate, setState] = React.useState();
  const [plan, setPlan] = React.useState();
  const [show, setShow] = React.useState(false);
  const [agree, setAgree] = React.useState(false);

  const [state, setStates] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    zipcode: "",
    companyName: "",
    companyId: 0
  })

  React.useEffect(() => { 
    localStorage.setItem('email', state.email); }, [state.email]);
  



  const showModal = e => {
    setShow(true);
  }

  const hideModal = e => {
    setShow(false);
    setAgree(true);
  }


  const handleChange = e => {
    const { name, value } = e.target
    setStates(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleChangePlan = (event) => {
    setPlan(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log('went in to the button press!');

    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      plan: plan,
      companyName: state.companyName,
      zipCode: state.zipcode,
      company: company,
      USstate: USstate,
      id: state.companyId
    }
    fetch('/createAccount', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' }
    })

      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    document.location = "/Dashboard"


  }

  const handleClickPremium = (event) => {
    event.preventDefault();
    console.log('went in to the button press!');

    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      plan: plan,
      companyName: state.companyName,
      zipCode: state.zipcode,
      company: company,
      USstate: USstate,
      id: state.companyId

    }
    fetch('/createAccount', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' }
    })

      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    document.location = "/DashboardPremium"

  }

  const handleClickParternship = (event) => {
    event.preventDefault();
    console.log('went in to the button press!');

    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      plan: plan,
      companyName: state.companyName,
      zipCode: state.zipcode,
      company: company,
      USstate: USstate,
      id: state.companyId

    }
    fetch('/createAccount', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' }
    })

      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    document.location = "/InitializePartnership"

  }

  const handleClickLLC = (event) => {
    event.preventDefault();
    console.log('went in to the button press!');

    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      plan: plan,
      companyName: state.companyName,
      zipCode: state.zipcode,
      company: company,
      USstate: USstate,
      id: state.companyId

    }
    fetch('/createAccount', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' }
    })

      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    document.location = "/InitializeLLC"
  }

  const handleClickCorporation = (event) => {
    event.preventDefault();
    console.log('went in to the button press!');

    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      plan: plan,
      companyName: state.companyName,
      zipCode: state.zipcode,
      company: company,
      USstate: USstate,
      id: state.companyId

    }
    fetch('/createAccount', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' }
    })

      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    document.location = "/InitializeCorporation"

  }

  const handleChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  return (
    <div class="full-page">
      <div class="create-acc-page">
        <Navbar />
        <br></br>
        <br></br>


        <div>

          <Modal show={show} onHide={hideModal} dialogClassName="modal-custom" scrollabl={true}>
            <ModalBody style={{ maxHeight: 'calc(80vh - 180px)', overflowY: 'auto', fontSize: "14px" }} >
              <br></br>
              <br></br>
              <center> <h1 style={{ fontSize: 30, fontWeight: 800 }}> Please Accept our Terms and Conditions </h1></center>
              <br></br>

              <h4 style={{ fontSize: "18px" }}> 1. INTRODUCTION </h4>
              <p> Our terms of service and use as set forth below (the “Terms”) govern all use of the web pages of Eatery Legal Corporation (“we”, “us”, “Eatery Legal”, “SMB Legal”, “SMB”)
              located as https://www.eaterylegal.com and https://www.smbusinesslegal.com .  Our privacy policy
              (the “Privacy Policy”) also governs your use of SMB Legal and explains how we collect, use, safeguard and disclose
information that results from your use of our website, which is incorporated here by reference.</p>

              <p> IF YOU DO NOT AGREE WITH OR CANNOT COMPLY WITH THE TERMS THEN YOU MAY NOT USE SMB LEGAL.</p>
              <p> The customer (“Customer”, “You”, “Your”) agrees to be bound by these Terms and all applicable
 laws and regulations.  It is your responsibility to review these Terms periodically.</p>

              <p> YOU AGREE THAT BY USING THIS SITE YOU ARE AT LEAST 18 YEARS OF AGE AND ARE LEGALLY ABLE TO ENTER INTO A CONTRACT.</p>

              <p> These Terms require the use of arbitration on an individual basis to resolve disputes.</p>

              < br />
              <h4 style={{ fontSize: "18px" }}> 2. SMB LEGAL IS NOT A LAW FIRM AND DOES NOT PROVIDE LEGAL SERVICES </h4>

              <p style={{ fontWeight: "bold" }}> SMB Legal is NOT a law firm or attorney and may not perform services performed by an attorney, and the forms or
              templates are not a substitute for the services or advice of an
              attorney.  No attorney-client relationship or privilege exists or has been created with SMB Legal and the
Customer understands and agrees that they are representing themselves in their legal matter. </p>

              <p> Any information contained on the site is covered by these Terms and should be considered self-help.  Any legal information is provided
              for private use and does NOT constitute legal advice.
              No information submitted on SMB Legal is reviewed for legal accuracy or
sufficiency, provide opinions about your selection of forms, or apply the law to the facts of your situation. </p>

              <p> None of the information provided by SMB Legal is a substitute for legal advice or a qualified attorney who is licensed to practice.
              We are not a law firm and there is NO attorney client relationship or privilege between the Customer and SMB Legal.
              You the Customer have read and agree that:
        </p>

              <p> i. SMB LEGAL IS NOT A LAW FIRM AND MAY NOT PERFORM SERVICES PERFORMED BY AN ATTORNEY.
Information that is housed on the site is for self-help and informational purposes only.</p>

              <p> ii. INSTRUCTIONS ON THE PLATFORM ARE NOT LEGAL ADVICE OR LEGAL SERVICES.  The platform includes Q&A forms and there may be suggestions or
instructions on completing these forms and any suggestions or instructions are not legal advice or legal services</p>

              <p>  iii.   SMB LEGAL DOES NOT REVIEW YOUR ANSWERS FOR LEGAL SUFFICIENCY.</p>
              <p> iv. SMB LEGAL DOES NOT GUARANTEE ANY DOCUMENTS LISTED ON THE PLATFORM.  SMB Legal does not guarantee that any legal form provided is suitable
              for a particular purpose, or that any legal form provided is accurate, reliable, complete or timely.
The documents are for informational purposes only and should not be relied upon as legal advice.</p>
              <p> v. NO ATTORNEY CLIENT RELATIONSHIP IS CREATED BETWEEN YOU AND SMB LEGAL WHEN YOU USE THE SITE.</p>
              <p> vi. NO RESULTS OR OUTCOMES ARE GUARANTEED BY CUSTOMER USE OF THE SITE.</p>
              <p> vii. SMB LEGAL DOES NOT REGULATE YOUR ACTIONS ON THE SITE.  The Customer agrees that they are solely responsible for the
              sufficiency of their actions on the site, including the unauthorized practice of law,
communications PRC and confidentiality PRC. The Company is not liable for any violations of these laws.</p>
              <p> viii. YOU UNDERSTAND AND AGREE THAT SMB LEGAL IS NOT A LAW FIRM OR AN ATTORNEY, WE MAY NOT PERFORM SERVICES PERFORMED BY AN
ATTORNEY OR LAWYERS AND WE ARE NOT A SUBSTITUTE FOR THE ADVICE OR SERVICES OF AN ATTORNEY OR LAWYER.</p>
              <p> ix. YOU UNDERSTAND AND AGREE THAT NO ATTORNEY-CLIENT RELATIONSHIP OR PRIVILEGE HAS BEEN OR WILL BE CREATED BETWEEN THE CUSTOMER AND SMB LEGAL.</p>

              <br />

              <h4 style={{ fontSize: "18px" }}> 3. DESCRIPTION OF SMB LEGAL </h4>

              <p> SMB Legal is an online legal portal that provides Customers with access to legal document templates and automated software to help Customers prepare
legal documents.  The website includes general information on commonly encountered legal issues. </p>
              <p> SMB Legal works to keep its legal templates accurate, current and up to date. However, we cannot guarantee that all of the information is current and up to date.
              Please maintain awareness that the law is different in each jurisdiction and therefore is also subject to different interpretation by courts. The legal information
    contained on the site is not legal advice and nor is it guaranteed to be complete or up to date.</p>

              <p> The law is personal and no general information or legal tool kit like SMB Legal is fit for any circumstance or can step in for the advice
              of a lawyer.  Therefore, if you need specific advice for your specific
problem, or your specific problem is too complex you should consult an attorney.</p>

              <p>SMB Legal may introduce Customers to attorneys through various methods, but at no circumstance is the performance of such a service the establishment
              of an attorney-client relationship between the Customer and SMB Legal and it should never
be considered a substitute for a professional legal service or a solicitation to provide legal advice.</p>

              <br />

              <h4 style={{ fontSize: "18px" }}> 4. AMENDMENT TO TERMS </h4>
              <p> SMB Legal may amend the Terms from time to time.  Continued use of SMB Legal means that you accept and agree to any amendment of the Terms.
</p>

              <br />
              <h4 style={{ fontSize: "18px" }}> 5. ACCESSING SMB Legal </h4>
              <p> Access to SMB Legal is contingent upon the creation of an account (“Account”).    The creation of an Account is to become a registered user
and use our service properly.  In order to create an Account, the Customer needs to provide an email address, create a password, and agree with the Terms.</p>

              <br />

              <h4 style={{ fontSize: "18px" }}> 6. COMMUNICATION </h4>
              <p> By creating an Account, the Customer has assented to SMB Legal sending newsletters, marketing and promotional materials and other information.  A Customer may opt out at any time.</p>
              <br />

              <h4 style={{ fontSize: "18px" }}> 7. SUBSCRIPTIONS </h4>
              <p> Some features on SMB Legal require the payment of fees on a subscription basis (“Subscription”).</p>
              <p> A Customer wishing to purchase a Subscription will do so by providing valid payment via a credit card number.  By submitting a credit card number the Customer authorizes,
automatically, SMB Legal to charge all Subscription fees that are agreed to and incurred on your account.</p>
              <p> The Subscription will be billed in advance and done on a monthly basis.  Subscriptions will automatically renew unless cancelled by the Customer or SMB Legal.  </p>
              <p> The Customer represents and warrants that they have the legal right to use the credit cards and the information provided is true and correct.</p>
              <p> Third parties may be used to enhance the Customer experience and process payments.  In an effort to do this they may be granted access to your information which is subject to our <Link to="/PrivacyPolicy" style={{ color: "#245CA6" }}> Privacy Policy. </Link></p>
              <br />

              <h4 style={{ fontSize: "18px" }}> 8. PER UNIT PRICING </h4>
              <p> Some features on SMB Legal require the payment of fees on a per unit basis (“Per Unit”).</p>
              <p> A Customer wishing to purchase an item Per Unit will do so by providing valid payment via a credit card number.  By submitting a credit card number the Customer authorizes, automatically,
SMB Legal to charge all Per Unit fees that are agreed to and incurred on your account.</p>
              <p> The Per Unit will be billed once upon check out, unless otherwise represented upon check out. </p>
              <p> The Customer represents and warrants that they have the legal right to use the credit cars and the information provided is true and correct.</p>
              <p>Third parties may be used to enhance the Customer experience and process payments.  In an effort to do this they may be granted access to your information which is subject to our <Link to="/PrivacyPolicy" style={{ color: "#245CA6" }}> Privacy Policy. </Link></p>
              <br />
              <h4 style={{ fontSize: "18px" }}> 9. PROMOTIONS AND REFERRALS </h4>
              <p> Referrals and promotions (collectively, “Promotions”) may be made available by SMB Legal and can be governed by rules separate from these Terms.  Please review applicable terms for such Promotions should you participate in them. </p>
              <br />
              <h4 style={{ fontSize: "18px" }}>10. FEE CHANGES  </h4>
              <p> In SMB Legal’s sole discretion, at any time, may modify the payment terms, including that of Subscriptions.  Said fee changes for Subscriptions will become effective at the end of the current billing cycle.  Reasonable prior notice will be given.
Continued use of SMB Legal will constitute your agreement to the fee change.</p>
              < br />

              <h4 style={{ fontSize: "18px" }}> 11. FILING FEES </h4>
              <p> Some features of SMB Legal require – in addition to the Per Unit pricing – the payment by the Customer of applicable filing fees.  Filing and recording fees may include all mandatory or applicable federal, state, county and local administrative fees, name reservation fees, initial reports, publication notices, capitalization fees, franchise tax fees, expedite fees, certified copy fees, walk-in fees,
courier fees and other transactional fees incurred on the Customer’s behalf by SMB Legal.</p>
              < br />

              <h4 style={{ fontSize: "18px" }}> 12. REFUNDS </h4>
              <p> Except as required by law, Subscriptions and Per Unit fees are non-refundable.</p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 13. ACCOUNT INFORMATION AND SECURITY </h4>
              <p> The Customer is entirely responsible for maintaining the confidentiality of their password.   The Customer must immediately notify SMB Legal of any
              unauthorized use and SMB Legal is not liable for any loss that may
result from someone else using the account, with or without the Customer's knowledge.</p>
              < br />


              <h4 style={{ fontSize: "18px" }}> 14. CHANGES TO THE SITE </h4>
              <p> SMB Legal retains the right to change the site at any time, without notice.  Access may be restricted at any time without notice and without liability, for any reason.</p>

              < br />
              <h4 style={{ fontSize: "18px" }}> 15. RELIANCE ON INFORMATION POSTED </h4>
              <p> SMB Legal does NOT warrant the accuracy, completeness or use of any information that is provided on the site –
including legal documents.  Any reliance is solely at the Customer's own risk.</p>
              <p> Subject to the disclaimer below, SMB Legal disclaims all liability and responsibility arising from reliance placed by a Customer
   on use of the site or any third party apprised of its contents.</p>

              <br />
              <h4 style={{ fontSize: "18px" }}>16. LINKS FROM THE PLATFORM AND INTEGRATIONS </h4>
              <p> Links to third parties or other websites are for convenience only and access to third
party platforms is solely at the risk of the Customer. </p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 17. INAPPROPRIATE CONTENT </h4>
              <p>  Access to the platform is for your own use and includes compliance with applicable laws, rules and regulations. </p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 18. PERSONAL USE </h4>
              <p> By using this site the Customer agrees that it is being made available for their own use on their own behalf and not on that of anyone else.</p>
              <br />
              <h4 style={{ fontSize: "18px" }}>19. PROHIBITED USE </h4>
              <p> The Customer agrees that they are using SMB Legal only for lawful purposes and in accordance with the Terms.  The Customer agrees not to use the site to: (1) violate national or international
              laws or regulations; (2) exploit or harm minors; (3) do anything
involving junk mail, chain letters, spam or anything similar; (4) impersonate a company; (5) infringe on the rights of others.</p>

              < br />
              <h4 style={{ fontSize: "18px" }}> 20. NO USE BY MINORS </h4>
              <p> SMB Legal is intended for use by persons eighteen (18) years of age and older.  The Customer represents and warrants that they are eighteen (18).</p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 21. OWNERSHIP </h4>
              <p> The site is owned by Eatery Legal Corporation.  All rights, title and interest, including but not limited to documents, logos, graphics, sounds, images and video are owned by Eatery Legal Corporation.
              None of the material may be copied, reproduced, republished, downloaded, uploaded, posted, displayed,
              transmitted or distributed in any way and nothing shall be construed to offer license of SMB Legal’s intellectual property rights.
Any rights not expressly granted herein are reserved by SMB Legal.</p>

              < br />
              <h4 style={{ fontSize: "18px" }}> 22. INTELLECTUAL PROPERTY RIGHTS </h4>
              <p> The site is owned by SMB Legal.  The site is protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.</p>
              <p> Any violation of these rights including printing, copying, modifying, downloading or otherwise using the site in a way that breaches the Terms the right to use the site will cease immediately.
              No right, title or interest in or to the site or any content on
the site is transferred to you and all rights are expressly reserved by the Company.</p>

              < br />
              <h4 style={{ fontSize: "18px" }}> 23. CONTENT UPLOADED BY USER </h4>
              <p> All rights in the content uploaded by the Customer for purposes of automation or storage on the site belong to the Customer but the Customer grants a right to analyze and process the information in accordance with the <Link to="/PrivacyPolicy" style={{ color: "#245CA6" }}> Privacy Policy. </Link> </p>
              <br />
              <h4 style={{ fontSize: "18px" }}> 24. DISCLAIMER OF WARRANTY </h4>
              <p> THE SMB LEGAL SITE IS PROVIDED BY EATERY LEGAL CORPORATION ON AN “AS IS” AND “AS AVAILABLE” BASIS.  SMB LEGAL MAKES NO REPRESENTATION AND WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATIONS OF THE SITE OR THE INFORMATION, CONTENT OR MATERIALS
              INCLUDED ON THE SITE TO THE FULLEST EXTENT PERMITTED BY LAW, INCLUDING BUT NOT
LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</p>

              <p> SMB LEGAL AND ITS ASSOCIATED PERSONS MAKE NO WARRANTY OR REPRESENTATION WITH RESPECT TO COMPLETENESS, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE SERVICE.  WITHOUT LIMITING THE FOREGOING, SMB LEGAL AND ITS ASSOCIATED PERSONS MAKE NO WARRANTY OR
              REPRESENTATION THAT SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED OR THAT DEFECTS WILL BE CORRECTED.  NOR DO THEY MAKE ANY REPRESENTATIONS OR WARRANTIES THAT THE SERVER IS FREE OF VIRUSES OR OTHER HARMFUL
COMPONENTS OR THAT THE SERVICES WILL OTHERWISE MEET THE CUSTOMERS NEEDS OR EXPECTATIONS.</p>
              <p> SMB LEGAL HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.</p>


              <br />

              <h4 style={{ fontSize: "18px" }}> 25. LIMITATION OF LIABILITY AND INDEMNIFICATION</h4>
              <p> EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD EATERY LEGAL CORPORATION AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER
              OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OR CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS
              AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF EATERY LEGAL
              CORPORATION HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF EATERY LEGAL CORPORATION, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE FOR THE PRODUCTS
              AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES, SOME STATES DO NOT ALLOW
              THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
</p>
              < br />

              <h4 style={{ fontSize: "18px" }}> 26. GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION BY BINDING ARBITRATION</h4>
              <p> All matters relating to the site and the Terms and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rules.</p>
              <p> Any legal suit, or action proceeding arising out of, or related to the Terms or the site shall be instituted exclusively in the federal courts of the United States or the courts of the State of California in each case located in the County and City of Los Angeles.  You waive any and all
objections to the exercise of jurisdiction over you by such courts and to venue in such courts.</p>
              <p> At the Company’s sole discretion, it may require you to submit any disputes arising from the use of these Terms or the site, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination,
    to final and binding arbitration under the Rules of Arbitration of the American Arbitration association applying California law.</p>
              < br />

              <h4 style={{ fontSize: "18px" }}> 27. WAIVER AND SEVERABILITY </h4>
              <p> Any provision of the Terms either by waiver of the Company or by court or other tribunal finding the provision to be invalid, illegal, or unenforceable for any reason shall eliminate or limit that term to the minimum allowed by law while allowing the Terms other than that eliminated or limited term to remain in full force and effect.</p>

              <br />
              <h4 style={{ fontSize: "18px" }}> 28. ENTIRE AGREEMENT </h4>
              <p> The Terms together with the <Link to="/PrivacyPolicy" style={{ color: "#245CA6" }}> Privacy Policy </Link> constitute the sole agreement between the Customer and the Company with respect to SMB Legal and supersedes all prior and contemporaneous
    understandings, agreements, representations and warranties, both written and oral, with respect to the site. </p>

              < br />
              <h4 style={{ fontSize: "18px" }}> 29. MONITORING AND ENFORCEMENT; TERMINATION </h4>
              <p> SMB Legal has the right to take any action with respect to any user that is deemed necessary and appropriate at SMB Legal’s sole discretion.  This includes disclosing the Customer’s identity and information to a third party
    who claims their rights have been violated, taking appropriate legal action, and terminating or suspending access.  </p>
              <p>SMB Legal has the right to fully cooperate with law enforcement authorities or court orders directing disclosure or other information about the Customers information on the site or sites.  THE CUSTOMER WAIVES AND HOLDS HARMLESS COMPANY AND ITS AFFILIATES,
              LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF
    THE FOREGOING PARTIES DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES. </p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 30. ACCEPTANCE OF TERMS </h4>
              <p> The Terms are entered into by the Customer and SMB Legal.  The Terms govern access and use to the site and all related services, whether as a guest or registered user. </p>
              <p> These Terms remain in full effect and force while using the site and SMB Legal may terminate access or your account at any time.  </p>
              <p> ALL PROVISIONS OF THE TERMS SHALL SURVIVE TERMINATION BY EITHER PARTY INCLUDING, WITHOUT LIMITATION, OWNERSHIP PROVISIONS, WARRANTY DISCLAIMERS, INDEMNITY, AND LIMITATIONS OF LIABILITY.</p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 31. ACKNOWLEDGEMENT </h4>
              <p>
                BY USING THE SITE OR OTHER SERVICES PROVIDED BY SMB LEGAL, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE AND AGREE TO BE BOUND BY THEM.  YOU UNDERSTAND THAT THESE TERMS AFFECT
YOUR LEGAL RIGHTS AND OBLIGATIONS AND IF YOU DO NOT AGREE TO BE BOUND BY ALL THESE TERMS YOU WILL NOT USE THIS SERVICE.</p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 32. FORCE MAJEURE </h4>
              <p> It shall not be considered a breach of the Terms or default of these Terms or any contract with the Customer by SMB Legal and shall not be liable for any cessation, interruption, or delay in the performance of SMB Legal’s obligations hereunder by reason of earthquake, flood, fire, storm, lightning,
              drought, landslide, hurricane, cyclone, typhoon, tornado, natural disaster, act of God or the public enemy, epidemic, famine or plague, action of a court or public authority, change in law, explosion, war, terrorism, armed conflict,
              labor strike, lockout, boycott or similar event beyond our reasonable control, whether foreseen or unforeseen.  If any of the foregoing events either by themselves of in combination continue
    for more than 60 days in the aggregate SMB Legal may immediately terminate these Terms and shall have no liability.</p>
              < br />

              <h4 style={{ fontSize: "18px" }}> 33. RIGHT TO REFUSE </h4>
              <p> SMB Legal has the right to refuse service to anyone.</p>
              < br />
              <h4 style={{ fontSize: "18px" }}> 34. NOT A BONDED LEGAL DOCUMENT ASSISTANT </h4>
              <p> SMB Legal is not and the Customer acknowledges that SMB Legal is not a registered or bonded legal document assistant under California Business and Profession Code, sections 6400 et seq.</p>
              <br />
              <h4 style={{ fontSize: "18px" }}> 35. PRIVACY POLICY </h4>
              <p>SMB Legal’s <Link to="/PrivacyPolicy" style={{ color: "#245CA6" }}> Privacy Policy </Link> is incorporated herein.</p>


              <br></br>
            </ModalBody>
            <ModalFooter>

              <Button variant="light" onClick={hideModal} style={{ fontFamily: "DM Sans" }}> I ACCEPT </Button>
            </ModalFooter>
          </Modal>
        </div>



        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ color: "#245CA6" }}> Create an Account </h1>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <svg height={50} width={400}>
            <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
          </svg>
        </div>

        <div class="create-acc-form">

          {/* PHIL WORKING HERE */}
          <StripeCheckout 
            stripeKey={process.env.REACT_APP_PUBLIC_KEY}
            token={makePayment}
            name="Premium Subscription"
            amount={premium_subscription.price * 100}
            billingAddress
          />

          <p style={{ textAlign: "center" }}> Welcome to SMB Legal! Thanks for coming and we're glad to have you along for the journey. </p>
          <br></br>
          {/* <div class="email-input" style={{ textAlign: "center" }}>
            <TextField value={state.email} name="email" onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" style={{ width: "500px" }} />

          </div>
          <br></br> */}
          {/* <div class="first-name-input" style={{ textAlign: "center" }}>
            <TextField value={state.firstName} name="firstName" onChange={handleChange} id="outlined-basic" label="First Name" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br> */}
          <div class="email-input" style={{ textAlign: "center" }}>
            {/* <TextField value={state.lastName} name="lastName" onChange={handleChange} id="outlined-basic" label="Last Name" variant="outlined" style={{ width: "500px" }} /> */}

            <TextField value={state.email} name="email" onChange={handleChange} required id="outlined-required" label="Email" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br>
          <div class="first-name-input" style={{ textAlign: "center" }}>
            <TextField value={state.firstName} name="firstName" onChange={handleChange} required id="outlined-required" label="First Name" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br>
          <div class="last-name-input" style={{ textAlign: "center" }}>
            <TextField value={state.lastName} name="lastName" onChange={handleChange} required id="outlined-required" label="Last Name" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br>
          <div class="password-input" style={{ textAlign: "center" }}>
            <TextField
              // id="outlined-password-input"
              value={state.password}
              name="password"
              onChange={handleChange}
              required id="outlined-required"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              color="#245CA6"
              style={{ width: "500px" }}
            />
          </div>
          <br></br>

          <div class="select-plan" style={{ textAlign: "center" }}>
            <TextField
              required id="outlined-required"
              select label="Select your plan"
              value={plan}
              onChange={handleChangePlan}
              variant="outlined"
              style={{ width: "500px" }}
            >

              {plans.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}

            </TextField>
          </div>
          <br />


          {plan === 'Existing Plan' && (

            <form>
              <div class="companyid-input" style={{ textAlign: "center" }}>
                <TextField
                  name="companyId"
                  onChange={handleChange} required id="outlined-required" label="Company ID" variant="outlined" style={{ width: "500px" }} />
              </div>
              <br />
              <br />
              {agree === false && (
                <center>  <div class="terms-button" onClick={showModal} >
                  <p style={{ textAlign: "center" }}> Agree to Terms and Conditions </p>
                </div> </center>
              )}

              {agree === true && (
                <form>
                  <center>   <div class="terms-button-1" >
                    <p style={{ textAlign: "center" }}> Agreed to Terms and Conditions <CheckBoxIcon /> </p>
                  </div> </center>

                  < br />
                  <br />
                  <center>
                    {/* <Link to="/Dashboard"> */}
                    <div class="create-acc-button" onClick={handleClick}>
                      <p style={{ textAlign: "center" }}> Create your Account </p>
                    </div>
                    {/* </Link> */}
                  </center>
                </form>
              )}
            </form>
          )}



          {plan === 'Premium' && (
            <form>

              <div class="login-form" style={{ textAlign: "center" }}>

                <div class="company-name" style={{ textAlign: "center" }}>
                  <TextField
                    required id="outlined-required"
                    value={state.companyName}
                    name="companyName"
                    onChange={handleChange}
                    label="Company Name"
                    variant="outlined"
                    style={{ width: "500px" }} />
                </div>
                <br></br>
                <div class="state-choice">
                  <TextField
                    required id="outlined-required"
                    select label="What state is your business formed in?"
                    value={USstate}
                    onChange={handleChangeState}
                    variant="outlined"
                    style={{ width: "500px" }}
                  >

                    {states.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <br></br>


                <div class="zipcode-input" style={{ textAlign: "center" }}>
                  <TextField
                    required id="outlined-required"
                    value={state.zipcode}
                    name="zipcode"
                    onChange={handleChange}
                    label="Zipcode"
                    variant="outlined"
                    style={{ width: "500px" }} />
                </div>
                <br />
                <div class="company-choice">
                  <TextField
                    required id="outlined-required"
                    select label="You are a"
                    value={company}
                    onChange={handleChangeCompany}
                    variant="outlined"
                    style={{ width: "500px" }}
                  >
                    {/* {companies.map((option) => ( */}
                    <MenuItem key="Corporation" value="Corporation">
                      Corporation
                    </MenuItem>
                    <MenuItem key="Partnership" value="Partnership">
                      Partnership
                    </MenuItem>
                    <MenuItem key="LLC" value="LLC">
                      LLC
                    </MenuItem>
                  </TextField>
                </div>
                <br></br>
                <br />


                {company === 'Partnership' && (
                  <div>
                    {agree === false && (
                      <center>  <div class="terms-button" onClick={showModal} >
                        <p style={{ textAlign: "center" }}> Agree to Terms and Conditions </p>
                      </div> </center>
                    )}

                    {agree === true && (
                      <form>
                        <center>   <div class="terms-button-1" >
                          <p style={{ textAlign: "center" }}> Agreed to Terms and Conditions <CheckBoxIcon /> </p>
                        </div> </center>

                        < br />
                        <br />

                        <center>
                          {/* <Link to="/InitializePartnership" style={{ textDecoration: "none" }}>  */}
                          <div class="gov-button" >
                            <p style={{ textAlign: "center" }} onClick={handleClickParternship}>  Automate Your Governance </p>
                          </div>
                          {/* </Link> */}
                        </center>

                            {/* PHIL WORKING HERE */}
                            <StripeCheckout 
                              stripeKey={process.env.REACT_APP_PUBLIC_KEY}
                              token={makePayment}
                              name="Premium Subscription"
                              amount={premium_subscription.price * 100}
                              billingAddress
                            />

                      </form>
                    )}
                    <br />
                    <br />
                  </div>

                )}

                {company === 'Corporation' && (
                  <div>
                    {agree === false && (
                      <center>  <div class="terms-button" onClick={showModal} >
                        <p style={{ textAlign: "center" }}> Agree to Terms and Conditions </p>
                      </div> </center>
                    )}

                    {agree === true && (
                      <form>
                        <center>   <div class="terms-button-1" >
                          <p style={{ textAlign: "center" }}> Agreed to Terms and Conditions <CheckBoxIcon /> </p>
                        </div> </center>

                        < br />
                        <br />
                        <center>
                          {/* <Link to="/InitializeCorporation" style={{ textDecoration: "none" }}>  */}
                          <div class="gov-button" >
                            <p style={{ textAlign: "center" }} onClick={handleClickCorporation}> Automate Your Governance </p>
                          </div>
                          {/* </Link> */}
                        </center>

                            {/* PHIL WORKING HERE */}
                            <StripeCheckout 
                              stripeKey={process.env.REACT_APP_PUBLIC_KEY}
                              token={makePayment}
                              name="Premium Subscription"
                              amount={premium_subscription.price * 100}
                              billingAddress
                            />
                      </form>
                    )}
                    <br />
                    <br />
                  </div>

                )}

                {company === 'LLC' && (
                  <div>
                    {agree === false && (
                      <center>  <div class="terms-button" onClick={showModal} >
                        <p style={{ textAlign: "center" }}> Agree to Terms and Conditions </p>
                      </div> </center>
                    )}

                    {agree === true && (
                      <form>
                        <center>   <div class="terms-button-1" >
                          <p style={{ textAlign: "center" }}> Agreed to Terms and Conditions <CheckBoxIcon /> </p>
                        </div> </center>

                        < br />
                        < br />

                        <center>
                          {/* <Link to="/InitializeLLC" style={{ textDecoration: "none" }}>  */}
                          <div class="gov-button" >
                            <p style={{ textAlign: "center" }} onClick={handleClickLLC}> Automate Your Governance </p>
                          </div>
                          {/* </Link> */}
                        </center>
                            {/* PHIL WORKING HERE */}
                            <StripeCheckout 
                              stripeKey={process.env.REACT_APP_PUBLIC_KEY}
                              token={makePayment}
                              name="Premium Subscription"
                              amount={premium_subscription.price * 100}
                              billingAddress
                            />
                      </form>
                    )}
                    <br />
                    <br />
                            {/* PHIL WORKING HERE */}
                            <StripeCheckout 
                              stripeKey={process.env.REACT_APP_PUBLIC_KEY}
                              token={makePayment}
                              name="Premium Subscription"
                              amount={premium_subscription.price * 100}
                              billingAddress
                            />
                  </div>

                )}
              </div>
            </form>
          )}

          {(plan === 'Freemium' || plan === 'Formation Documents') && (

            <form>
              <div class="login-form" style={{ textAlign: "center" }}>

                <div class="company-name" style={{ textAlign: "center" }}>
                  <TextField
                    required id="outlined-required"
                    value={state.companyName}
                    name="companyName"
                    onChange={handleChange}
                    label="Company Name"
                    variant="outlined"
                    style={{ width: "500px" }} />
                </div>
                <br></br>
                <div class="state-choice">
                  <TextField
                    required id="outlined-required"
                    select label="What state is your business formed in?"
                    value={USstate}
                    onChange={handleChangeState}
                    variant="outlined"
                    style={{ width: "500px" }}
                  >

                    {states.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <br></br>


                <div class="zipcode-input" style={{ textAlign: "center" }}>
                  <TextField
                    required id="outlined-required"
                    value={state.zipcode}
                    name="zipcode"
                    onChange={handleChange}
                    label="Zipcode"
                    variant="outlined"
                    style={{ width: "500px" }} />
                </div>
                <br />
                <div class="company-choice">
                  <TextField
                    required id="outlined-required"
                    select label="You are a"
                    value={company}
                    onChange={handleChangeCompany}
                    variant="outlined"
                    style={{ width: "500px" }}
                  >
                    {/* {companies.map((option) => ( */}
                    <MenuItem key="Corporation" value="Corporation">
                      Corporation
                      </MenuItem>
                    <MenuItem key="Partnership" value="Partnership">
                      Partnership
                      </MenuItem>
                    <MenuItem key="LLC" value="LLC">
                      LLC
                      </MenuItem>
                  </TextField>
                </div>
                <br></br>
                <br />

                {company === 'Partnership' && (
                  <div>
                    {agree === false && (
                      <center>  <div class="terms-button" onClick={showModal} >
                        <p style={{ textAlign: "center" }}> Agree to Terms and Conditions </p>
                      </div> </center>
                    )}

                    {agree === true && (
                      <form>
                        <center>   <div class="terms-button-1" >
                          <p style={{ textAlign: "center" }}> Agreed to Terms and Conditions <CheckBoxIcon /> </p>
                        </div> </center>


                        < br />
                        <br />

                        <center>
                          {/* <Link to="/InitializePartnership" style={{ textDecoration: "none" }}>  */}
                          <div class="gov-button" onClick={handleClickParternship}>
                            <p style={{ textAlign: "center" }}> Automate Your Governance </p>
                          </div>
                          {/* </Link> */}
                        </center>
                        <br />
                        <br />
                        <center>

                          {/* <Link to="/Dashboard"> */}
                          <div class="create-acc-button" onClick={handleClick}>
                            <p style={{ textAlign: "center" }} > Create your Account </p>
                          </div>
                          {/* </Link> */}
                        </center>
                      </form>
                    )}
                  </div>

                )}

                {company === 'Corporation' && (
                  <div>

                    {agree === false && (
                      <center>  <div class="terms-button" onClick={showModal} >
                        <p style={{ textAlign: "center" }}> Agree to Terms and Conditions </p>
                      </div> </center>
                    )}

                    {agree === true && (
                      <form>
                        <center>   <div class="terms-button-1" >
                          <p style={{ textAlign: "center" }}> Agreed to Terms and Conditions <CheckBoxIcon /> </p>
                        </div> </center>

                        < br />
                        <br />
                        <center>
                          {/* <Link to="/InitializeCorporation" style={{ textDecoration: "none" }}>  */}
                          <div class="gov-button" >
                            <p style={{ textAlign: "center" }} onClick={handleClickCorporation}> Automate Your Governance </p>
                          </div>
                          {/* </Link> */}
                        </center>
                        <br />
                        <br />
                        <center>
                          {/* <Link to="/Dashboard"> */}
                          <div class="create-acc-button" onClick={handleClick}>
                            <p style={{ textAlign: "center" }} > Create your Account </p>
                          </div>
                          {/* </Link> */}
                        </center>
                      </form>
                    )}
                  </div>

                )}


                {company === 'LLC' && (
                  <div>
                    {agree === false && (
                      <center>  <div class="terms-button" onClick={showModal} >
                        <p style={{ textAlign: "center" }}> Agree to Terms and Conditions </p>
                      </div> </center>
                    )}

                    {agree === true && (
                      <form>
                        <center>   <div class="terms-button-1" >
                          <p style={{ textAlign: "center" }}> Agreed to Terms and Conditions <CheckBoxIcon /> </p>
                        </div> </center>

                        < br />
                        <br />
                        <center>
                          {/* <Link to="/InitializeLLC" style={{ textDecoration: "none" }}>  */}
                          <div class="gov-button" >
                            <p style={{ textAlign: "center" }} onClick={handleClickLLC}> Automate Your Governance </p>
                          </div>
                          {/* </Link> */}
                        </center>
                        <br />
                        <br />
                        <center>
                          {/* <Link to="/Dashboard"> */}
                          <div class="create-acc-button" onClick={handleClick}>
                            <p style={{ textAlign: "center" }} > Create your Account </p>
                          </div>
                          {/* </Link> */}
                        </center>

                      </form>)}
                  </div>
                )}
              </div>
            </form>
          )}

          <br />
          <br />
          <br />

        </div>
      </div >


      <Footer />


    </div >

  );
}
