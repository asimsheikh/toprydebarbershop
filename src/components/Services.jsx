const Services = () => {
  return (
            <section class="p-4 pt-10" id="services">
            <h1 class="font-extrabold text-center text-2xl sm:text-4xl sm:pt-20">
                Our services and prices
            </h1>
            <div class="service-list pt-10 sm:grid sm:grid-cols-2 sm:mx-32">

                <div class="service-item py-5 p-4 mx-4">
                    <div class="flex flex-row justify-between">
                        <div class="font-bold text-xl">Men's Style Cut</div>
                        <div class="font-bold text-3xl pr-8"><span class="text-xl">$</span> 35</div>
                    </div>
                    <p class="text-gray-300 mt-4">
                        The cut begins with a consultation and analysis of the client’s 
                        haircare, face shape, and style requirements to ensure excellent results.
                        Finished off with a perfect razor cleanup around the neck.
                    </p>
                </div>

                <div class="service-item py-5 p-4 mx-4">
                    <div class="flex flex-row justify-between">
                        <div class="font-bold text-xl">Fades and Razor Fades</div>
                        <div class="font-bold text-3xl pr-8"><span class="text-xl">$</span> 40</div>
                    </div>
                    <p class="text-gray-300 mt-4">
                        Out unique speciality cut, that we pride ourselves on. A deep consultation, 
                        to determine if a high, medium or low razor fade is what you want. Finished off
                        with the perfect blended taper and hair style.
                    </p>
                </div>

                <div class="service-item py-5 p-4 mx-4">
                    <div class="flex flex-row justify-between">
                        <div class="font-bold text-xl">Hot Towel Shave</div>
                        <div class="font-bold text-3xl pr-8"><span class="text-xl">$</span> 25</div>
                    </div>
                    <p class="text-gray-300 mt-4">
                    We consult and analyse on your existing routine. Your face is prepared 
                    with pre shave oil and a hot towel treatment to prepare your skin.
                    Followed by the application of shaving cream and a perfectly executed razor
                    shave. 
                    </p>
                </div>

                <div class="service-item py-5">
                <h3 class="font-bold text-xl">Beard Trims - $10.00</h3>
                <p class="hidden">
                    ed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                </p>
                </div>

                <div class="service-item py-5">
                <h3 class="font-bold text-xl">Beard Trims and Lineups - $25.00</h3>
                <p class="hidden">
                    ed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                </p>
                </div>

                <div class="service-item py-5">
                <h3 class="font-bold text-xl">
                    Discounted Pricing Men's Style Cut
                </h3>
                <p>Seniors Special - $25.00</p>
                <p>School Students - $30.00</p>
                <p>Kids Under 10 - $25.00</p>
                </div>
            </div>
            </section>
  )
}

export default Services
