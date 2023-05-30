import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import LongTermSteps from '@/components/LongTermSteps'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import React from 'react'
import * as utils from '@/utils';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";


export default function LongTermEnquiry(props) {
    const router = useRouter();   
    React.useEffect(() => {
        if(props.longTermStep !== 2 || !props.longTermCar) router.push("/long-term") 
    }, [])

    const [enquiryDetails, setEnquiryDetails] = React.useState(
        {
            car: props.longTermCar.name,
            delivery: false,
            pickupDate: new Date(),
            period: 2,
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    )

    async function handleSubmit(event) {
       event.preventDefault()

       if(enquiryDetails.email !== event.target.querySelector('#email-confirm').value) {
        alert("Please check email address provided")
       } else {
           await fetch("api/mail", {
                method: "POST",
                body: JSON.stringify(enquiryDetails)
           })
       }
        
       router.push("/enquiry-sent")
    }

    return(
        <main>
            <Navbar/>

            <LongTermSteps 
                step={props.longTermStep}
                setLongTermCar={props.setLongTermCar}
                setLongTermStep={props.setLongTermStep}/>

            <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse gap-x-16 gap-y-8 lg:grid lg:grid-cols-5">
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-2 lg:p-12">
                        <form action="" className="space-y-4">
                            <h5 className='font-bold'>Booking Details</h5>
                            <h7>Choose your Pick-up Location:</h7>
                            <div>
                                <label className="sr-only" htmlFor="name">Pick up Location</label>
                                <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="ALLURE OFFICE - Leof. Amathountos 32"
                                type="text"
                                id="name"
                                readOnly
                                />
                            </div>
                            <div className='flex flex-row m-0'>
                                <hr className='w-[40%]'/>
                                <span className='px-4 pt-1'>OR</span>
                                <hr className='w-[40%]'/>
                            </div>
                            <div className='flex flex-row m-0 align-middle'>
                                <input checked={enquiryDetails.delivery}  onChange={() => setEnquiryDetails(prev => {return {...prev, delivery: !prev.delivery}})}
                                    className='inline-block m-0' type='checkbox' id="delivery"/>
                                <label className='not-sr-only pt-1 text-lg px-2' htmlFor='delivery'>Delivery service</label>
                            </div>

                            <p className='text-sm m-0'>Have the car delivered to your desired location, for a small fee. An agent will reach out to confirm.</p>
                            <hr/>
                            <div className='flex flex-row gap-3'>
                                <div>
                                    <label className="not-sr-only" htmlFor="pickupDate">Pick-up Date </label>
                                    <Flatpickr
                                    className="w-[8rem] mx-3 rounded-lg border-gray-200 p-3 text-sm"
                                    value={enquiryDetails.pickupDate}
                                    onChange={newDate => utils.changeSingleStateValue(setEnquiryDetails, "pickupDate", newDate )}
                                    options={
                                        { minDate: new Date(),
                                        dateFormat: "d-m-Y" }}
                                    />
                                </div>
                                <div>
                                    <label className="not-sr-only" htmlFor="period">Period </label>
                                    <input
                                    className="w-[5rem] mx-3 rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder=""
                                    value={enquiryDetails.period}
                                    onChange={newVal => utils.changeSingleStateValue(setEnquiryDetails, "period", newVal.target.value)}
                                    type="number"
                                    id="period"
                                    min="2"
                                    required
                                    />
                                    months
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col bg-white shadow-lg rounded-lg lg:col-span-3'>
                        <div className='bg-dark text-white px-3 flex flex-row'>
                            <h3>{props.longTermCar.name}<small className='pl-3 text-sm'>{props.longTermCar.year}</small></h3> 
                            
                        </div>
                        <div className='flex flex-col gap-4 md:flex-row'>
                            <Carousel photos={props.longTermCar.photos} thumb={props.longTermCar.thumb} />
                            <div>
                                <div className='p-3 md:grid md:grid-cols-2 md:grid-rows-2 flex justify-around'>
                                    <span className="m-2 flex flex-col oject-center text-center w-15">
                                        <img className="h-6 object-scale-down pl-2" src="icons\gas-pump-solid.svg" alt="fuel icon" />
                                        <span className="text-xs m-0">Fuel</span>
                                        <span className="text-md font-semibold m-0">{props.longTermCar.fuel}</span>
                                    </span>
                                    <span className="m-2 flex flex-col oject-center text-center w-15">
                                        <img className="h-6 object-scale-down" src="icons\gas.png" alt="gas icon" />
                                        <p className="text-xs m-0">Consumption</p>
                                        <p className="text-md font-semibold m-0">{props.longTermCar.fuelConsumption} <small className='text-sm font-thin'>lt/100km</small></p>
                                    </span>
                                    <span className="m-2 flex flex-col oject-center text-center w-15">
                                        <img className="h-6 object-scale-down" src="icons\car.png" alt="car door" />
                                        <p className="text-xs m-0">Doors</p>
                                        <p className="text-md font-semibold m-0">{props.longTermCar.number_doors}</p>
                                    </span>
                                    <span className="m-2 flex flex-col oject-center text-center w-15">
                                        <img className="h-6 object-scale-down" src="icons\manual-transmission.png" alt="transmission" />
                                        <p className="text-xs m-0">Gearbox</p>
                                        <p className="text-md font-semibold m-0">{props.longTermCar.transmission}</p>
                                    </span>
                                </div>
                                <div>
                                    <h3 className='font-black text-center'>
                                        {utils.toCurrency(props.longTermCar.monthlyPrice, true)}<small className='text-sm font-normal'> / month</small></h3>
                                      <p className='text-sm px-4'>Price includes VAT, unlimited km, Maintenance and repair, Insurance, Replacement in case of damage, Road tax, Roadside assistance </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>


            <section className="bg-gray-100">

                <h3 className='text-center max-w-screen-xl px-4'>Fill in your contact details below, send us an enquiry and we will contact you back.</h3>

                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-5 lg:p-12">
                        <form onSubmit={handleSubmit} action="/enquiry-sent" method='post' className="space-y-4">
                            <h5 className='font-bold'>Contact Details</h5>
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Name*"
                            value={enquiryDetails.name}
                            onChange={newVal => utils.changeSingleStateValue(setEnquiryDetails, "name", newVal.target.value)}
                            type="text"
                            id="name"
                            required
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Email address*"
                                value={enquiryDetails.email}
                                onChange={newVal => utils.changeSingleStateValue(setEnquiryDetails, "email", newVal.target.value)}
                                type="email"
                                id="email"
                                required
                            />
                            </div>
                            <div>
                            <label className="sr-only" htmlFor="email-confirm">Email confirmation</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Confirm Email address*"
                                type="email"
                                id="email-confirm"
                                required
                            />
                            </div>

                            <div>
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Phone Number"
                                value={enquiryDetails.phone}
                                onChange={newVal => utils.changeSingleStateValue(setEnquiryDetails, "phone", newVal.target.value)}
                                type="tel"
                                id="phone"
                            />
                            </div>
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="message">Message</label>

                            <textarea
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Message"
                            value={enquiryDetails.message}
                            onChange={newVal => utils.changeSingleStateValue(setEnquiryDetails, "message", newVal.target.value)}
                            rows="4"
                            id="message"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <button
                            type="submit"
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                            Send Enquiry
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}