import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";


const data = {
    title: "FAQ's",
    rows: [
        {
            title: "What documents do I need to hire a car?",
            content: `A valid driver's license for the entire rental period and a valid passport or ID card are required. `,
        },
        {
            title: "Do I need a credit card to hire a car?",
            content:
            `Payment can be made using a credit or debit card, or in cash.`,
        },
        {
            title: "Is a deposit required?",
            content: `A security deposit is required and the amount varies based on the car category. The deposit will be refunded at the end of the rental period and a hold will be placed on your debit or credit card when you pick up the car.`,
        },
        {
            title: "What are the age requirements to rent a car?",
            content:"To rent a car, you must be at least 21 years old and have held your license for a minimum of 1 year. A young driver surcharge will apply to drivers under the age of 25.",
        },
        {
            title: "What should I do in case of a breakdown or accident with the rental car?",
            content:"In case of a breakdown or accident with the rental car, please contact us at +357 99 667777 for assistance"
        },
        {
            title: "Can I drive the hired car in the Northern occupied area of Cyprus?",
            content:"Cross-border rentals are prohibited. Cars taken to the Turkish-occupied area of Cyprus are not insured according to the Insurance Company Law in Cyprus.",
        },
        {
            title: "Where do you offer delivery and collection of rental cars?",
            content:"We offer delivery and collection of rental cars at Larnaca airport and Paphos airport, as well as at any location in Cyprus, including all hotels. Delivery and collection in Limassol is free of charge.",
        },
    ],
};


const styles = {
    bgColor: '243, 243, 243',
    titleTextColor: "#e85042",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    // arrowColor: "red",
    rowContentTextSize: "large",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};


export default function FAQ() {
    return (
        <div className="mx-auto max-w-screen-xl px-8 py-16 sm:px-6 lg:px-8">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    )
}