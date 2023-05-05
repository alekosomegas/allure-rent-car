import React from "react";
import Logo from "./logo";

export default function Steps( props ) {

    return (
        <>
            <div className="h-10 w-full fixed top-0 bg-dark flex justify-between pr-4 z-40 ">
                <a href="/" className="scale-50 flex no-underline">
                    <Logo
                    icon={false} />
                </a>
                <a href="/" className="no-underline text-highlight2 self-center">
                    <font>CANCEL </font>
                    <strong className="bg-highlight2 ml-2 px-1 rounded-full text-dark font-bold text-lg">&#x00D7;</strong>

                </a>
            </div>
            <div className="steps text-sm  drop-shadow-lg fixed z-50 top-10 w-full bg-white">

                <div className="steps-top grid grid-cols-4 mb-3 pt-3">

                    <div className="step1 flex gap-2 items-center px-3">
                        <b className="step-number  ">1</b>
                        <div className="flex w-full justify-between ">
                            <span className="uppercase "> Location Selection</span>
                            <span className="underline decoration-highlight1"> EDIT</span>
                        </div>
                    </div>

                    <div className="step2 flex gap-2 items-center px-3">
                    <b className="step-number">2</b>
                        <span className="uppercase "> Car Choice</span>
                        <span className="hidden underline decoration-orange-500"> EDIT</span>
                    </div>

                    <div className="step3 flex gap-2 items-center px-3">
                    <b className="step-number">3</b>
                        <span className="uppercase "> Extras</span>
                        <span className="hidden underline decoration-orange-500"> EDIT</span>
                    </div>

                    <div className="step4 flex gap-2 items-center px-3">
                    <b className="step-number">4</b>
                        <span className="uppercase "> Rental Total</span>
                        <span className="hidden underline decoration-orange-500"> EDIT</span>
                    </div>
                </div>

                <div className="steps-bottom grid grid-cols-4 ">

                    <div className="step1 !border-l-0 step grid grid-cols-2">
                        <div>
                            <strong className="text-xs"> Pick-up location</strong>
                            <h5>Limassol Office</h5>
                            <small className="tracking-tighter">{props.dates.startDate
                                .toLocaleString('default', { day:"numeric", month: 'long' })} 
                                ,{" "+ props.dates.startDate
                                .toLocaleString('default', { year:"numeric" })}
                                {" - "+props.dates.startDate.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" })}
                            </small>
                        </div>
                        <div className="justify-self-end mb-3">
                            <strong className=" text-xs"> Drop-off location</strong>
                            <h5>Limassol Office</h5>
                            <small>{props.dates.endDate
                                .toLocaleString('default', { day:"numeric", month: 'long' })} 
                                ,{" "+ props.dates.endDate
                                .toLocaleString('default', { year:"numeric" })}
                                {" - "+props.dates.endDate.toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" })}
                            </small>
                        </div>
                    </div>

                    <div className="step2 step">

                    </div>

                    <div className="step3 step">

                    </div>

                    <div className="step4 step">

                    </div>

                </div>

            </div>
            <div className="min-h-[150px]">

            </div>
        </>
    )
}