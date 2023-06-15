import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export default function Layout({
  children,
  title = "Allure Rent a Car in Limassol",
  description = "Allure Rent a Car offers luxury cars at affordable prices in Limassol. Book now and discover the allure of Cyprus with ease.",
}) {
  return (
    <>
      <Head>
        <title key={"title"}>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="description" content="Allure car rentals is a family-run business based in Limassol. We provide luxury and affordable cars, friendly service and prices. Book now and discover the allure of Cyprus with ease."/> */}
        <meta name="description" content={description} key="description" />

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

        <meta charset="UTF-8" />
      </Head>

      <header>
        <Navbar />
      </header>

      {children}

      <footer>
        <Footer key="footer" />
      </footer>
    </>
  );
}
