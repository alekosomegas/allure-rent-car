import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false});

export default function Footer(props) {
    return (
        <section  id="contact-us" className='pt-5'>
            {props.image &&
            <img src='/icons/road.png' alt="road" className='w-full'/>
            }
          <div className='p-4 bg-black text-grey gap-3 flex flex-col text-sm'>
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='flex flex-col gap-3'> 
                <h5 className="text-white">Contact Us</h5>
                <a>+357 99 667777</a>
                <span>info@allure-rent-a-car.com</span>
                <p>Leoforos Amathous 32,<br/> Zanna Complex Block 1 Shop 8, <br/>Limassol, 4532</p>
              </div>
            {props.map &&
              <div className='h-[200px] w-full md:w-4/5 min-w-[200px]'>
                <MapWithNoSSR/>
              </div>
            }
            </div>
  
            <footer>
              <hr/>
              <small className='text-grey tracking-wider'>©2023 CYTRANS SOLUTIONS. All rights reserved.</small>
            </footer>
          </div>
          </section>
    )
}