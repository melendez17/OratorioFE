import React from "react";
import Sidebar from "../../navigation/sidebar";
import { Link } from "react-router-dom";
import { ReactComponent as Oratorio } from "../../../assets/Landing/Oratorio.jpg";

const Inventario = () => {
  // Your component logic goes here

  return (
    <div className="bg-gray flex">
      <Sidebar></Sidebar>
      <div className="p-8">
        <h1 className=" text-darkblue font-semibold text-3xl">Actividades</h1>
        <div className="flex justify-start flex-wrap gap-8 py-4">
          {/* card  */}
          <Link className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-darkblue">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex flex-row gap-2 py-4">
                <button className="w-1/2 text-zinc-400 bg-gray font-semibold py-2 rounded-lg">
                  Agregar
                </button>
                <button className="w-1/2 text-white bg-darkblue font-semibold py-2 rounded-lg">
                  Agregar
                </button>
              </div>
          </Link>
          {/* card  */}
          <Link className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-darkblue">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex flex-row gap-2 py-4">
                <button className="w-1/2 text-zinc-400 bg-gray font-semibold py-2 rounded-lg">
                  Agregar
                </button>
                <button className="w-1/2 text-white bg-darkblue font-semibold py-2 rounded-lg">
                  Agregar
                </button>
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
