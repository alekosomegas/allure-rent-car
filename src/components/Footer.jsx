import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false});

export default function Footer(props) {
    return (
        <section id="contact-us" className=''>
          <div className='p-4 bg-black text-grey gap-3 flex flex-col text-sm'>
            <div className='flex flex-col md:flex-row justify-between'>

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