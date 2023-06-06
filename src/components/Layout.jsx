import Head from "next/head"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({
    children,
    title = "Allure Rent a Car in Limassol",
    description = "Allure Rent a Car offers luxury cars at affordable prices in Limassol. Book now and discover the allure of Cyprus with ease."}) {
    return (
        <>
            <Head>
                <title key={"title"}>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                {/* <meta name="description" content="Allure car rentals is a family-run business based in Limassol. We provide luxury and affordable cars, friendly service and prices. Book now and discover the allure of Cyprus with ease."/> */}
                <meta name="description" content={description} key="description"/>
            </Head>

            <header>
                <Navbar/>
            </header>

            {children}

            <footer>
                <Footer key="footer"/>
            </footer>
        </>
    )
}