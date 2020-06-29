import React, { Component } from 'react';
import '../App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

export default class Footer extends Component { 
    render() {
        return(
            <div class="block">
            <div class="contact-block">
          <div class="contact-icons">
          <div class="facebook">
            <a href="https://www.facebook.com/SMB-Legal-107220167714259/"><FacebookIcon style={{color: "#245CA6"}} /></a>
          </div>
          <div class="instagram">
            <a href="https://www.instagram.com/smbusinesslegal/"><InstagramIcon style={{color: "#245CA6"}}/> </a>
          </div>
          <div class="linkedin">
            <a href="https://www.linkedin.com/company/smb-legal/"><LinkedInIcon style={{color: "#245CA6"}} /></a>
          </div>
          </div>
          </div>

            <footer class="footer">
                <p> COPYRIGHT &copy; 2020 SMBUSINESSLEGAL.COM - ALL RIGHTS RESERVED </p>
                <p style={{opacity: 0.4}}> SMB Legal (Eatery Legal Corporation) is NOT a law firm, 
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