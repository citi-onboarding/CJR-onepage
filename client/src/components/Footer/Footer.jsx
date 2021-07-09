import React from 'react'
import InstagramLogo from '../../assets/insta.svg'
import LinkedinLogo from '../../assets/linkedin.svg'
import FacebookLogo from '../../assets/facebook.svg'

import './Footer.css';

function Footer() {

  return (
    <>
      <div class='footer-background'>
        <div class='container'>
          <div class='footer-content'>
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
            <div class='imagens'>
                <div><a class='green-circle' href="https://www.instagram.com/cjr.unb/"><img src={InstagramLogo}/></a></div>
                <div><a class='green-circle' href="https://www.linkedin.com/company/cjr-unb/"><img src={LinkedinLogo}/></a></div>
                <div><a class='green-circle' href="https://www.facebook.com/unb.cjr/"><img src={FacebookLogo}/></a></div>
            </div>
          </div>
          <div class='footer'>
            <p class='developed'>Desenvolvido por <a class='citi' href="https://citi.org.br/">CITi</a></p>
          </div>
        </div>
        <div id='rectangle'></div>
      </div>
    </>
  );
}

export default Footer;