import REACT from 'react';
import axios from 'axios';
import WhiteLogo from '../../assets/Logo.svg';
import Menu from '../../assets/menu-hamb.svg';

import './Navbar.css';


function Navbar() {
  return (
    <>
          <div className="nav-section">
            <div class='container'>
              <div id='container-navbar'>
                  <div class='logo-navbar'><img src={WhiteLogo} /></div>
                  <ul class='navbar-list'>
                      <a href='#Início' class='navbar-link'><li id='nav-one'>Início</li></a>
                      <a href='#Quem-Somos' class='navbar-link'><li id='nav-two'>Quem Somos</li></a>
                      <a href='#Serviços' class='navbar-link'><li id='nav-three'>Serviços e Produtos</li></a>
                      <a href='#Cases' class='navbar-link'><li id='nav-four'>Cases</li></a>
                      <a href='#Contato' class='navbar-link'><li id='nav-five'>Contato</li></a>
                  </ul>
                  <div class='responsive-menu'><img src={Menu}/></div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Navbar;