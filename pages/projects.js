import Head from "next/head";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import Link from "next/link";

function Projects() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    setImageData(data);
  }, []);

// Project List
// 1. Shoeb Mashadi (shoebmashadi.com)
// 2. Priyanka Kumari (ipriyankakumari.com)
// 3. Accentuate Food Lab (accentuatefoodlab.com)
// 4. Social Whistles Studio (socialwhistles.studio)
// 5. Topbarter (topbarter.com)
// 6. Febza Chairs (febzachairs.com)
// 7. Energen Global FZC (energenglobalfzc.com)
// 8. Dulheraja (dulheraja.co.in)
// 9. Hotel New Punjab (hotelnewpunjab.com)

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
          {imageData?.map((item, index) => (
            <div key={index} className="col-md-4">
              <Link href="/projectsDetail">
                <img src={item.images[0]} alt="" className="img-fluid" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
