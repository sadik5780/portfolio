import React, { useState } from "react";
import Head from "next/head";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Link from "next/link";

function Contact() {
  const router = useRouter();
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

    console.log(data);

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
        router.push("/thank_you");
        // }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="contact_text_wrapper animate__animated animate__fadeInLeft">
            <h1 className="title">Let's start a project together</h1>
            <div className="cont_details">
              <p>
                <span>
                  <img src="/icon/email.png" alt="" />
                </span> 
                : sadik5780@gmail.com
              </p>
              <p>
                <span>
                  <img src="/icon/phone.png" alt="" />
                </span> 
                : 77 0909 5899
              </p>
            </div>
            <h6 className="social_title">Follow me on:</h6>
            <div className="social_wrapper">
              <span>
                <Link
                  href="https://www.instagram.com/sadik.codes/"
                  target="_blank"
                >
                  <img src="/icon/insta.svg" alt="" />
                </Link>
              </span>
              <span>
                <Link
                  href="https://www.linkedin.com/in/sadik-shaikh-60a994127/"
                  target="_blank"
                >
                  <img src="/icon/linkedin.svg" alt="" />
                </Link>
              </span>
              <span>
                <Link href="https://twitter.com/sadik5780" target="_blank">
                  <img src="/icon/twitter.svg" alt="" />
                </Link>
              </span>
              <span>
                <Link href="https://github.com/sadik5780" target="_blank">
                  <img src="/icon/github.svg" alt="" />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form_wrapper animate__animated animate__fadeInRight">
            <h3 className="form_title">
              Need to get in contact or just want to send a message my way? Use
              this form:
            </h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="validationCustom01" className="mb-4">
                <Form.Label>What's your name?</Form.Label>
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

              <Form.Group controlId="validationCustom02" className="mb-4">
                <Form.Label>What's your email id?</Form.Label>
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

              <Form.Group controlId="validationCustom03" className="mb-4">
                <Form.Label>What's your contact number?</Form.Label>
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

              <Form.Group controlId="validationCustom04" className="mb-4">
                <Form.Label>What services are you looking for?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  defaultValue={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Tell us what's on your mind!"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your requirement
                </Form.Control.Feedback>
              </Form.Group>
              <div className="btn_wrapper d-flex ">
                <Button type="submit" className="cx-btn-1 mt-2 ms-auto">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
