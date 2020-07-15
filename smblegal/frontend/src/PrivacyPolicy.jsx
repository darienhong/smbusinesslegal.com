import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";


export default class PrivacyPolicy extends Component { 
    render() {
        return (

            <div class="full-page"> 
              <Navbar />
            <div class="policy-page">

           
                <br></br>
            <br></br> 
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{color: "#245CA6"}}> Privacy Policy </h1>
              <br></br>
            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br></br>

            <h4> 1. INTRODUCTION </h4>
            <p> Our privacy policy as set forth below (the “Privacy Policy”) govern all use of, collection of, safeguarding of, and disclosure of the information of the customer that results from the use of our pages of 
                Eatery Legal Corporation (“we”, “us”, “Eatery Legal”, “SBM Legal”, “SMB”) located as https://www.eaterylegal.com and https://www.smbusinesslegal.com .  
                Our <Link to ="/TermsOfUse" style={{color: "#245CA6"}}> terms of service </Link> and use (the “Terms”) also governs your use of SMB Legal, which is incorporated here by reference. </p>

            <p> IF YOU DO NOT AGREE WITH OR CANNOT COMPLY WITH THE PRIVACY POLICY THEN YOU MAY NOT USE SMB LEGAL.</p>
            <p> The customer (“Customer”, “You”, “Your”) agrees to be bound by the Privacy Policy and all applicable laws and regulations.  
                It is your responsibility to review the Privacy Policy periodically.</p>
                <p> YOU AGREE THAT BY USING THIS SITE YOU ARE AT LEAST 18 YEARS OF AGE AND ARE LEGALLY ABLE TO ENTER INTO A CONTRACT.</p>

            < br/> 
            <h4> 2. DESCRIPTION </h4>
            <p> SMB Legal is an online legal portal that provides Customers with access to legal document templates and automated software to help Customers prepare legal documents.  
                The website includes general information on commonly encountered legal issues.</p>
                <p>SMB Legal works to keep its legal templates accurate, current and up to date. However, we cannot guarantee that all of the information is current and up to date.  Please maintain awareness that the law is 
                    different in each jurisdiction and therefore is also subject to different interpretation by courts. 
                    The legal information contained on the site is not legal advice and nor is it guaranteed to be complete or up to date.
 </p>
<p>The law is personal and no general information or legal tool kit like SMB Legal is fit for any circumstance or can step in for the advice of a lawyer.  Therefore, if you need specific 
    advice for your specific problem, or your specific problem is too complex you should consult an attorney. </p>
            <p> SMB Legal may introduce Customers to attorneys through various methods, but at no circumstance is the performance of such a service the establishment of an attorney-client relationship between the Customer and 
                SMB Legal and it should never be considered a substitute for a professional legal service or a solicitation to provide legal advice.</p>


            < br/> 
            <h4> 3. DEFINITIONS  </h4>
            <p> a. <span style={{fontWeight: "bold"}}> “PERSONAL DATA”: </span>   Data about a living individual who can be identified from those data. </p>
            <p> b. <span style={{fontWeight: "bold"}}> “DOCUMENTS DATA”: </span> Data collected from users while generating or editing a document on the site.</p>
            <p> c. <span style={{fontWeight: "bold"}}> “USAGE DATA”: </span> Data collected via use of the site, automatically.</p>
            <p> d. <span style={{fontWeight: "bold"}}> “COOKIES”: </span> Pieces of data stored on a Customer’s device.</p>
            <p> e. <span style={{fontWeight: "bold"}}> “DATA CONTROLLER”: </span> A natural or legal person who determines the purpose in which any data is or are able to be processed.  
                For this purpose SMB Legal is the Data Controller of the Customer’s data.</p>
            <p> f. <span style={{fontWeight: "bold"}}> “DATA PROCESSOR" (SERVICE PROVIDERS): </span> Any natural or legal person who processes the data on behalf of the Data Controller.</p>
            <p> g. <span style={{fontWeight: "bold"}}> “DATA SUBJECT”: </span>  Any living person who is the subject of Personal Data.</p>
            <p> h. <span style={{fontWeight: "bold"}}> “USER”: </span> : Any individual using the site.  The User corresponds to Data Subject, who is the subject of Personal Data.</p>

            < br/> 
            <h4> 4. INFORMATIONS WE COLLECT ABOUT CUSTOMERS </h4>
            <p> SMB Legal collects different types of information from the Customer for various purposes to maintain the site and provide the Customer with the best level of services. </p>
            <p> a. <span style={{fontWeight: "bold"}}> PERSONAL DATA </span>  </p>
            <p> <span style={{fontWeight: "bold"}}> Personal Information. </span> Personal information, such as the name, address, e-mail address, phone number, username, password and any other personal information through the site.  This includes registration information.
                < br/> 
                <span style={{fontWeight: "bold"}}> Email Correspondences. </span>  Records and copies of email messages if the Customer chooses to correspond with us via email.
                < br/> 
                <span style={{fontWeight: "bold"}}> Transaction Information. </span>  Information about purchases or transactions made on the site.  Including payment information – such as a credit card number or other payment method – billing details and other authentication information.
                < br /> 
                <br /> 
                Personal Data may be used to contact you with newsletters, promotional or marketing materials.  These all may be opted out of by clicking the unsubscribe link.

            </p>
            <p> b. <span style={{fontWeight: "bold"}}> DOCUMENTS DATA </span>  </p>
            <p> Information that is entered on the site for the purpose of generating the documents and achieving the purposes of the site.  We may collect Documents Data and analyze it to provide additional benefits for the site.</p>
            <p> c. <span style={{fontWeight: "bold"}}> USAGE DATA </span>  </p>
            <p> While using the site we may collect information and analyze it to determine how the site is being used.</p>
            <p> d. <span style={{fontWeight: "bold"}}> TRACKING AND COOKIES DATA </span>  </p>
            <p> Customers will be subject to Cookies to help enhance and personalize their experience with SMB Legal.  Cookies are personal to that Customer.  Customers have the ability to accept or decline Cookies.
</p>
            <p> e. <span style={{fontWeight: "bold"}}> OTHER INFORMATION </span> </p>
            <p> Other information may be collected on the Customer while using the site.  This may be information and content that the Customer gives to SMB Legal directly or information that is automatically collected.</p>

            <br /> 

            <h4> 5. USE OF DATA </h4>
            <p> Collected data is used in any way that is described when the Customer provides the information.  Generally, it is used to provide and maintain the services, provide the customer with information and services, 
                participate in all features of the site, develop test and improve new products and services, correspond with the Customer, 
                and to carry out SMB Legal’s obligations and enforce the rights arising from contracts entered into between the Customer and SMB Legal.</p>

            <br /> 
            <h4> 6. RETENTION OF DATA </h4>
            <p> SMB Legal will retain Personal Data for as long as is necessary to comply with this Privacy Policy or any legal obligations, resolving of disputes, or enforcing legal agreements.
<br />
Usage Data will be retained for internal analysis.
</p>
                < br/> 
            <h4> 7. TRANSFER OF DATA </h4>
            <p> Transfer of information and data may be maintained on computers located outside of your governmental jurisdiction where data protection laws may differ.  
                SMB Legal will take all reasonable steps necessary to ensure data is treated securely.</p>

                < br/> 

                <h4> 8. DISCLOSURE OF CUSTOMER INFORMATION </h4>
                <p> a. <span style={{fontWeight: "bold"}}> LAW ENFORCEMENT </span>  </p>
                <p> SMB Legal will disclose Personal Data to law enforcement if required to do so by law or comply with our own obligations.</p>
                <p> b. <span style={{fontWeight: "bold"}}> OTHER CASES </span>  </p>
                <p> SMB Legal will disclose Personal Data to fulfill the purposes for which it was provided by the Customer, including to subsidiaries, contractors or service providers or third parties that support SMB Legal.</p>

                <br /> 

                <h4> 9. DATA SECURITY </h4>
                <p> SMB Legal takes data security seriously and steps have been taken to secure the Customer’s personal information.  NO METHOD OF TRANSMISSION OVER THE INTERNET, 
                    OR METHOD OF ELECTRONIC STORAGE IS 100% SECURE.  WHILE STRIVING TO DO OUR BEST TO PROTECT PERSONAL DATA, SMB LEGAL CANNOT GUARANTEE ITS ABSOLUTE SECURITY.  ANY TRANSMISSION OF PERSONAL INFORMATION IS AT YOUR OWN RISK.  
                    SMB LEGAL IS NOT RESPONSIBLE FOR CIRCUMVENTION OF ANY PRIVACY SETTING OR SECURITY MEASURES CONTAINED ON THE PLATFORM.</p>

                    < br/> 
                <h4> 10. DATA RIGHTS UNDER GDPR</h4>
                <p> SMB Legal is meant to be used within the confines of the United States.  Therefore, SMB Legal does not comply with the 
                    General Data Protection Regulation (GDPR).  By using SMB Legal the Customer is asserting that they are not a resident of the European Economic Area (EEA).  
                    If the Customer is a resident of the EEA they may not use SMB Legal’s site.</p>

                    < br/> 

                <h4> 11. DATA PROTECTION UNDER CALIFORNIA CONSUMER PRIVACY ACT (CCPA)</h4>
                <p> As a resident of California, the Customer is able to learn what data has been collected and ask to delete that data and not sell it.  The Customer can make these requests:</p>
                <p> a. <span style={{fontWeight: "bold"}}> PERSONAL INFORMATION </span> </p>
                <p> Upon a request to exercise a Customer’s rights under the CCPA SMB Legal will return all statutorily required information under the CCPA.  
                    A Customer is entitled to ask to provide this information two-times on a rolling basis within 12 months.</p>
                <p> B. <span style={{fontWeight: "bold"}}> DELETION </span> </p>
                <p> Upon a request to exercise a Customer’s rights under the CCPA SMB Legal will delete all statutorily required information under the CCPA.</p>
                <p> C. <span style={{fontWeight: "bold"}}> SALE OF PERSONAL INFORMATION </span>  </p>
                <p>  Upon a request to exercise a Customer’s rights under the CCPA SMB Legal will not sell all statutorily required information under the CCPA.
</p>
                < br/> 
                <h4> 12. SERVICE PROVIDERS </h4>
                <p> Third parties may be employed or used to help the site operate.  These service providers will have access to the Customer’s Personal Data.</p>
                < br/> 

                <h4> 13. ANALYTICS </h4>
                <p> Analytics on the data collected may be analyzed by both SMB Legal and a third party service.</p>
                < br/> 

                <h4> 14. PAYMENTS </h4>
                <p> Paid services may be provided with the site.  Third party services will be used for this.  SMB Legal does not store or collect this data, it is provided directly to third-party payment 
                    processors who use that information in a way that is governed by their own Privacy Policies.  
                    These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council.</p>

                    < br/> 
                    <h4> 15. THIRD PARTY LINKS </h4>
                    <p> Any third party link that is clicked on it is advised that the Customer read their Privacy Policy since SMB Legal has no control over and assumes no responsibility over the Customer’s use of their site.</p>
           <br /> 

           <h4> 16. CHILDREN'S PRIVACY </h4>
           <p> Use of SMB Legal is predicated on the Customer being eighteen (18) years or older.  SMB Legal does not knowingly collect personally identifiable information for anyone who is a child.</p>
           <br /> 
           <h4> 17. CHANGES </h4>
           <p> The Privacy Policy may be amended from time to time, the Customer is responsible for reviewing it periodically.  Continued use of SMB Legal means that the Customer accepts and agrees to the changes.</p>
           < br/> 
           <br /> 
           < br/> 

           
           
            </div>

            <Footer /> 
            </div>

        );
    }
}