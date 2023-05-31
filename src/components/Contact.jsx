import dynamic from "next/dynamic";
import React from "react";
import * as utils from '@/utils';

const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false});

export default function Contact() {
    const [message, setMessage] = React.useState({
        name: "",
        email: "",
        message: ""
    })

    async function handleSubmit(event) {
        event.preventDefault()
 
        await fetch("api/mail", {
             method: "POST",
             body: JSON.stringify(
                {
                    info: message,
                    type: "contact"
                }
             )})

        alert("Thank you! We have received your message and an agent will contact you soon.")
     }

    return (
        <section className="flex flex-col md:flex-row">
            <div className='w-full max-md:h-[300px] md:w-1/3'>
                <MapWithNoSSR/>
            </div>

            <div className='flex flex-col gap-3 w-1/3 bg-highlight1 p-4 max-md:w-full text-white'> 
                <h3 className="text-white font-bold text-center">Meet Us</h3 >
                <div className="">
                    <img width={50} height={50} src="/icons/call.png" alt="telephone"/>
                    <a>+357 99 667777</a>
                </div>
                <div>
                    <img height={50} width={50} src="/icons/email.png" />
                    <span className="pl-2">info@allure-rent-a-car.com</span>
                </div>
                <div className="flex flex-row gap-2">
                    <img width={50} height={50} alt="address" src="/icons/location.png"/>
                    <p className="">Leoforos Amathous 32,<br/> Zanna Complex Block 1 Shop 8, <br/>Limassol, 4532</p>
                </div>  
            </div>

            <form onSubmit={handleSubmit} className="text-center w-1/3 bg-highlight1 p-4 max-md:w-full" action="">
                <h3 className="text-white font-bold">Got a Question?</h3>
                <p className="px-3">We are here to help and answer any question you might have. We look forward to hearing from you.<br/>&#128512;</p>
                
                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    value={message.name}
                    onChange={newVal => utils.changeSingleStateValue(setMessage, "name", newVal.target.value)}
                    type="text"
                    id="name"
                    required
                    />
                </div>
                
                <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        value={message.email}
                        onChange={newVal => utils.changeSingleStateValue(setMessage, "email", newVal.target.value)}
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    value={message.message}
                    onChange={newVal => utils.changeSingleStateValue(setMessage, "message", newVal.target.value)}
                    rows="3"
                    id="message"
                    required
                    ></textarea>
                </div>

                <div className="mt-2">
                            <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                            Send Message
                            </button>
                        </div>
            </form>
        </section>
    )
}