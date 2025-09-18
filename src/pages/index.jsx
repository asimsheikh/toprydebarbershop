import Head from 'next/head'

import NavBar from '../components/Nav'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import ContactLocation from '../components/ContactLocation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Head>
            <title>Top Ryde Barber Shop</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description"
                content="We are a barber shop with the best fades, haircuts, styles and trims in the Sydney. located in Top Ryde Sydney." />
            <meta name="google-site-verification" content="U-qSmQqNPntzuM8OYh5w9BhNxojFoKpPGHLA9N9p9PQ" />
        </Head>

        <body className="bg-[#000000ad]">
        <div className="container mx-auto text-white font-['Montserrat']">
            <NavBar />
            <Hero />
            <Reviews />
            <Testimonials />
            <Services />
            <Gallery />
            <ContactLocation />
            <Footer />
        </div>
        </body>
    </>
  );
};

export default Home;


