import React from "react";
import "./Info.css";
import { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Form, Button } from "react-bootstrap";
import Email from "../../media/Email.png"; 
import Github from "../../media/Github.png"; 
import Linkedin from "../../media/Linkedin.png"; 


const Info = () => { 

  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_7exznhq", "template_atosgig", formRef.current, "_KpxRz03w6SRZ1tVw")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        }
      );
  };

  return (
    <div className="info-container">
      <div className="info">
        <h1 className="title">¡Discutamos tus proyectos!</h1>
        <div className="redes">
        <p>
          <b>Hola, ¿como están?</b>
          <br/>
          No duden en dejarme un mensaje por si querés charlar sobre algún proyecto que quieres que produzca. También si quieres darme una oportunidad o recomendarme algún puesto de trabajo
        </p>
          <div className="c-info-item">
            <a>
            <img src={Email} className="c-icon"/> agustinporta2000@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="formulario">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label> Nombre </Form.Label>
            <Form.Control type="text" placeholder="Name" name="user_name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label> Tema </Form.Label>
            <Form.Control type="text" placeholder="Subject" name="user_subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label> Email </Form.Label>
            <Form.Control type="text" placeholder="Email" name="user_email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label> Texto </Form.Label>
            <Form.Control rows="5" as="textarea" placeholder="Message" name="message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Info;
