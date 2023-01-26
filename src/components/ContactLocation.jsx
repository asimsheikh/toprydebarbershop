import Image from 'next/image'

const ContactLocation = () => {
  return (
    <>
        <h1 class="font-extrabold text-center text-2xl pt-10 sm:text-4xl sm:pt-20">
            Our Contact details and location
        </h1>

        <div class=" item trading-contact-map flex flex-wrap items-start justify-center
            sm:mx-12 p-4 pt-14 ">
            <section class="sm:pl-32 w-full sm:w-5/12 sm:pb-10" id="trading-hours">
                <table class="table-auto text-gray-300">
                    <tr class="hidden">
                        <th>Day</th>
                        <th>Opening hour</th>
                        <th>Closing hour</th>
                    </tr>

                    <tr class="whitespace-nowrap">
                        <td class="day font-bold text-lg py-2 pr-5 border-b border-opacity-80 ">Monday</td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 8.30am </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 5.00pm </td>
                    </tr>

                    <tr class="whitespace-nowrap">
                        <td class="day font-bold text-lg py-2 pr-5 border-b border-opacity-80 ">Tuesday </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 8.30am </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 5.00pm </td>
                    </tr>

                    <tr class="whitespace-nowrap">
                        <td class=" day font-bold text-lg py-2 pr-5 border-b border-opacity-80 ">Wednesday </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 8.30am </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 5.00pm </td>
                    </tr>

                    <tr class="whitespace-nowrap">
                        <td class="day font-bold text-lg py-2 pr-5 border-b border-opacity-80 "> Thursday </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 8.30am </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 6.00pm </td>
                    </tr>

                    <tr class="whitespace-nowrap">
                        <td class=" day font-bold text-lg py-2 pr-5 border-b border-opacity-80 "> Friday </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 8.30am </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 5.30pm </td>
                    </tr>

                    <tr class="whitespace-nowrap">
                        <td class=" day font-bold text-lg py-2 pr-5 border-b border-opacity-80 "> Saturday </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 7.30am </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> 2.30pm </td>
                    </tr>

                    <tr class="whitespace-nowrap">
                        <td class=" day font-bold text-lg py-2 pr-5 border-b border-opacity-80 "> Sunday </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"> Closed </td>
                        <td class="text-lg py-2 pr-5 border-b border-opacity-80"></td>
                    </tr>
                </table>

            </section>

            <section class=" sm:pl-10 py-10 sm:py-2 text-lg w-full sm:w-1/2 text-gray-300 leading-loose " id="contact-details">
                <address>
                    <p>4 Church Street</p>
                    <p>RYDE NSW 2112</p>
                    <p>Sydney Australia</p>
                    <br />
                    <p>Sam Sakar (Head Barber)</p>
                    <p>(02) 9809 4807</p>
                    <p>toprydebarbershop@gmail.com</p>
                </address>
            </section>

            <section class="sm:pl-5 w-full sm:w-3/4 h-1/2" id="map-location">
                <Image src="/images/map.PNG" width={1902} height={719} alt="Map for business location"/>
                {/* <iframe loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13259.268490600076!2d151.10357889235834!3d-33.81703216288531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x516122b7b00dd9f2!2sTop+Ryde+Barber+Shop!5e0!3m2!1sen!2sau!4v1509249841346"
                class="w-full h-80 filter grayscale" ></iframe> */}
            
            <div class="flex flex-row">
                <a class="underline underline-offset-8" href="https://goo.gl/maps/ReQE2rjNExzesXQz6">Click here to open in google maps</a>
                <svg class="fill-white w-6 ml-2 svg-icon" viewBox="0 0 20 20">
                    <path fill="white" d="M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z"></path>
                    <path fill="white" d="M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z"></path>
                </svg>
            </div>
            </section>

        </div>
    </>
    )
}

export default ContactLocation