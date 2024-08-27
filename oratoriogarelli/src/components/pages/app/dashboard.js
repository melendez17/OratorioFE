import React from "react";
import Sidebar from "../../navigation/sidebar"; // Importa SidebarItem junto con Sidebar
import Calendar from "../../pages/app/calendar/calendar"; // Importa SidebarItem junto con Sidebar
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from '../../../assets/Landing/Icon.svg';
import JornadasData from "../d/jordata"


function Dashboard() {
  return (
    <div className="flex flex-row bg-gray">
      <Sidebar />
      <div className="grid w-full h-screen grid-cols-3 gap-3 grid-rows-8">
        {/* welcome*/}
        <div className="flex items-center justify-center col-span-2 row-span-1">
          <div className="flex flex-col w-full p-4 px-6 m-4 mb-0 mr-0 bg-aquamarine rounded-xl">
            <span className="block text-2xl font-semibold text-white2">
              ¡Hola, esto es el Oratorio Festivo Bartolomé Garelli!
            </span>
            <span className="block text-lg text-white2">
              Bienvenido de vuelta
            </span>
          </div>
        </div>

        {/* Ranking */}
        <div className="col-span-1 col-start-1 row-span-4 px-8 py-2">
          {/* Animadores */}
          <div className="pb-4 text-xl font-semibold text-darkblue">
            Ranking Animadores
          </div>
          <div className="space-y-2">
            {/* person 1 */}
            <div className="flex items-center justify-start w-full px-4 space-x-4 border-b-2 rounded-md">
              {/* <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                alt=""
                className="w-10 h-10 rounded-md"
              /> */}
              {/* <div
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
                <div className="flex items-center justify-center w-10 h-10 font-medium text-white rounded-full bg-pink">
                  0
                </div>
              </div> */}
            </div>
          </div>
          {/* Oratorianos */}
          {/* <div className="pt-4 pb-2 text-xl font-semibold text-darkblue"> */}
            {/* Ranking Oratorianos */}
          {/* </div> */}
          {/* <div className="space-y-2"> */}
            {/* person 1 */}
            {/* <div className="flex items-center justify-start w-full px-4 space-x-4 border-b-2 rounded-md">
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
                <div className="flex items-center justify-center w-10 h-10 font-medium text-white rounded-full bg-pink">
                  10
                </div>
              </div>
            </div> */}
            {/* person 2 */}
            {/* <div className="flex items-center justify-start w-full px-4 space-x-4 border-b-2 rounded-md">
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
                <div className="flex items-center justify-center w-10 h-10 font-medium text-white rounded-full bg-pink">
                  10
                </div>
              </div>
            </div> */}
            {/* person 3 */}
            {/* <div className="flex items-center justify-start w-full px-4 space-x-4 border-b-2 rounded-md">
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
                <div className="flex items-center justify-center w-10 h-10 font-medium text-white rounded-full bg-pink">
                  10
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>

        {/* Asistencia fila */}
        <div className="flex flex-col h-full col-span-1 col-start-2 row-span-4 px-8 py-2 border-l-4 border-opacity-50 border-stone-300">
            <div className="flex items-end justify-between w-full">
            <span className="pb-4 text-xl font-semibold text-darkblue">
                Asistencia
            </span>
            <span className="pb-4 font-medium text-md text-darkblue">
                24 de Agosto
            </span>
            </div>
            {/* containers */}
            <div className="flex flex-col h-full space-y-4">
                {/* container 1 */}
                <div className="flex items-center justify-between flex-grow px-8 space-x-4 shadow-lg bg-white2 rounded-xl">
                        <Icon className="text-aquamarine"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Adolescencia</span>
                            <span className="font-medium text-md">24 de Agosto</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-aquamarine">0</span>
                        </div>
                </div>
                {/* container 2 */}
                <div className="flex items-center justify-between flex-grow px-8 space-x-4 shadow-lg bg-white2 rounded-xl">
                        <Icon className="text-pink"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Edad Mediana</span>
                            <span className="font-medium text-md">24 de Agosto</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-pink">0</span>
                        </div>
                </div>
                {/* container 3 */}
                <div className="flex items-center justify-between flex-grow px-8 space-x-4 shadow-lg bg-white2 rounded-xl">
                        <Icon className="text-orange"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Edad Pequeña</span>
                            <span className="font-medium text-md">24 de Agosto</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-orange">0</span>
                        </div>
                </div>
                {/* container 4 */}
                <div className="flex items-center justify-between flex-grow px-8 space-x-4 shadow-lg bg-white2 rounded-xl">
                        <Icon className="text-darkblue"></Icon>
                        <div className="flex flex-col flex-grow">
                            <span className="text-lg font-semibold">Total</span>
                            <span className="font-medium text-md">24 de Agosto</span>
                        </div>
                        <div>
                            <span className="text-4xl font-bold text-darkblue">0</span>
                        </div>
                </div>
            </div>
        </div>

        {/* Accesos fila */}
        <div className="flex flex-col col-span-2 col-start-1 row-span-3 px-8">
          <div className="flex flex-shrink-0 pt-8 pb-0 text-2xl font-semibold text-darkblue">
            Etapas
          </div>
          {/* cards */}
          <div className="flex flex-grow w-full my-8 gap-x-4">
            {/* card 1 */}
            <Link
              to="/dashboard"
              className="flex flex-col items-center justify-center flex-grow w-auto p-8 text-left duration-500 transform border-l-8 shadow-xl hover:scale-105 shadow-neutral-200 bg-white2 rounded-xl py-14 border-aquamarine h-fit h"
            >
              <span className="w-full text-xl font-semibold ">
                Adolescencia
              </span>
              <span className="w-full text-lg font-medium text-neutral-400">
                12 - 18 años
              </span>
            </Link>
            {/* card 1 */}
            <Link
              to="/dashboard"
              className="flex flex-col items-center justify-center flex-grow w-auto p-8 text-left duration-500 transform border-l-8 shadow-xl bg-white2 hover:scale-105 shadow-neutral-200 rounded-xl py-14 border-pink h-fit h"
            >
              <span className="w-full text-xl font-semibold ">
                Edad Mediana
              </span>
              <span className="w-full text-lg font-medium text-neutral-400">
                9 - 12 años
              </span>
            </Link>
            {/* card 1 */}
            <Link
              to="/dashboard"
              className="flex flex-col items-center justify-center flex-grow w-auto p-8 text-left duration-500 transform border-l-8 shadow-xl bg-white2 hover:scale-105 shadow-neutral-200 rounded-xl py-14 border-orange h-fit h"
            >
              <span className="w-full text-xl font-semibold ">
                Adolescencia
              </span>
              <span className="w-full text-lg font-medium text-neutral-400">
                4 - 9 años
              </span>
            </Link>
          </div>
        </div>

        {/* Eventos fila */}
        <div className="col-span-1 col-start-3 row-start-1 p-10 overflow-y-auto px-14 bg-gray row-span-8">
          <span className="text-2xl font-semibold text-darkblue">
            Calendario
          </span>
          <Calendar />
          <span className="block p-4 pl-0 text-2xl font-semibold text-darkblue">
            Actividades
          </span>
          <ol className="relative w-full border-l-2 border-gray-200 border-s border-aquamarine dark:border-gray-700">
            {JornadasData.length > 0 ? (
              JornadasData.map((jornada, index) => (
                <li key={index} className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 bg-gray border-2 border-aquamarine dark:border-gray-900 dark:bg-gray-700"></div>
                  <h3 className="text-lg font-semibold text-aquamarine">
                    {jornada.descripcion}
                  </h3>
                  <time className="mb-1 text-sm font-semibold leading-none text-gray-400 dark:text-gray-500">
                    {jornada.fecha}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {/* Aquí puedes añadir más detalles de la actividad si lo deseas */}
                    Actividades relacionadas con esta jornada.
                  </p>
                </li>
              ))
            ) : (
              <li className="p-8 mb-4 text-lg font-medium text-center text-darkblue">
                No hay jornadas registradas.
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
