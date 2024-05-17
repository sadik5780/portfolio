import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import Layout from "@/components/Layout";
import Script from "next/script";
import NProgress from "nprogress";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/responsive.css'; 
import 'animate.css';
import '@/styles/custom.css'; 
import '@/styles/contact.css';  

export default function App({ Component }) {
  const router = useRouter();

  return (
    <>      
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
