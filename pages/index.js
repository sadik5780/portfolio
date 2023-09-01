import Head from "next/head";
import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";
import Script from "next/script";




export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    const [menubar, setMenubar] = useState(false)
    const handleMenuBar = () => {
        setMenubar(false)
    }



    return (
        <>
            <Head>
                <title>Sadik Shaikh</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="" />
                <link rel="canonical" href="https://accentuatefoodlab.com/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:url" content="https://accentuatefoodlab.com/" />
                <meta property="og:site_name" content="Accentuate" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="1 minute" />

                <Script type="noModule" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
                <Script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
            </Head>

            {/* section one Animation Design */}
            <div className="body_wrapper" onClick={handleMenuBar}>
                <div className="hero">
                    <div className="container">
                        <div className="col-lg-6 offset-md-3">
                            <div className="hero_text_wrapper animate__animated animate__fadeInUp" data-aos="fade-up">
                                {/* <p className="top_text">welcome to my world</p> */}

                                <p className="main_text">  I am<span className=""> </span></p>

                                <div className="btn_wrapper">

                                    <Link href="/contact" className="hero_contact_btn">Get In Touch</Link>
                                </div>
                                {/* <p className="desc_text">
                                    Passionate React.js
                                    Frontend Developer dedicated to crafting engaging and seamless
                                    user experiences. With a keen eye for design and a strong
                                    command over modern web technologies,
                                </p> */}

                            </div>
                        </div> 
                    </div>
                </div>






                <div className="find_me_wrapper animate__animated animate__fadeInLeft">
                    <p>
                        <Link href="https://www.linkedin.com/in/sadik-shaikh-60a994127/" 
                           target="_blank"  rel="noreferrer" 
                           className="linkdin">
                            <ion-icon name="logo-linkedin">
                                </ion-icon><span> </span>
                    </Link></p>
                    <p><Link href="https://github.com/sadik5780" target="_blank" rel="noreferrer" className="github"><ion-icon name="logo-github"></ion-icon><span> </span></Link></p>
                    <p><Link href="https://twitter.com/sadik5780" target="_blank" rel="noreferrer" className="twitter"><ion-icon name="logo-twitter"></ion-icon><span> </span></Link></p>
                </div>
            </div>

        </>
    );
}
