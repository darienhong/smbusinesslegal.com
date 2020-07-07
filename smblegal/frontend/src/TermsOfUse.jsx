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


export default class TermsOfUse extends Component { 
    render() {
        return (

            <div class="full-page"> 
            <div class="terms-of-use-page">

                <Navbar />
                <br></br>
            <br></br> 
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{color: "#245CA6"}}> Terms of Service and Use </h1>
              <br></br>
            <div style={{textAlign:"center"}}>
                <svg height={50} width={500}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br></br>

            <p style={{textAlign: "center"}}> PLEASE READ THESE TERMS OF SERVICE AND USE CAREFULLY BEFORE USING THIS SITE. </p>
            < br/>
            <br />
            <h4> 1. INTRODUCTION </h4>
            <p> Our terms of service and use as set forth below (the “Terms”) govern all use of the web pages of Eatery Legal Corporation (“we”, “us”, “Eatery Legal”, “SMB Legal”, “SMB”) 
                located as https://www.eaterylegal.com and https://www.smbusinesslegal.com .  Our privacy policy 
                (the “Privacy Policy”) also governs your use of SMB Legal and explains how we collect, use, safeguard and disclose 
                information that results from your use of our website, which is incorporated here by reference.</p>

            <p> IF YOU DO NOT AGREE WITH OR CANNOT COMPLY WITH THE TERMS THEN YOU MAY NOT USE SMB LEGAL.</p>
             <p> The customer (“Customer”, “You”, “Your”) agrees to be bound by these Terms and all applicable 
                 laws and regulations.  It is your responsibility to review these Terms periodically.</p>

            <p> YOU AGREE THAT BY USING THIS SITE YOU ARE AT LEAST 18 YEARS OF AGE AND ARE LEGALLY ABLE TO ENTER INTO A CONTRACT.</p>

            <p> These Terms require the use of arbitration on an individual basis to resolve disputes.</p>

            < br/>
            <h4> 2. SMB LEGAL IS NOT A LAW FIRM AND DOES NOT PROVIDE LEGAL SERVICES </h4>

            <p style={{fontWeight: "bold"}}> SMB Legal is NOT a law firm or attorney and may not perform services performed by an attorney, and the forms or 
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

            <h4> 3. DESCRIPTION OF SMB LEGAL </h4>

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
            
            <h4> 4. AMENDMENT TO TERMS </h4>
            <p> SMB Legal may amend the Terms from time to time.  Continued use of SMB Legal means that you accept and agree to any amendment of the Terms.
            </p>

            <br />
            <h4> 5. ACCESSING SMB Legal </h4>
            <p> Access to SMB Legal is contingent upon the creation of an account (“Account”).    The creation of an Account is to become a registered user 
                and use our service properly.  In order to create an Account, the Customer needs to provide an email address, create a password, and agree with the Terms.</p>

            <br />

            <h4> 6. COMMUNICATION </h4>
            <p> By creating an Account, the Customer has assented to SMB Legal sending newsletters, marketing and promotional materials and other information.  A Customer may opt out at any time.</p>
            <br />

            <h4> 7. SUBSCRIPTIONS </h4>
            <p> Some features on SMB Legal require the payment of fees on a subscription basis (“Subscription”).</p>
            <p> A Customer wishing to purchase a Subscription will do so by providing valid payment via a credit card number.  By submitting a credit card number the Customer authorizes, 
                automatically, SMB Legal to charge all Subscription fees that are agreed to and incurred on your account.</p>
            <p> The Subscription will be billed in advance and done on a monthly basis.  Subscriptions will automatically renew unless cancelled by the Customer or SMB Legal.  </p>
            <p> The Customer represents and warrants that they have the legal right to use the credit cards and the information provided is true and correct.</p>
            <p> Third parties may be used to enhance the Customer experience and process payments.  In an effort to do this they may be granted access to your information which is subject to our <Link to ="/PrivacyPolicy" style={{color: "#245CA6" }}> Privacy Policy. </Link></p>
            <br /> 

            <h4> 8. PER UNIT PRICING </h4>
            <p> Some features on SMB Legal require the payment of fees on a per unit basis (“Per Unit”).</p>
            <p> A Customer wishing to purchase an item Per Unit will do so by providing valid payment via a credit card number.  By submitting a credit card number the Customer authorizes, automatically, 
                SMB Legal to charge all Per Unit fees that are agreed to and incurred on your account.</p>
            <p> The Per Unit will be billed once upon check out, unless otherwise represented upon check out. </p>
            <p> The Customer represents and warrants that they have the legal right to use the credit cars and the information provided is true and correct.</p>
            <p>Third parties may be used to enhance the Customer experience and process payments.  In an effort to do this they may be granted access to your information which is subject to our <Link to ="/PrivacyPolicy" style={{color: "#245CA6" }}> Privacy Policy. </Link></p> 
           <br />
            <h4> 9. PROMOTIONS AND REFERRALS </h4>
            <p> Referrals and promotions (collectively, “Promotions”) may be made available by SMB Legal and can be governed by rules separate from these Terms.  Please review applicable terms for such Promotions should you participate in them. </p>
            <br />
            <h4>10. FEE CHANGES  </h4>
            <p> In SMB Legal’s sole discretion, at any time, may modify the payment terms, including that of Subscriptions.  Said fee changes for Subscriptions will become effective at the end of the current billing cycle.  Reasonable prior notice will be given.  
                Continued use of SMB Legal will constitute your agreement to the fee change.</p>
            < br/>

            <h4> 11. FILING FEES </h4>
            <p> Some features of SMB Legal require – in addition to the Per Unit pricing – the payment by the Customer of applicable filing fees.  Filing and recording fees may include all mandatory or applicable federal, state, county and local administrative fees, name reservation fees, initial reports, publication notices, capitalization fees, franchise tax fees, expedite fees, certified copy fees, walk-in fees, 
                courier fees and other transactional fees incurred on the Customer’s behalf by SMB Legal.</p>
            < br/>

            <h4> 12. REFUNDS </h4>
            <p> Except as required by law, Subscriptions and Per Unit fees are non-refundable.</p>
            < br/> 
            <h4> 13. ACCOUNT INFORMATION AND SECURITY </h4>
            <p> The Customer is entirely responsible for maintaining the confidentiality of their password.   The Customer must immediately notify SMB Legal of any 
                unauthorized use and SMB Legal is not liable for any loss that may 
                result from someone else using the account, with or without the Customer's knowledge.</p>
                < br/> 

           
           <h4> 14. CHANGES TO THE SITE </h4>
           <p> SMB Legal retains the right to change the site at any time, without notice.  Access may be restricted at any time without notice and without liability, for any reason.</p>
           
           < br/>
           <h4> 15. RELIANCE ON INFORMATION POSTED </h4>
           <p> SMB Legal does NOT warrant the accuracy, completeness or use of any information that is provided on the site – 
               including legal documents.  Any reliance is solely at the Customer's own risk.</p>
               <p> Subject to the disclaimer below, SMB Legal disclaims all liability and responsibility arising from reliance placed by a Customer 
                   on use of the site or any third party apprised of its contents.</p>

           <br /> 
           <h4> 16. LINKS FROM THE PLATFORM AND INTEGRATIONS </h4>
           <p> Links to third parties or other websites are for convenience only and access to third 
               party platforms is solely at the risk of the Customer. </p>
               < br/>
            <h4> 17. INAPPROPRIATE CONTENT </h4>
            <p>  Access to the platform is for your own use and includes compliance with applicable laws, rules and regulations. </p>
            < br/>
            <h4> 18. PERSONAL USE </h4>
            <p> By using this site the Customer agrees that it is being made available for their own use on their own behalf and not on that of anyone else.</p>
            <br /> 
            <h4>19. PROHIBITED USE </h4> 
            <p> The Customer agrees that they are using SMB Legal only for lawful purposes and in accordance with the Terms.  The Customer agrees not to use the site to: (1) violate national or international 
                laws or regulations; (2) exploit or harm minors; (3) do anything 
                involving junk mail, chain letters, spam or anything similar; (4) impersonate a company; (5) infringe on the rights of others.</p>

            < br/> 
            <h4> 20. NO USE BY MINORS </h4>
            <p> SMB Legal is intended for use by persons eighteen (18) years of age and older.  The Customer represents and warrants that they are eighteen (18).</p>
            < br/> 
            <h4> 21. OWNERSHIP </h4>
            <p> The site is owned by Eatery Legal Corporation.  All rights, title and interest, including but not limited to documents, logos, graphics, sounds, images and video are owned by Eatery Legal Corporation.  
                None of the material may be copied, reproduced, republished, downloaded, uploaded, posted, displayed, 
                transmitted or distributed in any way and nothing shall be construed to offer license of SMB Legal’s intellectual property rights.  
                Any rights not expressly granted herein are reserved by SMB Legal.</p>         

            < br/> 
            <h4> 22. INTELLECTUAL PROPERTY RIGHTS </h4>
            <p> The site is owned by SMB Legal.  The site is protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.</p>
            <p> Any violation of these rights including printing, copying, modifying, downloading or otherwise using the site in a way that breaches the Terms the right to use the site will cease immediately.  
                No right, title or interest in or to the site or any content on 
                the site is transferred to you and all rights are expressly reserved by the Company.</p>

            < br/> 
            <h4> 23. CONTENT UPLOADED BY USER </h4>
            <p> All rights in the content uploaded by the Customer for purposes of automation or storage on the site belong to the Customer but the Customer grants a right to analyze and process the information in accordance with the <Link to ="/PrivacyPolicy" style={{color: "#245CA6" }}> Privacy Policy. </Link> </p>
            <br /> 
            <h4> 24. DISCLAIMER OF WARRANTY </h4>
            <p> THE SMB LEGAL SITE IS PROVIDED BY EATERY LEGAL CORPORATION ON AN “AS IS” AND “AS AVAILABLE” BASIS.  SMB LEGAL MAKES NO REPRESENTATION AND WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATIONS OF THE SITE OR THE INFORMATION, CONTENT OR MATERIALS 
                INCLUDED ON THE SITE TO THE FULLEST EXTENT PERMITTED BY LAW, INCLUDING BUT NOT 
                LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.</p>

            <p> SMB LEGAL AND ITS ASSOCIATED PERSONS MAKE NO WARRANTY OR REPRESENTATION WITH RESPECT TO COMPLETENESS, RELIABILITY, QUALITY, ACCURACY OR AVAILABILITY OF THE SERVICE.  WITHOUT LIMITING THE FOREGOING, SMB LEGAL AND ITS ASSOCIATED PERSONS MAKE NO WARRANTY OR 
                REPRESENTATION THAT SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED OR THAT DEFECTS WILL BE CORRECTED.  NOR DO THEY MAKE ANY REPRESENTATIONS OR WARRANTIES THAT THE SERVER IS FREE OF VIRUSES OR OTHER HARMFUL 
                COMPONENTS OR THAT THE SERVICES WILL OTHERWISE MEET THE CUSTOMERS NEEDS OR EXPECTATIONS.</p>
            <p> SMB LEGAL HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE.</p>


            <br /> 

            <h4> 25. LIMITATION OF LIABILITY AND INDEMNIFICATION</h4>
            <p> EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD EATERY LEGAL CORPORATION AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER 
                OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OR CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS 
                AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF EATERY LEGAL 
                CORPORATION HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.  EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF EATERY LEGAL CORPORATION, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE FOR THE PRODUCTS 
                AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES, SOME STATES DO NOT ALLOW 
                THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
</p>
                < br/> 

            <h4> 26. GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION BY BINDING ARBITRATION</h4>
            <p> All matters relating to the site and the Terms and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of the State of California without giving effect to any choice or conflict of law provision or rules.</p>
            <p> Any legal suit, or action proceeding arising out of, or related to the Terms or the site shall be instituted exclusively in the federal courts of the United States or the courts of the State of California in each case located in the County and City of Los Angeles.  You waive any and all 
                objections to the exercise of jurisdiction over you by such courts and to venue in such courts.</p>
                <p> At the Company’s sole discretion, it may require you to submit any disputes arising from the use of these Terms or the site, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, 
                    to final and binding arbitration under the Rules of Arbitration of the American Arbitration association applying California law.</p>
               < br/> 

               <h4> 27. WAIVER AND SEVERABILITY </h4>
               <p> Any provision of the Terms either by waiver of the Company or by court or other tribunal finding the provision to be invalid, illegal, or unenforceable for any reason shall eliminate or limit that term to the minimum allowed by law while allowing the Terms other than that eliminated or limited term to remain in full force and effect.</p>

                <br /> 
                <h4> 28. ENTIRE AGREEMENT </h4>
                <p> The Terms together with the <Link to ="/PrivacyPolicy" style={{color: "#245CA6" }}> Privacy Policy </Link> constitute the sole agreement between the Customer and the Company with respect to SMB Legal and supersedes all prior and contemporaneous 
                    understandings, agreements, representations and warranties, both written and oral, with respect to the site. </p>

                < br /> 
                <h4> 29. MONITORING AND ENFORCEMENT; TERMINATION </h4>
                <p> SMB Legal has the right to take any action with respect to any user that is deemed necessary and appropriate at SMB Legal’s sole discretion.  This includes disclosing the Customer’s identity and information to a third party 
                    who claims their rights have been violated, taking appropriate legal action, and terminating or suspending access.  </p>
                <p>SMB Legal has the right to fully cooperate with law enforcement authorities or court orders directing disclosure or other information about the Customers information on the site or sites.  THE CUSTOMER WAIVES AND HOLDS HARMLESS COMPANY AND ITS AFFILIATES, 
                    LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF 
                    THE FOREGOING PARTIES DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES. </p>
                < br/> 
                <h4> 30. ACCEPTANCE OF TERMS </h4>
                <p> The Terms are entered into by the Customer and SMB Legal.  The Terms govern access and use to the site and all related services, whether as a guest or registered user. </p>
                <p> These Terms remain in full effect and force while using the site and SMB Legal may terminate access or your account at any time.  </p>
                <p> ALL PROVISIONS OF THE TERMS SHALL SURVIVE TERMINATION BY EITHER PARTY INCLUDING, WITHOUT LIMITATION, OWNERSHIP PROVISIONS, WARRANTY DISCLAIMERS, INDEMNITY, AND LIMITATIONS OF LIABILITY.</p>
                < br/> 
                <h4> 31. ACKNOWLEDGEMENT </h4>
                <p> 
                BY USING THE SITE OR OTHER SERVICES PROVIDED BY SMB LEGAL, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE AND AGREE TO BE BOUND BY THEM.  YOU UNDERSTAND THAT THESE TERMS AFFECT 
                YOUR LEGAL RIGHTS AND OBLIGATIONS AND IF YOU DO NOT AGREE TO BE BOUND BY ALL THESE TERMS YOU WILL NOT USE THIS SERVICE.</p>
                < br/> 
                <h4> 32. FORCE MAJEURE </h4>
                <p> It shall not be considered a breach of the Terms or default of these Terms or any contract with the Customer by SMB Legal and shall not be liable for any cessation, interruption, or delay in the performance of SMB Legal’s obligations hereunder by reason of earthquake, flood, fire, storm, lightning, 
                    drought, landslide, hurricane, cyclone, typhoon, tornado, natural disaster, act of God or the public enemy, epidemic, famine or plague, action of a court or public authority, change in law, explosion, war, terrorism, armed conflict, 
                    labor strike, lockout, boycott or similar event beyond our reasonable control, whether foreseen or unforeseen.  If any of the foregoing events either by themselves of in combination continue 
                    for more than 60 days in the aggregate SMB Legal may immediately terminate these Terms and shall have no liability.</p>
                < br/> 

                <h4> 33. RIGHT TO REFUSE </h4>
                <p> SMB Legal has the right to refuse service to anyone.</p>
                < br/> 
                <h4> 34. NOT A BONDED LEGAL DOCUMENT ASSISTANT </h4>
                <p> SMB Legal is not and the Customer acknowledges that SMB Legal is not a registered or bonded legal document assistant under California Business and Profession Code, sections 6400 et seq.</p>
                <br /> 
                <h4> 35. PRIVACY POLICY </h4>
                <p>SMB Legal’s <Link to ="/PrivacyPolicy" style={{color: "#245CA6" }}> Privacy Policy </Link> is incorporated herein.</p>

           
            </div>
            < br/> 
            <br />
            <br />


            
            
            
            <Footer />
            
            
            
            
            
            
            
            </div>

        );
    }
}

