import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/slices/main.slice";

export const NavBar = () => {
  const [ isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();


  const routes = [
    // { route: "/app/dashboard", name: "Inicio" },
    { route: "/app/productos", name: "Productos" },
    { route: "/app/ordenes", name: "Órdenes de compra" },
  ];

  const handlerLogOut = () => {
    dispatch( logout() );
  }


  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Botón del menú en pantallas pequeñas */}
          <button onClick={toggleMenu} className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Logo / Nombre */}
          <div className="flex items-center">
            <img className="mx-auto h-10 w-auto" src="../../../logo_random.png" alt="" />
            <span className="text-2xl font-semibold dark:text-white">Order App</span>
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex space-x-6">
            {routes.map(({ route, name }) => (
              <NavLink
                key={route}
                to={route}
                className={({ isActive }) =>
                  `py-2 px-3 rounded-md text-gray-900 dark:text-white transition-colors duration-200 ${
                    isActive ? "text-blue-600 dark:text-blue-400" : "hover:text-blue-500"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Botón de Cerrar Sesión */}
          <div className="hidden md:flex">
            <button onClick={handlerLogOut} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      {/* Menú Responsive */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200">
          <ul className="py-2 space-y-2">
            {routes.map(({ route, name }) => (
              <li key={route}>
                <NavLink
                  to={route}
                  className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                className="w-full text-left py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
