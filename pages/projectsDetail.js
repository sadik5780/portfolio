import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import Link from "next/link";

function projectsDetail() {
  const [imageData, setImageData] = useState([]);
  // console.log(data[0].images);
  useEffect(() => {
    setImageData(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Projects | Sadik Shaikh</title>
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
      <div className="container">
      <div className="row">
          {imageData?.map((item, index) => {
            console.log(item);
            return (
              <>
                <div className="col-md-4">
                  <Link href="/projectsDetail">
                  <img src={item.images[0]} alt="" className="img-fluid" />
                  <p>Lorem222</p>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default projectsDetail;
