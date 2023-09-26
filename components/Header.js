import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import 'animate.css';
import { motion } from "framer-motion";

export default function Header() {
  const [menubar, setMenubar] = useState(false);
  const handleMenuBar = () => {
    setMenubar(!menubar);
  };

  // function handleMenuBar() {
  //     document.querySelector('.main-sidebarmenu').classList.toggle('main-sidebarmenu-active')
  // }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="nav_wrapper">
            <div className="logo_wrapper">
              <Link href="/">Sadik</Link>
            </div>
            <div className="menu_wrapper">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
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
              <motion.div
                // animate={{ y: 100 }}
                // initial={false} 
                // transition={{
                //   duration: 0.8,
                //   delay: 0.5,
                //   ease: [0, 0.71, 0.2, 1.01],
                // }}
                className="res_menu animate__animated animate__fadeInDown"
              >
                <div className="close_btn" onClick={handleMenuBar}></div>
                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/contact">Let's Talk</Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
