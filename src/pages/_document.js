import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Allure Luxury Rentals Limassol</title>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Birthstone+Bounce:wght@500&family=Meddon&family=Pacifico&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap" rel="stylesheet"/>
        <script id="rentsyst_booking_widget" src="https://rentsyst.com/settings/iframe-constructor/script/?token=bJ6LkkUGpV4Pq8gzkcXsvnK020Mr7XpH&id=4239"></script>
        
        <script async data-id="101410137" src="//static.getclicky.com/js"></script>

        <meta name="description" content="Allure car rentals is a family-run business based in Limassol. We provide luxury and affordable cars, friendly service and prices. Book now and discover the allure of Cyprus with ease."/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
