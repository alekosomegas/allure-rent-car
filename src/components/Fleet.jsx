import FleetCar from "./FleetCar"
import React from "react"

const cars = require('../cars')

export default function Fleet() {
    const [index, setIndex] = React.useState(1)

    return (
        <div className="grid grid-cols-1">
            <div className="absolute -left-20 -ml-12 max-lg:hidden">
                <FleetCar
                    car={cars[index-1 < 0 ? cars.length-1 : index-1]}
                />
                <span className="circle" aria-hidden="true"/>
            </div>

            <div className="xl:hover:scale-125 duration-500 grid grid-cols-3 justify-self-center justify-items-center max-w-xl max-md:gap-10">
                <div className="flex flex-col my-[50%] mr-16 mt-16">
                    <span onClick={() => setIndex((index-1) < 0 ? cars.length-1 : index-1)} className="left arrow"></span>
                </div>

                <div className="flex justify-center">
                    <FleetCar
                        car={cars[index]}
                        main={true}
                    />
                    <span className="circle" aria-hidden="true"/>
                </div>
                <div className="flex flex-col my-[50%] ml-[10%] mt-16">
                    <span onClick={() => setIndex((index+1) % cars.length)} className="right arrow"></span>
                </div>
            </div>

            <div className="absolute -right-0 max-lg:hidden">
                <FleetCar
                    car={cars[index+1 > cars.length-1 ? cars.length-1 : index+1]}
                    />
                <span className="circle" aria-hidden="true"/>
            </div>
        </div>
    )
}