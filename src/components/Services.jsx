const Services = () => {
  return (
            <section className="p-4 pt-10" id="services">
            <h1 className="font-extrabold text-center text-2xl sm:text-4xl sm:pt-20">
                Our services and prices
            </h1>
            <div className="service-list pt-10 sm:grid sm:grid-cols-2 sm:mx-32">

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Men's Style Cut</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 35</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        The cut begins with a consultation and analysis of the client’s 
                        haircare, face shape, and style requirements to ensure excellent results.
                        Finished off with a perfect razor cleanup around the neck.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Fades and Razor Fades</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 40</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        Our unique speciality cut, that we pride ourselves on. A deep consultation, 
                        to determine if a high, medium or low razor fade is what you want. Finished off
                        with the perfect blended taper and hair style.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Hot Towel Shave</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 25</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                    We consult and analyse on your existing routine. Your face is prepared 
                    with pre shave oil and a hot towel treatment to prepare your skin.
                    Followed by the application of shaving cream and a perfectly executed razor
                    shave. 
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Beard Trims</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 10</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        A consultation to understand your desired beard shape and length. We will then expertly trim and shape your beard to perfection, leaving you with a clean and well-groomed look.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Beard Trims and Lineups</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 25</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        The complete beard grooming experience. We will trim and shape your beard, followed by a precise lineup with a straight razor to give you sharp and defined lines.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="font-bold text-xl">Discounted Pricing Men's Style Cut</div>
                    <p className="text-gray-300 mt-4">Seniors Special - $25.00</p>
                    <p className="text-gray-300 mt-4">School Students - $30.00</p>
                    <p className="text-gray-300 mt-4">Kids Under 10 - $25.00</p>
                </div>
            </div>
            </section>
  )
}

export default Services
