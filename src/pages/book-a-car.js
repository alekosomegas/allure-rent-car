import Layout from '@/components/Layout'

const metaDescription = `Choose a car from our fleet, choose your location anywhere in Cyprus and book your rental online.`

export default function CarBook(props) {
    return (
        <Layout title='Rent your car' description={metaDescription}>
            <iframe 
                className='w-full h-screen' 
                src="https://rentsyst.com/settings/iframe-constructor/?token=bJ6LkkUGpV4Pq8gzkcXsvnK020Mr7XpH&id=4239">
            </iframe>
        </Layout>
    )
}