import Image from 'next/image'

const Hero = () => {
  return (
        <section class="p-4 sm:flex" id="hero">
            <div class="pt-14 sm:pt-30 sm:w-6/12 sm:pl-14">
                <h1 class="font-extrabold text-4xl sm:text-5xl">The Best Haircuts</h1>
                <h1 class="font-extrabold text-4xl sm:text-5xl"> Razor Fades, Trims & Shaves </h1>
                <br />

                <p class="text-md text-gray-300 sm:leading-loose sm:text-lg sm:pt-5">
                We are a group of professional barbers in Sydney that care about the
                craft of the perfect cut and fade. An institution that has been in
                the business for over 50 years
                </p>
                <br />

                <a class="font-extrabold bg-white text-black hover:bg-black hover:text-white
                    w-full sm:w-9/12 sm:mt-8 sm:py-5 sm:text-lg py-3 inline-block text-center " 
                    href="https://www.fresha.com/book-now/topryde-barber-shop-ubrwyxui/all-offer?pId=546039">
                <p class="text-xl">Book an appointment</p></a>
            </div>

            <div class="hero-image hidden sm:w-7/12 sm:m-10 sm:inline-block">
                <Image src="/images/hero-image.jpg" 
                       height={418} 
                       width={624} 
                       loading="lazy"
                       alt="combing hair of barbershop client" />
            </div>
        </section>
  )
}

export default Hero
