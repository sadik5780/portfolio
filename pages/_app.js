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

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleRouteChangeComplete = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Script src="/path/to/your/script.js" strategy="lazyOnload" />
      
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
