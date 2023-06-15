import React from "react";
import { useRouter } from "next/router";

export default function LongTermSteps(props) {
  const router = useRouter();

  const stepsText = {
    1: "Choose Vehicle",
    2: "Review & Enquire",
  };

  function handleStep1Clicked() {
    if (props.step === 1) return;
    props.setLongTermStep(1);
    props.setLongTermCar(false);
    router.push("/long-term#cars");
  }

  return (
    <>
      <div className="bg-white grid grid-cols-2 h-full">
        <div
          onClick={handleStep1Clicked}
          className={`step cursor-pointer ${props.step === 1 && "selected"}`}
        >
          <b className={`step-number ${props.step === 1 && "selected"}`}>1</b>
          <span>{stepsText[1]}</span>
        </div>
        <div className={`step ${props.step === 2 && "selected"}`}>
          <b className={`step-number ${props.step === 2 && "selected"}`}>2</b>
          <span>{stepsText[2]}</span>
        </div>
      </div>
    </>
  );
}
