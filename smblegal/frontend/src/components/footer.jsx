import React, { Component } from 'react';
import '../App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component { 
    render() {
        return(
            <div class="footer-block">
              <br />
             <br />


           <a href="https://forms.gle/saeyHap7mxkNpvmU8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}> 
           <div class="contact-us"> 
            <center> <div class="contact-us-button"> 
              <p> Contact Us </p>
              </div>
              </center> 
              </div>
              </a>
            <div class="contact-block">
          <div class="contact-icons">
          <div class="facebook">
            <a href="https://www.facebook.com/SMB-Legal-107220167714259/" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{color: "white"}} /></a>
          </div>
          <div class="instagram">
            <a href="https://www.instagram.com/smbusinesslegal/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{color: "white"}}/> </a>
          </div>
          <div class="linkedin">
            <a href="https://www.linkedin.com/company/smb-legal/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color: "white"}} /></a>
          </div>
          </div>
          </div>

            <footer class="footer">
                <p class="footer-text"> COPYRIGHT &copy; 2020 SMBUSINESSLEGAL.COM - ALL RIGHTS RESERVED </p>
                <p class="footer-text" style={{opacity: 0.4}}> SMB Legal (Eatery Legal Corporation) is NOT a law firm, 
             is not a substitute for an attorney or law firm and cannot provide 
             legal advice.  SMB Legal provides access to self-help services 
             at your specific direction.  We cannot provide any kind of advice, 
             explanation, opinion, or recommendation about possible legal rights, 
             remedies, defenses, options, selection of forms or strategies. 
             Communication between you and SMB Legal is protected by our Privacy Policy 
             and not by attorney-client privilege and it does not constitute 
             the provision of legal advice or other professional advice by SMB Legal.  
             By relying on these documents, you assume all risk and liability that may result.  
             Review all documents carefully for accuracy before using them.  
             Your use of this site is subject to our Terms of Service. </p>
            </footer>
            </div>

        );
    }
}