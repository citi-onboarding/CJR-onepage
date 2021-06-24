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
                              <div id='left-three'><img src={EmailContact} /></div>
                              <div id='left-four'><img src={EmailRectangle} /></div>
                              <div id='left-five'><img src={SendMessage} /></div>
                              <div id='left-six'><img src={MessageRectangle} /></div>
                              <div id='send'><img src={SendButton} /></div>
                          </div>
                          <div class='contacts-middle'>
                              <img src={RectangleContact} />
                          </div>
                          <div class='contacts-right'>
                              <div class='right-up-contacts'>
                              <div id='contact-one'><img src={Idea} /></div>
                              <div id='contact-two'><img src={MakeBudget} /></div>
                              <div id='contact-three'><img src={BudgetContact} /></div>
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