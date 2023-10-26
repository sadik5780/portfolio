import Head from "next/head";
import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Script from "next/script";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { clarity } from "react-microsoft-clarity";

export default function Home() {
  useEffect(() => {
    AOS.init();
    const config = {
      id: "jgj8weuzrm",
      domain: "https://portfolio-xuj8-sadik5780.vercel.app/",
    };

    clarity(config);
  }, []);
  const [menubar, setMenubar] = useState(false);
  const handleMenuBar = () => {
    setMenubar(false);
  };

  return (
    <>
      <Head>
        <title>Sadik Shaikh</title>
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
      <div className="hero_page">
        <div className="container">
          <div className="hero_text_wrapper">
            <p className="top_text animate__animated animate__fadeInUp">
              Hi, my name is
            </p>
            <h1 className="main_text animate__animated animate__fadeInUp">
              Sadik Shaikh. <br />
              <span className="animate__animated animate__fadeInUp">
                I build things for the web.
              </span>
            </h1>
            <p className="desc animate__animated animate__fadeInUp">
              I'm a software engineer specializing in building exceptional
              digital experience. <br /> Currently, I'm focused on building
              accessible, <br />
              human-centered products.
              {/* at <Link href="/">Shaats</Link> */}
            </p>

            <Link
              href="/contact"
              className="cx-btn-1 animate__animated animate__fadeInUp"
            >
              Let's have a coffee together!
            </Link>
          </div>
        </div>
        <div className="hero_projects_slider animate__animated animate__fadeInUp">
          <Splide
            //   hasTrack={false}
            aria-label="My Projects"
            options={{
              type: "loop",
              gap: "30px",
              drag: "free",
              arrows: true,
              pagination: false,
              focus: 0,
              perPage: 4,
              perMove: 1,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: true,
                speed: 0.0,
              },
              breakpoints: {
                1920: { perPage: 4, gap: "1rem" },
                1366: { perPage: 4, gap: "1rem" },
                991: { perPage: 4, gap: "1rem" },
                768: { perPage: 3, gap: "1rem" },
                580: { perPage: 3, gap: "1rem" },
                520: { perPage: 2, gap: "1rem" },
                480: { perPage: 2, gap: "1rem" },
                420: { perPage: 2, gap: "1rem" },
                360: { perPage: 2, gap: "1rem" },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/1.jpg" alt="Dulheraja" />
                <div className="project_text_wrapper">
                  <p className="project_name">DulheRaja, Bhopal</p>
                  <div className="project_tech">
                    <span>React</span>
                    <span>GSAP</span>
                    <span>Styled-Components</span>
                    <span>Bootstrap</span>
                    <span>Jquery</span>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/shoeb.png" alt="Shoeb Mashadi" />
                <div className="project_text_wrapper">
                  <p className="project_name">Shoeb Mashadi</p>
                  <p className="project_tech">
                    <span>NextJS</span>
                    <span>Bootstrap</span>
                    <span>anime.js</span>
                    <span>FancyBox</span>
                    <span>GSAP</span>
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/priyanka.png" alt="Priyanka Kumari" />
                <div className="project_text_wrapper">
                  <p className="project_name">Priyanka Kumari</p>
                  <p className="project_tech">
                    <span>ReactJS</span>
                    <span>GSAP</span>
                    <span>Bootstrap</span>
                    <span>Animate</span>
                    <span>FancyBox</span>
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/punjab.jpg" alt="New Punjab Hotel" />
                <div className="project_text_wrapper">
                  <p className="project_name">New Punjab Hotel</p>
                  <p className="project_tech">
                    <span>PHP</span>
                    <span>AOS</span>
                    <span>Bootstrap</span>
                    <span>Animate</span>
                    <span>JQuery</span>
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/topbarter.jpg" alt="Image 6" />
                <div className="project_text_wrapper">
                  <p className="project_name">TopBarter</p>
                  <p className="project_tech">
                    <span>NextJS</span>
                    <span>NodeJS</span>
                    <span>Strapi CMS</span>
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/energen.jpg" alt="Image 6" />
                <div className="project_text_wrapper">
                  <p className="project_name">Energen Global FZC</p>
                  <p className="project_tech">
                    <span>Javascript</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                  </p>
                </div>
              </div>
            </SplideSlide>
            {/* <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/1.jpg" alt="Image 4" />
                <div className="project_text_wrapper">
                  <p className="project_name">Green Fields Highschool</p>
                  <p className="project_tech">
                    <span>tech1</span>
                    <span>tech1</span>
                  </p>
                </div>
              </div>
            </SplideSlide> */}
            {/*    <SplideSlide>
              <div className="project_item">
                <div className="project_overlay"></div>
                <img src="../images/1.jpg" alt="Image 5" />
                <div className="project_text_wrapper">
                  <p className="project_name">Overtake Exclusive</p>
                  <p className="project_tech">
                    <span>tech1</span>
                    <span>tech1</span>
                  </p>
                </div>
              </div>
            </SplideSlide>
            */}
          </Splide>
        </div>
      </div>
    </>
  );
}
