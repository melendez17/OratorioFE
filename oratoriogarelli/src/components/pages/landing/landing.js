import React from "react";
import Navbar from "../../navigation/navbar";
import Footer from "../../navigation/footer";
import img1 from "../../../assets/Landing/Oratorio 1.png";
import img2 from "../../../assets/Landing/Oratorio 2.png";
import casa from "../../../assets/Landing/casa.png";
import patio from "../../../assets/Landing/patio.png";
import escuela from "../../../assets/Landing/escuela.png";
import iglesia from "../../../assets/Landing/iglesia.png";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* navbar  */}
      <div className="container mx-auto">
        <Navbar />
      </div>

      {/* first section */}
      <div className="flex h-fit container p-[2rem] mx-auto">
        {/* left half */}
        <div className=" w-2/3 flex justify-center items-center flex-col text-left px-28 space-y-6">
          <h1 className=" text-6xl font-bold w-full text-darkblue ">
            Oratorio Festivo Bartolomé Garelli
          </h1>
          <p className=" text-lg text-darkblue">
            ¡Descubre nuestro <b>Oratorio Salesiano</b>, donde los sueños de los
            jóvenes se hacen realidad siguiendo el legado de Don Bosco! Conoce
            nuestra comunidad dedicada a inspirar, educar, compartir y amar,
            formando así <b>"Buenos cristianos y honrados ciudadanos".</b>
          </p>
          {/* botones */}
          <div className=" w-full flex space-x-2 items-center">
            <button
              type="button"
              class=" text-white rounded-full  border-2 bg-pink hover:bg-white hover:border-pink hover:border-2 hover:text-pink focus:ring-4 font-medium text-sm px-4 py-2 text-center"
            >
              Conocer más
            </button>
            {/* Social network 1 */}
            <button
              type="button"
              class="text-pink border border-pink focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center hover:bg-rose-100 inline-flex items-center"
            >
              <svg
                class=" w-5 h-5 bg-transparent"
                fill="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>

              <span class="sr-only">Instagram</span>
            </button>
            {/* Social network 2 */}
            <button
              type="button"
              class="text-pink border border-pink focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center hover:bg-rose-100 inline-flex items-center"
            >
              <svg
                class=" w-5 h-5 bg-transparent"
                fill="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>

              <span class="sr-only">Instagram</span>
            </button>
            {/* Social network 3 */}
            <button
              type="button"
              class="text-pink border border-pink focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center hover:bg-rose-100 inline-flex items-center"
            >
              <svg
                class=" w-5 h-5 bg-transparent"
                fill="currentColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>

              <span class="sr-only">Instagram</span>
            </button>
          </div>
        </div>

        {/* right half */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={img1} alt="Oratorio 1" className=" w-full pr-28" />
        </div>
      </div>

      {/* Second section */}
      <div className="flex h-fit justify-center items-center p-[2rem] container mx-auto">
        {/* left half */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={img2} alt="Oratorio 1" className=" w-full pl-28" />
        </div>

        {/* right half */}
        <div className=" w-2/3 h-full flex justify-center items-center flex-col text-left px-28 py-14 pb-28 space-y-6">
          <h1 className=" text-4xl font-bold w-full text-darkblue ">
            Oratorio Festivo Bartolomé Garelli
          </h1>
          <p className=" text-lg text-darkblue">
            Continuamos el legado de Don Bosco ofreciendo un espacio seguro
            donde los jóvenes puedan desarrollar sus talentos. Promovemos una
            educación integral y valores éticos, fomentando habilidades para la
            vida.
          </p>
        </div>
      </div>

      {/* third section  */}
      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* text  */}
        <div className="flex justify-center items-center space-y-4 flex-col text-center text-darkblue p-14">
          <h1 className=" text-4xl font-bold w-full">
            Sistema Preventivo de Don Bosco
          </h1>
          <p className="text-lg max-w-4xl">
            Descubre cómo estos cuatro pilares trabajan juntos para formar
            integralmente a los jóvenes, promoviendo su crecimiento personal,
            social, intelectual y espiritual, siguiendo el método preventivo de
            Don Bosco.
          </p>
        </div>

        {/* cards */}
        <div className="flex w-fit space-x-12">
          {/* card1 */}
          <div className="mx-auto border-2 border-gray-50 transform duration-300 hover:scale-105 shadow-lg rounded-2xl flex flex-col justify-center items-center">
            {/* img */}
            <div className="">
              <img className="w-24 h-24" src={casa} alt="Casa" />
            </div>
            {/* text  */}
            <div className="p-6 pt-2 text-center">
              <h2 className="text-2xl font-bold mb-2 text-pink">Casa</h2>
              <p className="text-darkblue w-48 text-xl">
                Experiencia de sentirse en casa.
              </p>
            </div>
          </div>
          {/* card2 */}
          <div className="mx-auto transform duration-300 border-2 border-gray-50 hover:scale-105 shadow-lg rounded-2xl flex flex-col justify-center items-center">
            {/* img */}
            <div className="">
              <img className="w-24 h-24" src={iglesia} alt="Iglesia" />
            </div>
            {/* text  */}
            <div className="p-6 pt-2 text-center">
              <h2 className="text-2xl font-bold mb-2 text-orange">Iglesia</h2>
              <p className="text-darkblue w-48 text-xl">
              Descrubir a Jesús en el corazón de cada jóven.
              </p>
            </div>
          </div>
          {/* card3 */}
          <div className="mx-auto transform duration-300 border-2 border-gray-50 hover:scale-105 shadow-lg rounded-2xl flex flex-col justify-center items-center">
            {/* img */}
            <div className="">
              <img className="w-24 h-24" src={escuela} alt="Escuela" />
            </div>
            {/* text  */}
            <div className="p-6 pt-2 text-center">
              <h2 className="text-2xl font-bold mb-2 text-aquamarine">Escuela</h2>
              <p className="text-darkblue w-48 text-xl">
              Desarrollar habilidades para la vida.
              </p>
            </div>
          </div>
          {/* card4 */}
          <div className="mx-auto transform duration-300 border-2 border-gray-50 hover:scale-105 shadow-lg rounded-2xl flex flex-col justify-center items-center">
            {/* img */}
            <div className="">
              <img className="w-24 h-24" src={patio} alt="Patio" />
            </div>
            {/* text  */}
            <div className="p-6 pt-2 text-center">
              <h2 className="text-2xl font-bold mb-2 text-green">Patio</h2>
              <p className="text-darkblue w-48 text-xl">
              Para conocer gente nueva y fortalecer amistades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
        <div className="container mx-auto">
            <Footer />
        </div>
    </div>
  );
};

export default LandingPage;
