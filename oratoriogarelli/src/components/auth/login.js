import React from 'react';
// import { useHistory } from 'react-router-dom';
import img1 from "../../assets/Landing/casa.png"
import { Link } from 'react-router-dom';
import Oratorio from '../../assets/Landing/Oratorio.jpg';

const Login = () => {

    return (
      <div className="relative flex h-screen">
        <div className="absolute top-10 z-50 left-10">
          <Link to="/">
            <img src={img1} alt="Casa" className="w-20 h-20" />
          </Link>
        </div>
        <div class="flex items-center w-full justify-center px-6 mx-auto md:w-1/2">
          <div class="flex-1 max-w-md">
            <div class="text-center">
            <h1 className=' text-4xl font-bold text-left text-darkblue'>Iniciar Sesión</h1>
              <p class="mt-3 text-gray-600  text-lg text-left">
              Ingrese los datos a continuación para ingresar al sistema.
              </p>
            </div>

            <div class="mt-8">
              <form>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm text-darkblue font-medium"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ingresa tu correo"
                    class="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-aquamarine  focus:ring-aquamarine focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label
                      for="password"
                      class="block mb-2 text-sm text-darkblue font-medium"
                    >
                      Contraseña
                    </label>
                    {/* <a
                      href="#"
                      class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a> */}
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    class="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-aquamarine  focus:ring-aquamarine focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                <Link to="/dashboard">
                  <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-aquamarine rounded-lg hover:bg-aquamarine focus:outline-none hover:bg-opacity-80 focus:ring focus:ring-aquamarine focus:ring-opacity-50">
                    Ingresar
                  </button>
                </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className=" w-1/2 lg:flex hidden justify-end items-center relative">
            <div className=' w-1/2 h-screen bg-aquamarine'>
            <div className='absolute top-1/2 left-1/2 w-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 h-[80svh] rounded-3xl'>
            <img src={Oratorio} alt="Oratorio" className="w-full h-full rounded-3xl object-cover" />
            </div>
            </div>
        </div>
      </div>
    );
};

export default Login;