import React from 'react'
import './Contact.css'
import FormContact from '../../Components/FormContact/FormContact'

export default function Contact() {
  return (
    <>  
      <div className="contact-title">
        <h1>Contactez-moi</h1>
        <img src="/img/icons8-contacts-100.png" alt="contact"></img>
      </div>
      <div className="container-contact">
        <ul className='listContact'>
          <li>Par mail : manathane.co@gmail.com</li>
          <FormContact />
        </ul>
      </div>
    </>
  )
}
