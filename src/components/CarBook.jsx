import React from 'react'
import { useRouter } from 'next/router'


export default function CarBook(props) {
  const router = useRouter();   
  return (
            <>
            {!props.showBookCar &&
            <>
            <div className='text-center mb-20 px-5'>
                <h1 className='font-bold text-4xl text-highlight1'>Rent a Car in Limassol</h1>
                <p className='text-sm'>Welcome to <strong>Allure Luxury Car Rentals</strong>, the best choice for <strong>car rental in Limassol.</strong>
                <br />We offer a wide range of vehicles, from <strong>economy</strong> to <strong>luxury</strong>,<br /> to suit your needs and budget.</p>
            </div>

            <button className='font-bold align-self-center mt-2 button-main w-[250px]'
                onClick={() => {router.push("/book-a-car")}}>
                FIND YOUR CAR
            </button>

            <div className='align-self-center'>
                <div className='street street0 mt-5 -ml-[20px] bg-white w-[50px] h-2'></div>
                <div className='street street1 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street2 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street3 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>

                <div className='car -mt-3 '>
                    <img className='ml-4' width="130px" src='/icons/red-car.png' alt='red car'></img>
                </div>
            </div>

            <div className='sm:hidden'>   
                <h7 className="absolute bottom-28 left-[50%] -ml-10 text-grey hover:text-white">See our Fleet</h7>
                <div>
                    <svg className="arrows">
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
            </div>
            </>
            }
        </>  
        )
}