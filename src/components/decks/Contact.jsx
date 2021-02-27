import React from 'react';
import SideNav from './SideNav'
import ContactForm from '../ContactForm'
import '../../styles/Contact.css'


function Contact () {
 
    return (
      <div className="Deck">
          <SideNav pages={['Contact']}/>
          <div className='PagesSection'>
          <div className='Page' id='Contact'>
            <h1 className="PageTitle">Contact</h1>
            <hr></hr> 
            <ContactForm/>
          </div>
          </div>
      </div>
    );


}

export default Contact;