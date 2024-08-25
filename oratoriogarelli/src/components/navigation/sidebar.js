import React, { useContext, createContext, useState } from "react";
import {
  MoreVertical,
  ArrowRightFromLine,
  ArrowLeftFromLine,
  LayoutDashboard,
  CalendarDays,
  Boxes,
  NotebookText,
  Dices,
  Users,
//   LifeBuoy,
  Settings
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// import { CalendarDays } from "lucide-react";

const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();  // Obtén la ubicación actual

  const sidebarItems = [
    { icon: <LayoutDashboard />, text: "Dashboard", path: "/dashboard" },
    { icon: <CalendarDays />, text: "Calendario", path: "/calendario" },
    { icon: <NotebookText />, text: "Jornadas", path: "/jornadas" },
    { icon: <Boxes />, text: "Inventario", path: "/inventario" },
    { icon: <Dices />, text: "Actividades", path: "/actividades" },
    { icon: <Users />, text: "Participantes", path: "/participantes" },
    // { icon: <LifeBuoy />, text: "Soporte", path: "/soporte" },
    { icon: <Settings />, text: "Configuración", path: "/configuracion" },
  ];

  return (
    <div className="h-screen">
      <nav className="h-screen w-fit bg-darkblue flex flex-col shadow-xl border-r-2 border-gray">
        <div
          className={`p-4 pb-2 w-full flex h-fit items-center ${
            expanded ? "w-32 justify-between" : "justify-center"
          }`}
        >
          <div
            className={`transition-all text-white font-bold text-2xl duration-700 ${
              expanded ? "w-32" : "w-0 hidden"
            }`}
          >
            Oratorio
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg  text-white2 hover:bg-white2 hover:text-darkblue"
          >
            {expanded ? <ArrowLeftFromLine /> : <ArrowRightFromLine />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 transition-all duration-700">
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                path={item.path}
                active={location.pathname === item.path} // Comparación de paths
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        <Link to="/">
        <div className="border-t flex justify-center items-center p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all py-2 duration-700 ${
                expanded ? "w-52 ml-3" : "w-0"
              }
          `}
          >
            <div className="leading-5">
              <h4 className="font-semibold text-gray">John Doe</h4>
              <span className="text-xs text-gray">johndoe@gmail.com</span>
            </div>
            <MoreVertical className=" text-white2" size={20} />
          </div>
        </div>
        </Link>
      </nav>
    </div>
  );
}

function SidebarItem({ icon, text, active, alert, path }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link to={path}>
      <li
        className={`
          flex relative items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? "bg-gradient-to-tr from-indigo-950 to-indigo-950 text-white"
              : "hover:bg-indigo-950 text-white2"
          }
      `}
      >
        <div className="flex text-white justify-center items-center p-3">
          {icon}
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all duration-700 ${
                expanded ? "w-52 ml-3" : "w-0"
              }
          `}
          >
            <div className="leading-4">
              <span
                className={`overflow-hidden transition-all text-white duration-700 ${
                  expanded ? "w-52 ml-3" : "w-0 hidden"
                }`}
              >
                {text}
              </span>
              {alert && (
                <div
                  className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                    expanded ? "" : "top-2"
                  }`}
                />
              )}

              {!expanded && (
                <div
                  className={`
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 left-full rounded-md px-2 py-1 ml-6
                    bg-darkblue text-indigo-100 text-sm
                    invisible opacity-20 -translate-x-3 transition-all duration-700
                    group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                  `}
                >
                  {text}
                </div>
              )}
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
