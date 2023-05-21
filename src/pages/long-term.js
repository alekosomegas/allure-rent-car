import Navbar from '@/components/Navbar'
import LongTermCarListing from '@/components/LongTermCarListining'

const cars = require('../cars')

let items
items = cars.map(car=> <LongTermCarListing car={car}/>)


export default function LongTerm(props) {
    return (
        <main>
            <Navbar />

            <div>
                {items}
            </div>
        </main>
    )
}