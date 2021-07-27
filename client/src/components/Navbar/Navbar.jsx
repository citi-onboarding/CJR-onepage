import REACT, {useState} from 'react';
import WhiteLogo from '../../assets/Logo.svg';
import BlueLogo from '../../assets/LogoBlue.svg';
import Close from '../../assets/Close.svg';
import Menu from '../../assets/menu-hamb.svg';
import MenuBlue from '../../assets/burguer-blue.svg';

import './Navbar.css';


function Navbar() {
  const [navbarClosed, setNavbarClosed] = useState(true);
  const [navbarWhite, setNavbarWhite] = useState(true);

  window.addEventListener('scroll', function() { 
    if (window.innerHeight - window.scrollY <= 40) {
      document.querySelector('.nav-section').classList.add('nav-down');
      document.querySelector('#nav-one').classList.add('text-blue');
      document.querySelector('#nav-two').classList.add('text-blue');
      document.querySelector('#nav-three').classList.add('text-blue');
      document.querySelector('#nav-four').classList.add('text-blue');
      setNavbarWhite(false);
    } else {
      document.querySelector('.nav-section').classList.remove('nav-down');
      document.querySelector('#nav-one').classList.remove('text-blue');
      document.querySelector('#nav-two').classList.remove('text-blue');
      document.querySelector('#nav-three').classList.remove('text-blue');
      document.querySelector('#nav-four').classList.remove('text-blue');
      setNavbarWhite(true)
    }
  });

  const openMenu = () =>{
    setNavbarClosed(!navbarClosed)
    if (!navbarClosed){
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  return (
    <>
          <div className="nav-section">
            <div class='container'>
              <div id='container-navbar'>
                  <div class='logo-navbar'>{navbarWhite ? <img src={WhiteLogo} />:<img src={BlueLogo} />}</div>
                  <ul class='navbar-list'>
                      <a href='#Início' class='navbar-link'><li id='nav-one'>Início</li></a>
                      <a href='#Quem-Somos' class='navbar-link'><li id='nav-two'>Quem Somos</li></a>
                      <a href='#Serviços' class='navbar-link'><li id='nav-three'>Serviços e Produtos</li></a>
                      <a href='#Cases' class='navbar-link'><li id='nav-four'>Cases</li></a>
                      <a href='#Contato' class='navbar-link'><li id='nav-five'>Contato</li></a>
                  </ul>
                  <div class='responsive-menu'>
                    <div class='navbar-mobile'className={navbarClosed ? 'navbar-open' : 'navbar-close'}>
                      <img class='close-menu' src={Close} onClick ={()=> openMenu()}/>
                      <ul class='navbar-list-mobile'>
                        <a href='#Início' class='navbar-link-mobile' onClick ={()=> openMenu()}><li id='nav-one'>Início</li></a>
                        <a href='#Quem-Somos' class='navbar-link-mobile' onClick ={()=> openMenu()}><li id='nav-two'>Quem Somos</li></a>
                        <a href='#Serviços' class='navbar-link-mobile' onClick ={()=> openMenu()}><li id='nav-three'>Serviços e Produtos</li></a>
                        <a href='#Cases' class='navbar-link-mobile' onClick ={()=> openMenu()}><li id='nav-four'>Cases</li></a>
                        <a href='#Contato' class='navbar-link-mobile' onClick ={()=> openMenu()}><li id='nav-five'>Contato</li></a>
                      </ul>
                    </div>              
                    {navbarWhite ? <img class='burguer-menu' src={Menu} onClick ={()=> openMenu()}/> :<img class='burguer-menu' src={MenuBlue} onClick ={()=> openMenu()}/> }
                  </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Navbar;