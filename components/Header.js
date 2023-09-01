import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image"; 



export default function Header() {

    const [menubar, setMenubar] = useState(false)
    const handleMenuBar = () => {
        setMenubar(!menubar)
    }



    // function handleMenuBar() {
    //     document.querySelector('.main-sidebarmenu').classList.toggle('main-sidebarmenu-active')
    // }



    return (
        <>
            <div className="customnavbar" id="customnavbar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            {/* <img
                                src='/images/acc/logo_dark.png'
                                alt="Sadik"
                            /> */}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" href="/">
                            {/* <img
                                src='/images/acc/logo_dark.png'
                                alt="Sadik"
                            /> */}
                            {/* <Typed
                                    strings={['Sadik Shaikh']}
                                    typeSpeed={40}
                                />  */}

                            <p>
                                {/* <Typed
                                strings={["Sadik ",
                                    'Shaikh']}
                                typeSpeed={100}
                                backSpeed={100}  
                                loop /> */}
                                sadik shaikh
                            </p>
                            {/* </Typed> */}

                        </Link>
                        <button className="btn btn-primary menu_btn" onClick={setMenubar}>Menu</button>
                        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <div className="nav-link main-sidebarmenu-btn">
                                    </div>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
                <div className="responsivemenuicon-btn">
                    <div onClick={handleMenuBar}><i className="fa fa-bars"></i></div>
                </div>
            </div>

            {/* main-sidebarmenu */}
            {menubar ?
                <div
                    className="main-sidebarmenu">
                    <div className="main-sidebarmenu-close" onClick={handleMenuBar}></div>
                    <div className="main-sidebarmenu-wrapper">
                        <div className="main-sidebarmenu-rightnav">
                            <nav className="navbar navbar-expand-lg">
                                <div id="navbarSupportedContentSidebar">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                        <li className="nav-item desktopservicemenu">
                                            <Link className="nav-link" href="/" onClick={handleMenuBar}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/projects" onClick={handleMenuBar}>Projects</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contact" onClick={handleMenuBar}>Contact Me</Link>
                                        </li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                : ""}

        </>
    )
}