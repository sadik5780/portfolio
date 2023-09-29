import React, { useState } from 'react';
import Head from 'next/head';

function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [form, setForm] = useState({
    state: '',
    message: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading', message: 'Sending....' });

      try {
        const res = await fetch('/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });

        const data = await res.json();

        if (data.error) {
          setForm({ state: 'error', message: data.error });
        } else {
          setForm({
            state: 'success',
            message: 'Your message was sent successfully.',
          });
          setInputs({ name: '', email: '', message: '' });
        }
      } catch (error) {
        setForm({ state: 'error', message: 'Something went wrong' });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Me | Sadik Shaikh</title>
        {/* Add your meta tags and other head elements here */}
      </Head>
      <div className="container">
        <form className="form" onSubmit={onSubmitForm}>
          <input
            id="name"
            type="text"
            value={inputs.name}
            onChange={handleChange}
            className="inputField"
            placeholder="Name"
            required
          />
          <input
            id="email"
            type="email"
            value={inputs.email}
            onChange={handleChange}
            className="inputField"
            placeholder="Email"
            required
          />
          <textarea
            id="message"
            type="text"
            value={inputs.message}
            onChange={handleChange}
            className="inputField"
            placeholder="Message"
            rows="5"
            required
          />
          <input type="submit" className="button" />
        </form>
        {form.state === 'loading' && <div>Sending....</div>}
        {form.state === 'error' && <div>{form.message}</div>}
        {form.state === 'success' && <div>Sent successfully</div>}
      </div>
    </>
  );
}

export default Contact;
