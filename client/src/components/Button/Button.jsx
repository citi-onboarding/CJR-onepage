import React from 'react';
import './Button.css';
import external_link_icon from '../../assets/external-link-icon.svg'

function Button() {
  return(
    <button id='button-component'>
      <a href="https://contatocjr.typeform.com/to/WyhLH3?typeform-embed=embed-fullpage">
        Fazer orçamento
      </a>
      <img src={external_link_icon} alt='Fazer orçamento' />
    </button>
  )
}

export default Button;