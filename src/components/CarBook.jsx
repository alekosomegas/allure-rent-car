import React from 'react'
import { useRouter } from 'next/router'


export default function CarBook(props) {
  const router = useRouter();   
  return (
            <>
            {!props.showBookCar &&
                <>
                <h2><strong>Rent a car</strong></h2>
                <button className='mt-2'
                    onClick={() => {router.push("/book-a-car")}}>
                    FIND A CAR
                </button>

            <div className='align-self-center'>
                <div className='street street0 mt-5 -ml-[20px] bg-white w-[50px] h-2'></div>
                <div className='street street1 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street2 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>
                <div className='street street3 mt-5 ml-[30px] bg-white w-[50px] h-2'></div>

                <div className='car -mt-3 '>
                    <img width="130px" src='/icons/red-car.png' alt='red car'></img>
                </div>
            </div>
            </>
            }
        </>  
        )
}