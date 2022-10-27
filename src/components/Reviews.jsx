
import Image from 'next/image'

const Reviews = () => {
  return (
    <section class="py-8 sm:py-6" id="reviews">
        <div class="reviews p-4 flex pl-28 justify-center sm:justify-start sm:pl-36 ">
            <div class="social">
                <Image class="google-logo w-7/12" loading="lazy"
                width={159}
                height={54}
                src="/images/google.svg"
                fill="lightgrey"
                alt="Google Logo" />
                <div>
                    <p class="text-gray-400 text-lg pl-5"> 4.7 &#9733;&#9733;&#9733;&#9733;&#9733; </p>
                    <p><span class="text-gray-400 text-sm pl-8">219 Reviews</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews