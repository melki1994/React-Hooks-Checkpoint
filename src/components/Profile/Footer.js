import React from 'react'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';


function End() {
    return (
        
     <div>
       <Footer size="mini">
       <FooterSection type="left" logo="Where You Watch" style={{fontStyle:"italic",fontSize:"30px",fontWeight:"bold"}}></FooterSection>
         <FooterSection type="right">
         <FooterLinkList>
            <a href="https://www.facebook.com/"><FaFacebook/></a>
            <a href="https://www.instagram.com/"><FaInstagram/></a>
            <a href="https://fr.linkedin.com/"><FaLinkedin/></a>
            <a href="https://twitter.com/"><FaTwitter/></a>
        </FooterLinkList>
         </FooterSection>
       </Footer>
     </div>

)
}
export default End