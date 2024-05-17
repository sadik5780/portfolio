import Link from "next/link";
import React, { useEffect, useState } from "react";
import "animate.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [menubar, setMenubar] = useState(false);

  const handleMenuBar = () => {
    setMenubar(!menubar);
  };

  useEffect(() => {
    const handleRouteChange = () => { 
      setMenubar(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="nav_wrapper">
            <div className="logo_wrapper">
              <Link href="/">
                <picture>
                  <source
                    media="(max-width:580px)"
                    srcSet="../images/logo2.png"
                    className="logo2"
                  />
                  <source
                    media="(min-width:768px)"
                    srcSet="../images/logo.png"
                  />
                  <img src="../images/logo.png" alt="Logo" className="logo" />
                </picture>
              </Link>
            </div>
            <div className="menu_wrapper">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="contact_cta_btn">
                  <Link href="/contact">Let's Talk</Link>
                </li>
              </ul>
            </div>
            <div className="menu_btn" onClick={handleMenuBar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {menubar && (
              <div className="res_menu animate__animated animate__fadeInRight"
              key={menubar}>
                <div className="close_btn" onClick={handleMenuBar}></div>
                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li className="contact_cta_btn">
                    <Link href="/contact">Let's Talk</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
