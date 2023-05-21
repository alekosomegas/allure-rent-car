import React from 'react'
import CarBook from '@/components/CarBook'
import LongTermBook from '@/components/LongTermBook'
import Navbar from '@/components/Navbar'
import Fleet from '@/components/Fleet'
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
  ssr: false});


export default function Home(props) {
  const [show, setShow] = React.useState(false)

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
          <div className='flex flex-col gap-4'>
            <div className=''>
              <div className='w-[90px] h-[90px] absolute bg-highlight2 opacity-50 rounded-3xl' />
              <img className='w-[90px]' src='/icons/location.png' alt='location-icon'/>
            </div>
            <div>
              <h5 className='text-highlight1 font-bold'>Any Pickup Location in Cyprus</h5>
              <p><strong>Free</strong> of charge <strong>delivery and collection</strong> within the city limits of Limassol. Small fee for other locations and airports in Cyprus.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className=''>
              <div className='w-[90px] h-[90px] absolute bg-highlight2 opacity-50 rounded-3xl' />
              <img className='w-[90px]' src='/icons/call.png' alt='location-icon'/>
            </div>
            <div>
              <h5 className='text-highlight1 font-bold'>Support 24/7</h5>
              <p>Whether you need help with your car, booking, changing your reservation, or have any questions or concerns, we're here to help you.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-4 '>
            <div className=''>
              <div className='w-[90px] h-[90px] absolute bg-highlight2 opacity-50 rounded-3xl' />
              <img className='w-[90px]' src='/icons/cancel.png' alt='location-icon'/>
            </div>
            <div>
              <h5 className='text-highlight1 font-bold'>Free Cancelation</h5>
              <p>Free cancelation if you cancel at least 48 hours before pick-up.
              </p>
            </div>
          </div>
        </div>

      </section>
    
      <section>
        <div className='flex max-md:flex-col-reverse pt-5'>
          <div className='pl-[10%] pr-[5%]'>
            <h2 className='text-5xl pb-2 tracking-wide text-highlight1 font-bold'>Flexible Long Term Rentals</h2>
            <p>Looking to rent on a monthly basis? We offer a fixed monthly rate at a discounted price. No extra fees, no need to worry about maintenance, repairs, insurance, road taxes or a replacement car in case of damage. Plus, you can cancel anytime with no penalty after two months. Free additional driver and unlimited miles included. </p>
            <button className='button-main mt-4'>See offers</button>
          </div>
          <img className='md:w-[45%] mb-5 h-full' src='/icons/cabrio.jpg' alt='cabrio'/>
        </div>

      </section>
{/* 
      <section  id="about-us" className='pt-5'>
        <div id="aboutUs" className='text-center mt-5 mx-6 lg:mx-72 text-black'>
          <h1 className='text-highlight1'>Rent a Luxury Car in Limassol</h1>
          <br/>
          <p>Welcome to <strong>Allure Luxury Car Rentals</strong>, the best choice for <strong>car rental in Limassol. </strong>
          We offer a wide range of vehicles, from <strong>economy</strong> to <strong>luxury</strong>, to suit your needs and budget.
          <br/><br/>
          We are based in Leoforos Amathous 32, Limassol but we also offer <strong>delivery and collectionf</strong>at other locations in Cyprus, including airports, for a small fee.
          We have no hidden charges, and we guarantee the best price for your car rental in Limassol.

          You can book your car online easily and securely through our website, or you can contact us by phone or email if you have any questions or special requests. We are available 24/7 to assist you with your car rental needs.
          <br/><br/>
          We are more than a car rental company. We are your partner in exploring the beautiful island of Cyprus.
          With your own car, you can explore the island and its attractions and discover the rich history and culture of Cyprus.
          <br/><br/>
          </p>
        </div>
      </section>



      <section  id="long-term" className='pt-5 md:grid md:grid-cols-2 text-center mx-6 gap-5'>
        <div>
          <h2 className='text-highlight1'>Long Term Rentals</h2>
          <p>Are you looking for a car rental in Limassol for a <strong>month or longer?</strong> If so, you should consider our long term contract option. With our long term contract, you can enjoy:
          </p>
          <ul className='text-start'>
            <li>Lower monthly rates than regular car rental</li>
            <li>Free pick up and drop off at any address in Limassol</li>
            <li>The option to swap your car for another one during the rental period</li>
            <li>The flexibility to cancel or extend your contract at any time</li>
          </ul>
          <p>
          Our long term contract is perfect for anyone who needs a car for an extended period of time. You can choose from our wide range of vehicles, from economy to luxury, and drive around the beautiful island of Cyprus with ease.
          </p>
        </div>
        <div>
          <h2 className='text-highlight1'>How to Rent a Car in Cyprus</h2>
          <p>
            If you are planning on exploring Cyprus, a rental car is essential. It provides the ability to travel at your own pace and convenience, and also grants access to areas of this amazing country that may otherwise be difficult to reach.
          </p>
          <h4 className='text-highlight1'>What Do You Need to Rent a Car in Cyprus?</h4>
          <p>
            To rent a car in Cyprus, you need a driver's license and a passport and you must be over 23 years old. An International driver's permit is not required. You can pay for your rental with a debit card or cash, but the deposit must be paid in advance and will be returned at the end of the rental period. If you choose to use a credit card, a hold equal to the deposit will be placed on your card until the rental is returned. The deposit amount varies depending on the car category.
          </p>
        </div>
      </section> */}

      <section  id="contact-us" className='pt-5'>
      <img src='/icons/road.png' alt="road" className='w-full'/>
        <div className='p-4 bg-black text-white gap-3 flex flex-col text-sm'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex flex-col gap-3'> 
              <h5>Contact Us</h5>
              <span>+357 99 667777</span>
              <span>y.kangkelidis@gmail.com</span>
              <p>Leoforos Amathous 32,<br/> Zanna Complex Block 1 Shop 8, <br/>Limassol, 4532</p>
            </div>

            <div className='h-[200px] w-full md:w-4/5 min-w-[200px]'>
              <MapWithNoSSR/>
            </div>
          </div>

          <footer>
            <hr/>
            <small className='text-grey tracking-wider'>©2023 CYTRANS SOLUTIONS. All rights reserved.</small>
          </footer>
        </div>

      </section>
    </main>
  )
}

