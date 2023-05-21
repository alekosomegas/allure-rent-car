import { useRouter } from 'next/router'

export default function FleetCar(props) {
    const router = useRouter();   
    return (
        <>
        {props.main &&
        <div className="flex flex-col justify-between gap-4">
            <div className="flex justify-center align-items-center">
                <img
                    className="z-50"
                    alt={props.car.thumb}
                    width={300} 
                    src={"/cars-thumbnails/" + props.car.thumb + ".png"} 
                />
                <span className="absolute z-0 bg-highlight2 opacity-80 h-[180px] w-[180px] rounded-full"/>
            </div>
            <div className="flex flex-col justify-center text-center">
                <small>from <strong className='text-lg font-light'>{props.car.price}</strong> per day</small>
                <strong className="text-2xl text-highlight1 font-bold">{props.car.name}</strong>
                {/* <button onClick={() => {router.push("/book-a-car")}} 
                className="button-main">Book now</button> */}
                <div className='btn-wrapper'>
                    <a href='/book-a-car'><span>Book now</span></a>
                </div>
            </div>
        </div>
        }

        {!props.main &&
        <div className="my-[15%] opacity-50">
            <img
                alt={props.car.thumb}
                width={300} 
                src={"/cars-thumbnails/" + props.car.thumb + ".png"} 
            />
        </div>

        }
        </>
    )
}