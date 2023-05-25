import Navbar from '@/components/Navbar'
import LongTermCarListing from '@/components/LongTermCarListining'
import InfoBox from '@/components/InfoBox'
import React from 'react'
import Footer from '@/components/Footer'

const cars = require('../cars')

let items
items = cars
.filter(car => car.available)
.sort((a, b) => a.monthlyPrice - b.monthlyPrice)
.map(car=> <LongTermCarListing car={car}/>)

const infoBoxes =[

            <InfoBox
            icon={"contract"}
            title={"Flexible contract"}
            description={"Cancel or extend your contract at any time."}
            horizontal={true}
            />,
            <InfoBox
            icon={"wallet"}
            title={"Pay monthly"}
            description={"Same rate for the whole rental duration."}
            horizontal={true}
            />,
            <InfoBox
            icon={"swap"}
            title={"Change car"}
            description={"Swap your car for another one at any time."}
            horizontal={true}
            />,
            <InfoBox
            icon={"euro"}
            title={"No extra costs"}
            description={"Free additional driver and unlimited miles."}
            horizontal={true}
            />,

]


export default function LongTerm(props) {
    const [index, setIndex] = React.useState(0)

    let dots = []
    for (let i = 0; i < infoBoxes.length; i++) {
        dots[i] = <div className='small-circle'/>
    }
    dots[index] = <div className='small-circle !bg-highlight1'/>
    
    return (
        <main>
            <Navbar />
            <section className=''>
                <div className='flex flex-row max-sm:block'>
                    <h1 className='font-bold text-highlight1 w-[400px] left-11 top-32 md:absolute text-5xl lg:w-[600px]
                    max-md:text-4xl max-md:flex max-md:p-5 max-md:w-full'>
                        Discover the advantages of renting long-term.</h1>
                    <img 
                    className='w-full max-md:hidden'
                    src='/images/jeep-driver-long.png'/>
                    <img 
                    className=' md:hidden w-full max-md:h-full max-md:mt-10'
                    src='/cars-thumbnails/fleet-half.png'/>
                </div>

                <div className='w-full bg-bglight flex flex-col my-4 lg:hidden'>
                    <div className='flex justify-between px-2 gap-4'>

                        <div className="flex flex-col justify-end -translate-y-4">
                            <span onClick={() => setIndex((index-1) < 0 ? infoBoxes.length-1 : index-1)} className="left arrow"></span>
                        </div>
                        <div className='grid grid-col-1 mt-4'>
                            {infoBoxes[index]}
                        </div>
                        <div className="flex flex-col justify-end -translate-y-4 -translate-x-6">
                            <span onClick={() => setIndex((index+1) % infoBoxes.length)} className="right arrow"></span>
                        </div>

                    </div>
                    <div className='flex justify-center gap-2 mb-2'>
                        {dots}
                    </div>
                </div>

                <div className='max-lg:hidden p-4 w-full bg-bglight flex justify-around gap-4 my-4'>
                    {infoBoxes}
                </div>

                <div className='p-4 '>
                    <h2 className='text-highlight1 text-3xl md:px-10'>Monthly car rental</h2>
                    <p className='md:px-10'>Our long term contract is perfect for anyone who needs a car for an extended period of time. You can choose from our wide range of vehicles, from economy to luxury, and drive around the beautiful island of Cyprus with ease.
                    </p>
                </div>

            <h4 className='text-dark bg-bglight p-4 '>View all cars</h4>
            </section>
            <div className="cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 py-8">
                {items}
            </div>

            <Footer />
        </main>
    )
}