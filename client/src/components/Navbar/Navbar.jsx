import REACT from 'react';
import axios from 'axios';
import WhiteLogo from '../../assets/Logo-Circular-Branca 3.svg';
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
                      <a href='#container-navbar' class='navbar-link'><li id='nav-one'>Início</li></a>
                      <a href='' class='navbar-link'><li id='nav-two'>Quem Somos</li></a>
                      <a href='#services-title' class='navbar-link'><li id='nav-three'>Serviços e Produtos</li></a>
                      <a href='#cases-background' class='navbar-link'><li id='nav-four'>Cases</li></a>
                      <a href='#contacts-section' class='navbar-link'><li id='nav-five'>Contato</li></a>
                  </ul>
                  <div class='responsive-menu'><img src={Menu}/></div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Navbar;