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
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 40</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        The cut begins with a consultation and analysis of the client’s 
                        haircare, face shape, and style requirements to ensure excellent results.
                        Finished off with a perfect razor cleanup around the neck.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Razor/Skin Fades</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 45</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        Our unique speciality cut, that we pride ourselves on. A deep consultation, 
                        to determine if a high, medium or low razor fade is what you want. Finished off
                        with the perfect blended taper and hair style.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Hair & Beard</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 70</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        The complete package. A full style cut or fade combined with a beard trim and lineup, ensuring you leave looking sharp and well-groomed.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Aged Pensioners (65+)</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 30</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        Special discounted pricing for our valued senior citizens. Valid ID may be required.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">School Students</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 35</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        Discounted style cuts for school students.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">School Students Fades</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 40</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        Razor/skin fades at a special price for school students.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Face Shaves</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 35</div>
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
                        <div className="font-bold text-xl">Beard Trim & Line-Up</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 35</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        The complete beard grooming experience. We will trim and shape your beard, followed by a precise lineup with a straight razor to give you sharp and defined lines.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Beard Trim</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 20</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        A consultation to understand your desired beard shape and length. We will then expertly trim and shape your beard to perfection, leaving you with a clean and well-groomed look.
                    </p>
                </div>

                <div className="service-item py-5 p-4 mx-4">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">Restyle From</div>
                        <div className="font-bold text-3xl pr-8"><span className="text-xl">$</span> 60</div>
                    </div>
                    <p className="text-gray-300 mt-4">
                        Looking for a completely new look? Our restyle service allows extra time for a thorough consultation and precision cutting to transform your style.
                    </p>
                </div>
            </div>
            </section>
  )
}

export default Services
