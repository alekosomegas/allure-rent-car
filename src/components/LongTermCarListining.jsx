import * as utils from "@/utils";
import React from "react";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

export default function LongTermCarListing(props) {
  const router = useRouter();

  const [showInfo, setShowInfo] = React.useState(false);
  const [showCancelInfo, setShowCancelInfo] = React.useState(false);

  function handleClickSelect() {
    props.setLongTermCar(props.car);
    props.setLongTermStep(2);
    router.push("/long-term-enquiry");
  }

  return (
    <div onClick={() => showCancelInfo && setShowCancelInfo(false)}>
      {showInfo && (
        <div className="listing relative bg-white text-black h-full min-h-[261px] min-w-fit grid grid-cols-5 rounded-2xl overflow-hidden mb-6 p-3 gap-4">
          <div className="text-xs col-span-2">
            <h6>Including</h6>
            <ul className="list-outside pl-3 list-none -indent-3">
              <li>&#x2714; VAT</li>
              <li>&#x2714; Unlimited Km</li>
              <li>&#x2714; Road taxes</li>
              <li>&#x2714; Damage reduced liability</li>
              <li>&#x2714; Theft reduced liability</li>
            </ul>
          </div>

          <div className="text-xs col-span-2 -indent-2">
            <h6>Does not include</h6>
            <ul className="list-outside pl-1 list-none ">
              <li>&#x00D7; Delivery charge(eventual)</li>
              <li>&#x00D7; Other available options</li>
            </ul>
          </div>

          <div
            onClick={() => setShowInfo(false)}
            className="listing-info cursor-pointer absolute right-5 top-6 text-sm underline decoration-highlight1"
          >
            CLOSE
          </div>
        </div>
      )}

      {!showInfo && (
        <div className="listing relative bg-white text-black h-full min-w-fit grid grid-cols-2 rounded-2xl overflow-hidden mb-6 p-3">
          <div className="listing-title leading-3 col-span-2 mb-2">
            <div className="text-lg font-bold ">{props.car.name}</div>
            <small className="text-md">{props.car.year}</small>
          </div>

          <div
            onClick={() => setShowInfo(true)}
            className="listing-info cursor-pointer absolute right-5 top-6 text-sm underline decoration-highlight1"
          >
            INFO
          </div>

          <div className="listing-specifications text-xs ">
            <span className="list-item">
              <img
                className="icon inline-block "
                src="icons\gas-pump-solid.svg"
                alt=""
              />
              <p className="inline-block ml-2 ">{props.car.fuel}</p>
            </span>
            <span className="list-item">
              <img className="icon inline-block " src="icons\gas.png" alt="" />
              <p className="inline-block ml-2 ">
                {props.car.fuelConsumption} lt/100km
              </p>
            </span>
            <span className="list-item">
              <img className="icon inline-block" src="icons\car.png" alt="" />
              <p className="ml-2 inline-block">
                {props.car.number_doors} doors
              </p>
            </span>
            <span className="list-item">
              <img
                className="icon inline-block"
                src="icons\suitcase-solid.svg"
                alt=""
              />
              <p className="ml-2 inline-block">
                {props.car.large_bags} large bags
              </p>
            </span>
            <span className="list-item">
              <img
                className="icon inline-block"
                src="icons\manual-transmission.png"
                alt=""
              />
              <p className="ml-2 inline-block">{props.car.transmission}</p>
            </span>
            <span className="list-item">
              <img
                className="icon inline-block"
                src="icons\car-seat.png"
                alt=""
              />
              <p className="ml-2 inline-block">
                {props.car.number_seats} seats
              </p>
            </span>
          </div>

          <div className="listing-img ">
            <img
              src={`/cars-thumbnails/${props.car.thumb}.png`}
              width={150}
              alt={props.car.name}
            />
          </div>

          <div className="listing-price leading-3">
            <span className="text-lg font-bold">
              {utils.toCurrency(props.car.monthlyPrice)}{" "}
            </span>
            <span> / month</span>
            <br />
          </div>

          <div className="listing-select justify-self-end self-end">
            <button className="button-main" onClick={handleClickSelect}>
              select
            </button>
          </div>

          <div className="listing-cancel col-b4 text-sm">
            {showCancelInfo && (
              <div className="absolute z-2 bg-highlight1 text-white bottom-10 left-11 w-32 text-center rounded-lg p-2">
                <p>
                  You have the option to switch cars at any time and to cancel
                  free of charge after 2 months.
                </p>
              </div>
            )}

            <small onClick={() => setShowCancelInfo(true)}>
              <strong>Cancel for free </strong>
              <strong className="text-white px-[0.45rem] text-[1.1rem] rounded-full !bg-highlight1">
                {" "}
                ?
              </strong>
            </small>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
