import React from "react";
import Sidebar from "../../navigation/sidebar"; // Importa SidebarItem junto con Sidebar
import Calendar from "../../pages/app/calendar/calendar"; // Importa SidebarItem junto con Sidebar
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from '../../../assets/Landing/Icon.svg';


function Dashboard() {
  return (
    <div className="flex bg-gray flex-row">
      <Sidebar />
      <div className=" grid grid-cols-3 gap-3 w-full h-screen grid-rows-8">
        {/* welcome*/}
        <div className="col-span-2 flex justify-center items-center row-span-1">
          <div className=" w-full p-4 px-6 mb-0 m-4 mr-0 bg-aquamarine flex rounded-xl flex-col">
            <span className=" block text-2xl text-white2 font-semibold">
              ¡Hola, [Nombre]!
            </span>
            <span className="block text-lg text-white2">
              Bienvenido de vuelta
            </span>
          </div>
        </div>

        {/* Ranking */}
        <div className="col-span-1 row-span-4 col-start-1 px-8 py-2">
          {/* Animadores */}
          <div className="text-xl text-darkblue font-semibold pb-4">
            Ranking Animadores
          </div>
          <div className="space-y-2">
            {/* person 1 */}
            <div className="flex justify-start space-x-4 border-b-2 rounded-md items-center w-full px-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
              />
              <div
                className={`
                    flex justify-between w-full items-center
                    overflow-hidden transition-all py-2 duration-700
                `}
              >
                <div className="leading-5">
                  <h4 className="font-semibold text-darkblue">
                    Andrés Meléndez
                  </h4>
                  <span className="text-xs text-gray-600 text-stone-500">
                    Edad Pequeña
                  </span>
                </div>
                <div className="bg-pink text-white w-10 h-10 rounded-full flex justify-center items-center font-medium">
                  10
                </div>
              </div>
            </div>
            {/* person 2 */}
            <div className="flex justify-start space-x-4 border-b-2 rounded-md items-center w-full px-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
              />
              <div
                className={`
                    flex justify-between w-full items-center
                    overflow-hidden transition-all py-2 duration-700
                `}
              >
                <div className="leading-5">
                  <h4 className="font-semibold text-darkblue">
                    Andrés Meléndez
                  </h4>
                  <span className="text-xs text-gray-600 text-stone-500">
                    Edad Pequeña
                  </span>
                </div>
                <div className="bg-pink text-white w-10 h-10 rounded-full flex justify-center items-center font-medium">
                  10
                </div>
              </div>
            </div>
            {/* person 3 */}
            <div className="flex justify-start space-x-4 border-b-2 rounded-md items-center w-full px-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
              />
              <div
                className={`
                    flex justify-between w-full items-center
                    overflow-hidden transition-all py-2 duration-700
                `}
              >
                <div className="leading-5">
                  <h4 className="font-semibold text-darkblue">
                    Andrés Meléndez
                  </h4>
                  <span className="text-xs text-gray-600 text-stone-500">
                    Edad Pequeña
                  </span>
                </div>
                <div className="bg-pink text-white w-10 h-10 rounded-full flex justify-center items-center font-medium">
                  10
                </div>
              </div>
            </div>
          </div>
          {/* Oratorianos */}
          {/* <div className="text-xl text-darkblue pt-4 font-semibold pb-2"> */}
            {/* Ranking Oratorianos */}
          {/* </div> */}
          {/* <div className="space-y-2"> */}
            {/* person 1 */}
            {/* <div className="flex justify-start space-x-4 border-b-2  rounded-md items-center w-full px-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
              />
              <div
                className={`
                    flex justify-between w-full items-center
                    overflow-hidden transition-all py-2 duration-700
                `}
              >
                <div className="leading-5">
                  <h4 className="font-semibold text-darkblue">
                    Andrés Meléndez
                  </h4>
                  <span className="text-xs text-gray-600 text-stone-500">
                    Edad Pequeña
                  </span>
                </div>
                <div className="bg-pink text-white w-10 h-10 rounded-full flex justify-center items-center font-medium">
                  10
                </div>
              </div>
            </div> */}
            {/* person 2 */}
            {/* <div className="flex justify-start space-x-4  border-b-2 rounded-md items-center w-full px-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
              />
              <div
                className={`
                    flex justify-between w-full items-center
                    overflow-hidden transition-all py-2 duration-700
                `}
              >
                <div className="leading-5">
                  <h4 className="font-semibold text-darkblue">
                    Andrés Meléndez
                  </h4>
                  <span className="text-xs text-gray-600 text-stone-500">
                    Edad Pequeña
                  </span>
                </div>
                <div className="bg-pink text-white w-10 h-10 rounded-full flex justify-center items-center font-medium">
                  10
                </div>
              </div>
            </div> */}
            {/* person 3 */}
            {/* <div className="flex justify-start space-x-4 border-b-2 rounded-md items-center w-full px-4">
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
              />
              <div
                className={`
                    flex justify-between w-full items-center
                    overflow-hidden transition-all py-2 duration-700
                `}
              >
                <div className="leading-5">
                  <h4 className="font-semibold text-darkblue">
                    Andrés Meléndez
                  </h4>
                  <span className="text-xs text-gray-600 text-stone-500">
                    Edad Pequeña
                  </span>
                </div>
                <div className="bg-pink text-white w-10 h-10 rounded-full flex justify-center items-center font-medium">
                  10
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>

        {/* Asistencia fila */}
        <div className=" col-span-1 col-start-2 row-span-4 px-8 py-2 flex flex-col border-l-4 border-opacity-50 h-full border-stone-300">
            <div className="w-full flex justify-between items-end">
            <span className="text-xl text-darkblue font-semibold pb-4">
                Asistencia
            </span>
            <span className="text-md text-darkblue font-medium pb-4">
                20 de Septiembre
            </span>
            </div>
            {/* containers */}
            <div className="flex flex-col h-full space-y-4">
                {/* container 1 */}
                <div className=" bg-white2 justify-between space-x-4 items-center px-8 rounded-xl shadow-lg flex flex-grow">
                        <Icon className="text-aquamarine"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Adolescencia</span>
                            <span className="text-md font-medium">20 de febrero</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-aquamarine">10</span>
                        </div>
                </div>
                {/* container 2 */}
                <div className=" bg-white2 justify-between space-x-4 items-center px-8 rounded-xl shadow-lg flex flex-grow">
                        <Icon className="text-pink"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Edad Mediana</span>
                            <span className="text-md font-medium">20 de febrero</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-pink">10</span>
                        </div>
                </div>
                {/* container 3 */}
                <div className=" bg-white2 justify-between space-x-4 items-center px-8 rounded-xl shadow-lg flex flex-grow">
                        <Icon className="text-orange"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Edad Pequeña</span>
                            <span className="text-md font-medium">20 de febrero</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-orange">10</span>
                        </div>
                </div>
                {/* container 4 */}
                <div className=" bg-white2 justify-between space-x-4 items-center px-8 rounded-xl shadow-lg flex flex-grow">
                        <Icon className="text-darkblue"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="text-md font-medium">20 de febrero</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-darkblue">10</span>
                        </div>
                </div>
            </div>
        </div>

        {/* Accesos fila */}
        <div className="col-span-2 px-8 flex flex-col col-start-1 row-span-3">
          <div className=" text-2xl font-semibold flex flex-shrink-0 text-darkblue pt-8 pb-0">
            Etapas
          </div>
          {/* cards */}
          <div className="flex flex-grow w-full gap-x-4 my-8">
            {/* card 1 */}
            <Link
              to="/dashboard"
              className="flex flex-grow shadow-xl transform hover:scale-105 duration-500 shadow-neutral-200 bg-white2 rounded-xl border-l-8 p-8 py-14 border-aquamarine h-fit flex-col w-auto h justify-center items-center text-left"
            >
              <span className=" w-full text-xl font-semibold">
                Adolescencia
              </span>
              <span className="w-full text-lg font-medium text-neutral-400">
                12 - 18 años
              </span>
            </Link>
            {/* card 1 */}
            <Link
              to="/dashboard"
              className="flex bg-white2 shadow-xl transform hover:scale-105 duration-500 shadow-neutral-200 flex-grow rounded-xl border-l-8 p-8 py-14 border-pink h-fit flex-col w-auto h justify-center items-center text-left"
            >
              <span className=" w-full text-xl font-semibold">
                Edad Mediana
              </span>
              <span className="w-full text-lg font-medium text-neutral-400">
                9 - 12 años
              </span>
            </Link>
            {/* card 1 */}
            <Link
              to="/dashboard"
              className="flex bg-white2 shadow-xl transform hover:scale-105 duration-500 shadow-neutral-200 rounded-xl flex-grow border-l-8 p-8 py-14 border-orange h-fit flex-col w-auto h justify-center items-center text-left"
            >
              <span className=" w-full text-xl font-semibold">
                Adolescencia
              </span>
              <span className="w-full text-lg font-medium text-neutral-400">
                4 - 9 años
              </span>
            </Link>
          </div>
        </div>

        {/* Eventos fila */}
        <div className="bg-gray col-span-1 overflow-y-auto p-10 col-start-3 row-span-8 row-start-1">
          <span className=" text-2xl font-semibold text-darkblue">
            Calendario
          </span>
          <Calendar></Calendar>
          <span className=" text-2xl font-semibold text-darkblue  block p-4 pl-0">
            Actividades
          </span>
          <ol class="relative border-s border-l-2 border-aquamarine w-full border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-gray border-2 border-aquamarine dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 class="text-lg font-semibold text-aquamarine">
                Juanito Bosco
              </h3>
              <time class="mb-1 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">
                20th March 2022
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Juanito Bosco es una figura destacada en la historia de la
                educación y la enseñanza religiosa. Adentremonos en su vida y
                obra.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
