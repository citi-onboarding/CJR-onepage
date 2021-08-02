import React from 'react';
import ShapeContact from '../../assets/foca.svg';

import './Contacts.css';
import Button from '../Button/Button';

function Contacts() {
  
  return (
    <>
          <div class='contact-background' id='Contato'>
              <div class='container'>
                  <div class='contacts-section'>
                      <div class='contacts-title'>
                          Como podemos te ajudar?
                      </div>
                      <div class='contacts-body'>
                          <div class='contacts-doubt-section'>
                              <div id="doubt-info">
                                <div id='secondary-title-contact'>Ainda tem alguma dúvida?</div>
                                <div id='body-contact'>Envie sua dúvida e nossa equipe entrará em contato o mais rápido possível</div>
                              </div>
                              <div id='inputs-contact'>
                                  <div class='email-input-container'>
                                    <label id="email-label" for="email-input">Email</label>
                                    <input id="email-input" name="email-input"/>
                                  </div>
                                  <div class='message-input-container'>
                                    <label id="message-label">Escreva sua mensagem</label>
                                    <textarea id="message-input" />
                                  </div>
                                  <button type="submit" id='button-contact' value="Enviar">Enviar</button>
                              </div>
                          </div>
                          <div class='contacts-diviser'/>
                              
                          <div class='contacts-budget-section'>
                              <div class='right-up-contacts'>
                              <div id='secondary-title-contact'>Já tem uma ideia de projeto?</div>
                              <div id='body-contact'>Faça um orçamento e tire seu projeto do papel!</div>
                                  <div id='budget-button'>
                                    <Button />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class='seal-contact'><img src={ShapeContact} alt='foca'/></div>

          </div>
    </>
  );
}

export default Contacts;