import React, { useRef } from 'react'
import './FormContact.css'
import {Button} from 'react-bootstrap'
import emailjs from '@emailjs/browser';

export default function FormContact() {

    const form = useRef();
    
    
    const handleForm = (e) => {
      e.preventDefault();
      
      console.log(form);
      document.getElementById('email').value = "" 
      document.getElementById('content').value = "" 
      emailjs.sendForm('service_lbpj2ht', 'template_2vu3o7t', form.current, 'D9wftZU3tIhsd9fhJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

    return (
        <>
            <form ref={form} className="row container-form" onSubmit={handleForm}>
              <h2>Envoyer moi un mail directement</h2>
              <label htmlFor="email">Votre adresse mail :</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Entrez votre email"
              />

              <label htmlFor="content">Votre demande :</label>
              <textarea
                id="content"
                name="content"
                placeholder="Entrez votre demande"
              ></textarea>

              <Button type="submit">Envoyer</Button>
            </form>
        </>
    )
}
