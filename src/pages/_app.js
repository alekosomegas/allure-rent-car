import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const [longTermCar, setLongTermCar] = React.useState(false)
  const [longTermStep, setLongTermStep] = React.useState(1)

  return (
    <>
      <Head>
        <title>Allure Luxury Rentals Limassol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <Component 
        {...pageProps}
        longTermCar={longTermCar}
        setLongTermCar={setLongTermCar}
        longTermStep={longTermStep}
        setLongTermStep={setLongTermStep}
      />
    </>
    
  ) 
}
