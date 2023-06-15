import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/car.css";

export default function App({ Component, pageProps }) {
  const [longTermCar, setLongTermCar] = React.useState(false);
  const [longTermStep, setLongTermStep] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Component
        {...pageProps}
        longTermCar={longTermCar}
        setLongTermCar={setLongTermCar}
        longTermStep={longTermStep}
        setLongTermStep={setLongTermStep}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}
