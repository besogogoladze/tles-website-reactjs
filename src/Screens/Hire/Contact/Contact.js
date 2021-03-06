import React, { useState } from 'react';
import emailjs from "emailjs-com"; 
import emailAudio0 from "../../../Sounds/email.mp3"
import { useTranslation } from 'react-i18next';
import { Col, Form, InputGroup, Row, Toast } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
function Contact() {

  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const {t} = useTranslation();

  let emailAudio = new Audio(emailAudio0)

  function emailSend() {
    emailAudio.play();
    setShow(true)
  }

function FormExample() {

  function Example() {
  
    return (
      <Row className="bg-light position-fixed end-30 top-150">
        <Col className="w-100" xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <FontAwesomeIcon icon={faCheck} className="text-light bg-success fontSize-xLarge rounded p-1" />
              <strong className="me-auto ms-1">Successful</strong>
            </Toast.Header>
            <Toast.Body>You have sent an email successful!!!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else {
      event.preventDefault();
      emailjs.sendForm('service_wxbc7no', "template_xxz486l", event.target, "user_2SQWy9hxYngZewLTbgpkm") 
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset();
      emailSend();
      Example();
    }
    setValidated(true);

  };

  return (
    <>
      <Form className='border border-2 p-2 d-flex flex-column align-items-center' noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 className='text-dark text-center'>Contact</h1>
        <Row className="mb-3 w-100">
          <Form.Group md="4" className='w-100 p-0' controlId="validationCustom01">
            <Form.Label>{t('Data.Contact.1')}</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder={t('Data.Contact.1')}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a first name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" className='w-100 p-0' controlId="validationCustom02">
            <Form.Label>{t('Data.Contact.3')}</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder={t('Data.Contact.3')}
              name="lastName"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a last name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" className='w-100 p-0' controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                className='m-0'
                type="text"
                placeholder={t('Data.Contact.2')}
                aria-describedby="inputGroupPrepend"
                required
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a Email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Form.Select defaultValue={"selected"} name="subject" aria-label="Default select example">
          <option value="selected" disabled >{t('Data.Contact.5')}</option>
          <option>{t('Data.Contact.6')}</option>
          <option>{t('Data.Contact.7')}</option>
        </Form.Select>
        <Form.Check className='w-100' feedback="You must agree before submitting."
            feedbackType="invalid">
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Label name="sex" className='mt-2'>{t('Data.Contact.8')}</Form.Label>
              <Form.Check
                label={t('Data.Contact.9')}
                value={t('Data.Contact.9')}
                name="sex"
                type={type}
                id={`default-${type}-1`}
              />
              <Form.Check
                label={t('Data.Contact.10')}
                value={t('Data.Contact.10')}
                name="sex"
                type={type}
                id={`default-${type}-2`}
              />
            </div>
          ))}
          <Form.Control.Feedback type="invalid">
            Please choose your Sex!
          </Form.Control.Feedback>
        </Form.Check>
        <Form.Check className='w-100'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t('Data.Contact.11')}</Form.Label>
            <Form.Control placeholder="max length 150..." maxLength="50" name="message" as="textarea" rows={3} />
          </Form.Group>
        </Form.Check>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label={t('Data.Contact.12')}
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">{t('Data.Contact.13')}</Button>
      </Form>
      <Example />
    </>
  );
}


  return <div>
      <FormExample />
  </div>;
}

export default Contact;


  // const [value, setValue] = React.useState('');


  
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  //   function sendEmail(e) {
  //     e.preventDefault();
  //     emailjs.sendForm('service_wxbc7no', "template_xxz486l", e.target, "user_2SQWy9hxYngZewLTbgpkm") 
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset()
  // }



  // <div className="container">
  //   <form onSubmit={sendEmail}>
  //     <div className="row pt-5 mx-auto w-100">
  //       <div className="col-8 form-group mx-auto w-100">
  //           <input type="text" onChange={handleChange} value={value} className="form-control" placeholder={t('Data.Contact.1')} name="name"/>
  //       </div>
  //       <div className="col-8 form-group pt-3 mx-auto w-100">
  //           <input type="email" onChange={handleChange} value={value} className="form-control" placeholder={t('Data.Contact.2')} name="email"/>
  //       </div>
  //       <div className="col-8 form-group pt-3 mx-auto w-100">
  //           <input type="text" onChange={handleChange} value={value} className="form-control" placeholder={t('Data.Contact.3')} name="subject"/>
  //       </div>
  //       <div className="col-8 form-group pt-3 mx-auto w-100">
  //         <label>{t('Data.Contact.4')}</label>
  //         <select defaultValue={"selected"} name="poste" id="poste-select" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  //           <option value="selected" disabled >{t('Data.Contact.5')}</option>
  //           <option onChange={handleChange} value={value}>{t('Data.Contact.6')}</option>
  //           <option onChange={handleChange} value={value}>{t('Data.Contact.7')}</option>
  //         </select>
  //       </div>
  //       <div className="col-8 form-group pt-3 mx-auto w-100">
  //         <p className='mb-0'>{t('Data.Contact.8')}</p>
  //         <div className='d-flex align-items-start flex-column'>
  //           <div>
  //             <input onChange={handleChange} name="sexe" type="radio" value={value} />
  //             <label className='ps-2'>{t('Data.Contact.9')}</label>
  //           </div>
  //           <div>
  //             <input onChange={handleChange} name="sexe" type="radio" value={value} />
  //             <label className='ps-2'>{t('Data.Contact.10')}</label>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-8 form-group pt-3 mx-auto w-100">
  //           <textarea onChange={handleChange} value={value} className="form-control" id="" cols="30" rows="8" placeholder={t('Data.Contact.11')} name="message"></textarea>
  //       </div>
  //       <div className="col-8 pt-3 mx-auto w-100">
  //           <input disabled={!value} type="submit" onClick={emailSend} className="btn btn-info" value={t('Data.Contact.12')}></input>
  //       </div>
  //     </div>
  //   </form>
  // </div>