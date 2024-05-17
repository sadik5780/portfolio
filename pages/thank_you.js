import Head from "next/head";
import Script from "next/script";
import React from "react";

function thankyou() {
  return (
    <>
      <Head>
        <title> Success | Sadik Shaikh</title>
        <link rel="icon" href="./images/favicon.png" sizes="any" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="" />
        <link rel="canonical" href="https://sadikshaikh.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://sadikshaikh.com/" />
        <meta property="og:site_name" content="sadik" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="1 minute" />

        <Script
          type="noModule"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </Head>
      <div className="thank_you_page">
        <div className="container">
          <div className="thankYouPage">
            <h3 className="title animate__animated animate__fadeInUp">
              Thank You !
            </h3>
            <p className="animate__animated animate__fadeInUp">
              for reaching out to me. Your form has been successfully submitted.
            </p>
            <p className="animate__animated animate__fadeInUp">
              I will get back to you as soon as possible.
            </p>
            <p className="animate__animated animate__fadeInUp">
              Have a great day!
            </p>
            <div className="contact_cta_btn">
              <a href="/">Home</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default thankyou;
