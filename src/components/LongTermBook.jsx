import React from "react";
import { useRouter } from 'next/router'

export default function LongTermBook({show, setShow}) {
    const router = useRouter();   

    return (
        <div className="flex flex-col justify-center ">

            <h5 className="flex justify-center">Need to buy a new car?</h5>

            <div className="flex justify-center mx-12">
                <h3 className="flex self-center " >
                    <strong className="text-center max-w-[22rem]" >Discover the advantages of long-term rental</strong>
                </h3>
            </div>

            {
                show &&
                <img className="max-lg:hidden scale-50 h-full opacity-90 -my-8" src="/cars-thumbnails/fleet.png" alt="long term fleet" />  
            }

            <div className="flex justify-center mt-2">
                <button onClick={() => router.push("/long-term")} className="button-main bg-white text-black">See Offers</button>
            </div>
        </div>
    )
}