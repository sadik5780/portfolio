// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Header() {
//   const [menubar, setMenubar] = useState(false);
//   const handleMenuBar = () => {
//     setMenubar(!menubar);
//   };
  

//   // function handleMenuBar() {
//   //     document.querySelector('.main-sidebarmenu').classList.toggle('main-sidebarmenu-active')
//   // }

//   return (
//     <>
//       <div className="header">
//         <div className="container-fluid">
//           <div className="nav_wrapper">
//             <div className="logo_wrapper">
//               <Link href="/">Sadik</Link>
//             </div>
//             <div className="menu_wrapper">
//               <ul>
//                 <li>
//                   <Link href="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link href="/projects">Projects</Link>
//                 </li>
//                 <li>
//                   <Link href="/contact">Let's Talk</Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="menu_btn" onClick={handleMenuBar}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//             {menubar &&
//                 <div className="res_menu">
//                     <div className="close_btn" onClick={handleMenuBar}></div>
//               <ul>
//                 <li>
//                   <Link href="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link href="/projects">Projects</Link>
//                 </li>
//                 <li>
//                   <Link href="/contact">Let's Talk</Link>
//                 </li>
//               </ul>
//             </div>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
