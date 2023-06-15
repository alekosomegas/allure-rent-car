import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@500&family=Meddon&family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap"
          rel="stylesheet"
        />
        <script
          id="rentsyst_booking_widget"
          src="https://rentsyst.com/settings/iframe-constructor/script/?token=bJ6LkkUGpV4Pq8gzkcXsvnK020Mr7XpH&id=4239"
        ></script>

        <script
          async
          data-id="101410137"
          src="//static.getclicky.com/js"
        ></script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11201521302"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`  
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                
                    gtag('config', 'AW-11201521302');
                `}
        </Script>

        <Script id="hotjar-analytics" strategy="afterInteractive">
          {`
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:3492614,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `}
        </Script>
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
