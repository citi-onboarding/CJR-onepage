import REACT from 'react';
import axios from 'axios';
import WhiteLogo from '../../assets/Logo-Circular-Branca 3.svg';
import Menu from '../../assets/menu-hamb.svg';

import './Navbar.css';


function Navbar() {
  return (
    <>
          <div className="nav-section">
              <div class='container-navbar'>
                  <div class='logo-navbar'><img src={WhiteLogo} /></div>
                  <ul class='navbar-list'>
                      <li id='nav-one'>Início</li>
                      <li id='nav-two'>Quem Somos</li>
                      <li id='nav-three'>Serviços e Produtos</li>
                      <li id='nav-four'>Cases</li>
                      <li id='nav-five'>Contato</li>
                  </ul>
                  <div class='responsive-menu'><img src={Menu}/></div>
              </div>
          </div>
          <script src='./Navbar.js'></script>
    </>
  );
}

export default Navbar;