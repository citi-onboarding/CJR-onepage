import React from 'react'
import InstagramLogo from '../../assets/instagram-logo.svg'
import LinkedinLogo from '../../assets/linkedin-logo.svg'
import FacebookLogo from '../../assets/facebook-logo.svg'
import Rectangle from '../../assets/rectangle.svg'

import './Footer.css';

function Footer() {

  return (
    <>
          <div class='footer-content'>
              <div class='container-footer'>
                  <div class='text'>
                      <div>
                          <p class='nameadress'>ENDEREÇO</p>
                          <p class='adress'>UnB, Brasília, Distrito Federal 70910-900, BR</p>
                      </div>
                      <div>
                          <p class='contact'>CONTATO</p>
                          <p class='email'>contato@cjr.org.br</p>
                      </div>
                  </div>
                  <p class='developed'>Desenvolvido por</p>
                  <a class='citi' href="https://citi.org.br/">CITi</a>
                  <div class='imagens'>
                      <div><a href="https://www.instagram.com/cjr.unb/"><img src={InstagramLogo}/></a></div>
                      <div><a href="https://www.linkedin.com/company/cjr-unb/"><img src={LinkedinLogo}/></a></div>
                      <div><a href="https://www.facebook.com/unb.cjr/"><img src={FacebookLogo}/></a></div>
                  </div>
              </div>
              <div id='rectangle'><img src={Rectangle}/></div>
          </div>
    </>
  );
}

export default Footer;