import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Script from "next/script";
import NProgress from "nprogress";
import Router from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/responsive.css'; 
import 'animate.css';
import '@/styles/custom.css'; 
import '@/styles/contact.css'; 
import Head from "next/head";


export default function App({ Component }) 
{
      
    return (
        <> 
        <Layout>
            <Component />
        </Layout>
        </>
    )
}