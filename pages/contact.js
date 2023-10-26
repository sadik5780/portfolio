import React, { useState } from "react";
import Head from "next/head";
import { FloatingLabel, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button"; 

function Contact() { 
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      handleFormSubmit(e);
    }

    setValidated(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      number,
      message,
    };

    fetch("/api/form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        // if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          navigate("/thank_you");
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your name"
            defaultValue={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name here.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter your email"
            defaultValue={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter correct email id.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Enter your contact number"
            defaultValue={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter correct email id.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            required
            defaultValue={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your requirement
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default Contact;
