import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactsTitle from '../../assets/contact-title.svg';
import RectangleContact from '../../assets/rectangle-contact.svg';
import ShapeContact from '../../assets/foca.svg';
import DoubtContact from '../../assets/doubt-contact.svg';
import SendDoubt from '../../assets/send-doubt.svg';
import EmailContact from '../../assets/Email.svg';
import EmailRectangle from '../../assets/email-rectangle.svg';
import SendMessage from '../../assets/write-message.svg';
import MessageRectangle from '../../assets/message-rectangle.svg';
import SendButton from '../../assets/enviar-button.svg';
import Idea from '../../assets/idea.svg';
import MakeBudget from '../../assets/make-budget.svg';
import BudgetContact from '../../assets/budget-contact.svg';

import './Contacts.css';

function Contacts() {
  
  return (
    <>
          <div class='contact-background'>
              <div class='container'>
                  <div class='contacts-section'>
                      <div class='contacts-up'>
                          <img src={ContactsTitle} />
                      </div>
                      <div class='contacts-down'>
                          <div class='contacts-left'>
                              <div id='left-one'><img src={DoubtContact} /></div>
                              <div id='left-two'><img src={SendDoubt} /></div>
                              <div id='inputs-contact'>
                                  <div><label for="fname"><img src={EmailContact}/></label></div>
                                  <div><input type="text" id="fname" name="fname"></input></div>
                                  <div><label for="lname"><img src={SendMessage}/></label></div>
                                  <div><input type="text" id="lname" name="lname"></input></div>
                                  <div><input type="submit" id='sname' value="Enviar"></input></div>
                              </div>
                          </div>
                          <div class='contacts-middle'>
                              <img src={RectangleContact} />
                          </div>
                          <div class='contacts-right'>
                              <div class='right-up-contacts'>
                              <div id='contact-one'><img src={Idea} /></div>
                              <div id='contact-two'><img src={MakeBudget} /></div>
                              <a href="https://contatocjr.typeform.com/to/WyhLH3?typeform-embed=embed-fullpage"><div id='contact-three'><img src={BudgetContact} /></div></a>
                              </div>
                              <div class='seal-contact'><img src={ShapeContact} /></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  );
}

export default Contacts;