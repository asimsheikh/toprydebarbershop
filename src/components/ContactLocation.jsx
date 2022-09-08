const ContactLocation = () => {
  return (
    <>
        <h1 class="font-bold text-center text-2xl pt-10 sm:text-4xl sm:pt-20">
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
                <p>4 Church Street</p>
                <p>RYDE NSW 2112</p>
                <p>Sydney Australia</p>
                <br />
                <p>Sam Sakar (Head Barber)</p>
                <p>(02) 9809 4807</p>
                <p>toprydebarbershop@gmail.com</p>
            </section>

            <section class="sm:pl-5 w-full sm:w-3/4 h-1/2" id="map-location">
                <iframe loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13259.268490600076!2d151.10357889235834!3d-33.81703216288531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x516122b7b00dd9f2!2sTop+Ryde+Barber+Shop!5e0!3m2!1sen!2sau!4v1509249841346"
                class="w-full h-80 filter grayscale" ></iframe>
            </section>

        </div>
    </>
    )
}

export default ContactLocation