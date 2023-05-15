import React, { useEffect } from 'react'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component 
        {...pageProps}
      />
      <Script
      id='HotJarAnalytics'
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{_html:
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3492614,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')
      }} />
    </>
    
  ) 
}
