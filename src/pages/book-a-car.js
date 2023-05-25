import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CarBook(props) {
    return (
        <main>
            <Navbar />
            <iframe 
                className='w-full h-screen' 
                src="https://rentsyst.com/settings/iframe-constructor/?token=bJ6LkkUGpV4Pq8gzkcXsvnK020Mr7XpH&id=4239">
            </iframe>
            <Footer />
        </main>
    )
}