import React from 'react'
import CarBook from '@/components/CarBook'
import LongTermBook from '@/components/LongTermBook'
import Navbar from '@/components/Navbar'
import Fleet from '@/components/Fleet'
import InfoBox from '@/components/InfoBox'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home(props) {
  const [show, setShow] = React.useState(false)
  const router = useRouter();   

  return (
    <main>
      <Navbar />
      <>
      <div className='text-white main-container flex justify-stretch overflow-hidden '>  

        <div className='short grid gap-4 items-center justify-center w-3/5 hover:w-4/6 hover:scale-100 ease-in-out duration-300 max-sm:grow min-w-fit'>
          <div className='flex flex-col'>
            <CarBook 
            />
          </div>
        </div>

        <div 
          onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} 
          className='long grid items-center justify-center w-2/5 hover:w-4/5 hover:scale-100 ease-in-out duration-300 max-sm:hidden'>
          <div className=''>
            <LongTermBook
            show={show}
            setShow={setShow} />
          </div>
        </div>
      </div>
      </>
      
      <div id='fleet' className='h-5'/>
      <section className='my-12 '>
        <div className='mb-12 ml-10'>
          <h3 className='text-highlight1 font-bold mr-2 pt-4'>Convenient and cost-effective luxury car rentals.</h3>
          <div className='grid md:grid-cols-4 gap-4'>
            <div className='max-md:hidden'>
              <img className='mt-2 absolute' src='/icons/car-outline.png' alt='car-outline' width={200}/>
              <div className='rounded-full bg-highlight2 w-[100px] h-[100px] opacity-50'/>
            </div>
            <p className='md:px-4 mr-4 col-span-2'>Browse through a variety of vehicles and select the one that best fits your needs.
            Book your car today and enjoy the comfort and convenience of driving in Cyprus.</p>
            <img className='max-md:hidden justify-self-end' src='/icons/keys.png' alt='car-keys' width={200}/>
          </div>
        </div>
        <Fleet/>

        <div className='bg-bglight grid md:grid-cols-3 grid-col-1 p-5 my-5 pt-5 gap-5'>
          <InfoBox
          icon={"location"}
          title={"Any Pickup Location in Cyprus"}
          description={"Free of charge delivery and collection within the city limits of Limassol. Small fee for other locations and airports in Cyprus."}
           />
           <InfoBox
           icon={"call"}
           title={"Support 24/7"}
           description={"Whether you need help with your car, booking, changing your reservation, or have any questions or concerns, we're here to help you."}
           />
           <InfoBox
           icon={"cancel"}
           title={"Free Cancelation"}
           description={"Free cancelation if you cancel at least 48 hours before pick-up."}
          />
        </div>

      </section>
    
      <section>
        <div className='flex max-md:flex-col-reverse pt-5'>
          <div className='pl-[10%] pr-[5%]'>
            <h2 className='text-5xl pb-2 tracking-wide text-highlight1 font-bold'>Flexible Long Term Rentals</h2>
            <p>Looking to rent on a monthly basis? We offer a fixed monthly rate at a discounted price. No extra fees, no need to worry about maintenance, repairs, insurance, road taxes or a replacement car in case of damage. Plus, you can cancel anytime with no penalty after two months. Free additional driver and unlimited miles included. </p>
            <button onClick={() => router.push("/long-term")} className='button-main mt-4'>See offers</button>
          </div>
          <img className='md:w-[45%] mb-5 h-full' src='/icons/cabrio.jpg' alt='cabrio'/>
        </div>
      </section>

      <div id='about-us' className='h-6'/>
      <section id='about-us'>
        <div className='flex max-md:flex-col pt-5'>
          <img className='md:w-[45%] mb-5 h-full' src='/images/car-driver.png' alt='cabrio'/>
          <div className='pl-[10%] pr-[5%]'>
            <h2 className='text-5xl pb-2 tracking-wide text-highlight1 font-bold'>About Us</h2>
            <p>Allure car rentals is a family-run business based in Limassol. We provide luxury and affordable cars, friendly service and prices. 
                You can book your car online easily and securely through our website, or you can contact us by phone or email if you have any questions or special requests. We are available 24/7 to assist you with your car rental needs.
          <br/><br/>
          We are more than a car rental company. We are your partner in exploring the beautiful island of Cyprus.
          With your own car, you can explore the island and its attractions and discover the rich history and culture of Cyprus.</p>
          </div>
        </div>
      </section>
      <div id="faq" className="h-[72px]"/>
      <FAQ/>
      <div id="contact-us" className="h-[72px]"/>
      <Contact />
      <img src='/icons/road.png' alt="road" className='w-full'/>

      <Footer image={false} map={false}/>
    </main>
  )
}

