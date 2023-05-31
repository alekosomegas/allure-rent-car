import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false});

export default function Footer(props) {
    return (
        <section id="contact-us" className=''>
          <div className='p-4 bg-black text-grey gap-3 flex flex-col text-sm'>
            <div className='flex flex-col md:flex-row justify-between'>

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
  
            <footer>
              <hr/>
              <small className='text-grey tracking-wider'>©2023 CYTRANS SOLUTIONS. All rights reserved.</small>
            </footer>
          </div>
          </section>
    )
}