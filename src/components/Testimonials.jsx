const Testimonials = () => {
  return (
    <section class="p-4 pt-10 bg-secondary" id="testimonials">
        <h1 class="font-extrabold text-center text-2xl sm:text-4xl">
            Our customers &#129505; our work
        </h1>
        <div class=" testimonial-list flex flex-col sm:flex-row sm:gap-10 sm:px-10 sm:items-end sm:mx-10 pt-5">
            <div class="testimonial flex flex-wrap pt-2">
                <div class="w-1/12">
                    <span class="font-bold text-4xl">&#8220;</span>
                </div>

                <div class="w-11/12 testimonial-text">
                    <blockquote>
                        <p class="text-gray-300">
                        Welcome to Top Ryde City Ladies & Gentleman. The place where
                        this legendary barber is cutting and fading, while also
                        perfecting the art of cutting hair right by TOWN. 5/5 stars
                        </p>
                    </blockquote>
                </div>

                <div class="w-full font-bold pl-10 pt-5">Tyler Skeen</div>
            </div>

            <div class="testimonial flex flex-wrap py-2 pt-10">
                <div class="w-1/12">
                    <span class="font-bold text-4xl">&#8220;</span>
                </div>

                <div class="w-11/12 testimonial-text">
                    <blockquote>
                        <p class="text-gray-300">
                        I have been coming to Sam for just over 10 years. He is a
                        gentleman and an absolute perfectionist ... a perfect haircut
                        every time. I highly recommend Top Ryde Barber Shop
                        </p>
                    </blockquote>
                </div>

                <div class="w-full font-bold pl-10 pt-5">Matthew L</div>
            </div>

            <div class="testimonial flex flex-wrap py-2 pt-10">
                <div class="w-1/12">
                    <span class="font-bold text-4xl">&#8220;</span>
                </div>

                <div class="w-11/12 testimonial-text">
                    <blockquote>
                        <p class="text-gray-300">
                        Sam is nice and kind .. Gives you the haircut you want and takes
                        his time. He cuts it with care and love .. and tries to get to
                        knows everyone who visits his shop.
                        </p>
                    </blockquote>
                </div>

                <div class="w-full font-bold pl-10 pt-5">Delmer Fernandez</div>
            </div>

        </div>
    </section>
  )
}

export default Testimonials