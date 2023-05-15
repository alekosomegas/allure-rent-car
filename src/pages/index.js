import React from 'react'
import CarBook from '@/components/CarBook'
import LongTermBook from '@/components/LongTermBook'
import Navbar from '@/components/Navbar'


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
          Book your car with <strong>Allure Luxury Car Rentals</strong> today and enjoy the comfort and convenience of driving in Cyprus.
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
      </section>

      <section  id="contact-us" className='pt-5'>
        <div className='p-4 bg-black h-52 text-white'>
          <h3>Contact Us</h3>
          <h7>Tel: +357 99 667777</h7>
          <br></br>
          <h7>Email: y.kangkelidis@gmail.com</h7>
          <br></br>
          <h7>Address: Leoforos Amathous 32, Zanna Complex Block 1 Shop 8, Limassol, 4532</h7>
        </div>
      </section>
    </main>
  )
}

