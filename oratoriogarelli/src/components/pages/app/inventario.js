import React from "react";
import Sidebar from "../../navigation/sidebar";
import { Link } from "react-router-dom";
import { ReactComponent as Oratorio} from '../../../assets/Landing/Oratorio.jpg';


const Inventario = () => {
  // Your component logic goes here

  return (
    <div className="bg-gray flex">
      <Sidebar></Sidebar>
      <div className="p-8">
        <h1 className=" text-darkblue font-semibold text-3xl">Inventario</h1>
        <div className="flex justify-start flex-wrap gap-8 py-8">
          {/* card  */}
          <Link>
            <div class="flex max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div
                class="w-1/3 bg-cover bg-black"
              >
                
              </div>

              <div class="w-2/3 p-4 md:p-4">
                <h1 class="text-xl font-bold text-darkblue">
                  Backpack
                </h1>

                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit In
                  odit
                </p>

                <div class="flex justify-between mt-3 item-center">
                  <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                    20
                  </h1>
                  <button class="px-2 py-1 text-xs font-bold hover:bg-indigo-50 border-2 border-darkblue text-darkblue uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Inventario;
