// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// export default function Footer() {
//     return (
//         <>
//             <div className="footer">
//                 <div className="footer-inner">
//                     <div className="container">
//                         <div className="footer-logo">
//                             <img src="/images/redbytes_logo.png" alt="logo"></img>
//                         </div>
//                     </div>
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-3">
//                                 <div className="footer-heading">Hire App Developers</div>
//                                 <div className="footer-nav">
//                                     <ul>
//                                         <li><Link href="/hire-android-developers/">Hire Android Developers</Link>
//                                         </li>
//                                         <li> <Link href="/hire-ios-developers/">Hire iOS Developers</Link></li>
//                                         <li> <Link href="/hire-xamarin-developers/">Hire Xamarin Developers</Link>
//                                         </li>
//                                         <li><Link href="/hire-cross-platform-developers/">Hire Cross-Platform
//                                             Developers</Link></li>
//                                         <li><Link href="/hire-react-native-developers/">Hire React Native
//                                             Developers</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3">
//                                 <div className="footer-heading">Technology</div>
//                                 <div className="footer-nav">
//                                     <ul>
//                                         <li><Link href="/ios-app-development-company/">iOS App
//                                             Development</Link></li>
//                                         <li><Link href="/firebase-development-services/">Firebase
//                                             Development Services</Link></li>
//                                         <li><Link href="/react-native-app-development-agency/">React Native
//                                             App Development</Link></li>
//                                         <li><Link href="/xamarin-cross-platform-development-company/">Xamarin
//                                             App Development</Link></li>
//                                         <li><Link href="/android-app-development/">Android App
//                                             Development</Link></li>
//                                         <li><Link href="/mvp-app-development/">MVP App Development</Link>
//                                         </li>
//                                         <li><Link href="/outsystems/">Outsystems</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3">
//                                 <div className="footer-heading">Solutions</div>
//                                 <div className="footer-nav">
//                                     <ul>
//                                         <li><Link href="/enterprise-mobile-app-development/">Enterprise
//                                             Mobile App Development</Link></li>
//                                         <li><Link href="/tracking-and-delivery-app-development/">Tracking
//                                             And Delivery</Link></li>
//                                         <li><Link href="/marketplace-app-development/">Marketplace App
//                                             Development</Link></li>
//                                         <li><Link href="/iot-app-development/">IoT App Development</Link>
//                                         </li>
//                                         <li><Link href="/on-demand-services-app-development/">On
//                                             Demand Services App Development</Link></li>
//                                         <li><Link href="/donation-app-development/">Donation App
//                                             Development</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3">
//                                 <div className="footer-heading">Our Sister Sites</div>
//                                 <div className="footer-nav">
//                                     <ul>
//                                         <li><a href="https://www.edsys.in/" target="_blank" rel="noreferrer">Edsys-Education Systems &amp; Solutions </a></li>
//                                         <li><a href="https://testbytes.net/" target="_blank" rel="noreferrer">Testbytes-Software Testing Services</a></li>
//                                         <li><a href="https://www.probytes.net/" target="_blank" rel="noreferrer">Probytes-Web Development Services</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-3">
//                                 <div className="footer-heading">
//                                     <Link href='/app-maintenance-and-support/'>App Maintenance & Support</Link>
//                                 </div>
//                                 <div className="footer-heading">Education</div>
//                                 <div className="footer-nav">
//                                     <ul>
//                                         <li><Link href="/educational-app-development/">Education App
//                                             Development</Link></li>
//                                         <li><Link href="/learning-management-system/">Learning Management
//                                             System</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3">
//                                 <div className="footer-heading">Industries</div>
//                                 <div className="footer-nav">
//                                     <ul>
//                                         <li><Link href="/mobile-game-development/">Mobile Game Development</Link></li>
//                                         <li><Link href="/automotive-industry/">Automotive Industry</Link></li>
//                                         <li><Link href="/ecommerce-app-development">Ecommerce App Development</Link></li>
//                                         <li><Link href="/banking-finance-app-development/">Banking and Finance App Development</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3">
//                                 <div className="footer-heading">Other</div>
//                                 <div className="footer-nav">
//                                     <ul>
//                                         <li><Link href="/mobile-game-development/">Industry Insights</Link></li>
//                                         <li><Link href="/mobile-app-development-companies-in-india/">Mobile App Development Campnies In India</Link></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col-lg-3">
//                                 <div className="footer-heading pb-3">Our Blog</div>
//                                 <ul className="footerblog-links">
//                                     <li>
//                                         <Link href="/best-free-online-arcade-games/">
//                                             <img src="/images/20-Best-Free-Online-Arcade-Games.jpg" alt="20-Best-Free-Online-Arcade-Games" />
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/best-games-for-iphone-x/">
//                                             <img src="/images/15-Best-Gaming-Apps-for-iPhone-X.jpg" alt="15-Best-Gaming-Apps-for-iPhone-X" />
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/best-car-racing-games-for-android/">
//                                             <img src="/images/15-best-car-racing-games.jpg" alt="15-best-car-racing-games" />
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link href="/kotlin-app-development-company/">
//                                             <img src="/images/Kotlin-App-Development-Company-1.jpg" alt="Kotlin-App-Development-Company-1" />
//                                         </Link>
//                                     </li>
//                                 </ul>
//                                 <Link href='/blog/' className="btn btn-default mt-1 btn-rounded btn-sm">View more 540 blogs <i className="fa fa-arrow-right ms-1"></i></Link>

//                                 <div className="mt-4 social-media-list">Follow us on</div>
//                                 <div className="social-links">
//                                     <ul>
//                                         <li><a href="https://www.facebook.com/RedbytesMobileAppDevelopmentCompany/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
//                                         <li><a href="https://twitter.com/RedBytes" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
//                                         <li><a href="https://www.linkedin.com/company/redbytes-software" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
//                                         <li><a href="https://in.pinterest.com/redbytesoftware/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest"></i></a></li>
//                                         <li><a href="https://www.slideshare.net/redbytes_software" target="_blank" rel="noreferrer"><i className="fab fa-slideshare"></i></a></li>
//                                     </ul>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="copy-r8">
//                 <div className="copy-r8-txt">
//                     Copyrights 2023, Redbytes. All rights reserved. <Link href='/privacy-policy'>Privacy Policy</Link> Digital
//                     Marketing by JointViews
//                 </div>
//             </div>

//             {/* WhatsApp footer link */}
//             <a href="https://api.whatsapp.com/send?phone=19295521900&amp;text=Hi" target="_blank" rel="noreferrer" className="whatsapp-btn-linkfooter"><i className="fab fa-whatsapp"></i></a>

//             {/* responsivefooter-menu */}
//             <div className="responsivefooter-menu">
//                 <ul>
//                     <li>
//                         <Link href='/contactus/'>
//                             <i className="fa fa-envelope"></i>
//                             <span>Email</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href='https://mobileappdevelopmentcost.com/hire-app-developer-cost/?utm_source=RB_IN&utm_medium=Mobile_Footer_Btn&utm_campaign=Lead_gen/Select-the-Categories' target="_blank" rel="noreferrer">
//                             <i className="fa fa-user" ></i>
//                             <span>Hire</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <a href='https://mobileappdevelopmentcost.com/Calculator/Domain/?utm_source=RB_IN&utm_medium=Mobile_Footer_Btn&utm_campaign=Lead_gen/' target="_blank" rel="noreferrer">
//                             <i className="fa fa-dollar-sign"></i>
//                             <span>Cost Calc.</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href='https://api.whatsapp.com/send?phone=19295521900'>
//                             <i className="fab fa-whatsapp"></i>
//                             <span>WhatsApp</span>
//                         </a>
//                     </li>
//                     <li>
//                         <Link href='/portfolio/'>
//                             <i className="fa fa-image"></i>
//                             <span>Portfolio</span>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* Scroll to top */}
//             <a href="#" className="back-top-btn"></a>
//         </>
//     );
// }
