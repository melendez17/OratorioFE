import React from "react";
import Navbar from "../../navigation/navbar";
import Footer from "../../navigation/footer";
import img3 from "../../../assets/Landing/Oratorio 3.png";
import img4 from "../../../assets/Landing/Oratorio 4.png";
import img5 from "../../../assets/Landing/Oratorio 5.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full">
      {/* navbar  */}
      <div className="container mx-auto">
        <Navbar />
      </div>

      
      {/* First section */}
      <div className="flex h-fit justify-center items-start p-[2rem] container mx-auto">
        {/* left half */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={img3} alt="Oratorio 1" className=" w-full pl-28" />
        </div>

        {/* right half */}
        <div className=" w-2/3 h-full flex justify-center items-start flex-col text-left px-28 py-14 space-y-6">
          <h1 className=" text-4xl font-bold w-full text-darkblue ">
            Historia de los Oratorios Salesianos
          </h1>
          <p className=" text-lg text-darkblue">
          Tienen sus raíces en la obra visionaria de <b>San Juan Bosco</b>, quien fundó el <b>primer oratorio en Turín, Italia, en 1841.</b> Don Bosco dedicó su vida a la educación y al bienestar de los jóvenes en situación de vulnerabilidad. Inspirado por su fe y su amor por la juventud, estableció los oratorios como lugares seguros donde los jóvenes podrían recibir educación integral, apoyo emocional, espiritual y oportunidades para prosperar.
          </p>
        </div>
      </div>
      
      {/* First section */}
      <div className="flex h-fit justify-center items-start p-[2rem] container mx-auto">
        {/* left half */}
        <div className=" w-2/3 h-full flex justify-center items-start flex-col text-left px-28 py-14 space-y-6">
          <h1 className=" text-4xl font-bold w-full text-darkblue ">
            Crecimiento y Expansión
          </h1>
          <p className=" text-lg text-darkblue">
          Con el éxito inicial del primer oratorio, el modelo salesiano se expandió rápidamente por Italia y luego por toda Europa. A medida que la comunidad salesiana crecía, se establecieron oratorios en diferentes países del mundo, respondiendo a la necesidad universal de brindar educación y apoyo a los jóvenes en riesgo. Hoy en día, los oratorios salesianos están presentes en numerosos países, cada uno adaptado a las necesidades locales pero manteniendo los principios fundacionales de San Juan Bosco.
          </p>
        </div>

        {/* right half */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={img4} alt="Oratorio 1" className=" w-full pl-28" />
        </div>

        
      </div>
      
      {/* First section */}
      <div className="flex h-fit justify-center items-start p-[2rem] container mx-auto">
        {/* left half */}
        <div className="w-1/3 flex justify-center items-center">
          <img src={img5} alt="Oratorio 1" className=" w-full pl-28" />
        </div>

        {/* right half */}
        <div className=" w-2/3 h-full flex justify-center items-start flex-col text-left px-28 py-14 space-y-6">
          <h1 className=" text-4xl font-bold w-full text-darkblue ">
          Hoy en día
          </h1>
          <p className=" text-lg text-darkblue">
          Hoy en día, los oratorios salesianos continúan su misión vital de educar, formar y acompañar a los jóvenes, especialmente aquellos en situaciones de vulnerabilidad. Con una red global de instituciones educativas y centros comunitarios, los salesianos están comprometidos con la promoción de la justicia social, los derechos humanos y la construcción de un futuro mejor para las nuevas generaciones. Siendo nuestro Oratorio, uno de ellos. 
          </p>
        </div>
      </div>

      

      {/* Footer */}
        <div className="container mx-auto">
            <Footer />
        </div>
    </div>
  );
};

export default AboutUs;
