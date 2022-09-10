import Image from 'next/image'

const Gallery = () => {
  return (
    <section class="bg-secondary pt-10" id="gallery">
        <h1 class="font-bold text-center text-2xl sm:text-4xl sm:pt-20">Our Work </h1>
        <div class=" gallery-list image-visible grid grid-cols-2 sm:grid-cols-3 gap-3
                sm:gap-10 pt-10 sm:mx-40 ">

            <div class="gallery-image">
                <Image src="/images/fade_1_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>

            <div class="gallery-image">
                <Image src="/images/fade_2_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>
            
            <div class="gallery-image">
                <Image src="/images/fade_3_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>

            <div class="gallery-image">
                <Image src="/images/fade_4_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>

            <div class="gallery-image">
                <Image src="/images/fade_5_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>

            <div class="gallery-image">
                <Image src="/images/fade_6_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>

            <div class="gallery-image">
                <Image src="/images/fade_7_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>

            <div class="gallery-image">
                <Image src="/images/fade_8_bw.webp" width={290} height={290} loading="lazy" alt="Fade haircut" />
            </div>
        </div>
    </section>
  )
}

export default Gallery
