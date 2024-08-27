import React, { useState } from 'react'; // Importa useState para manejar el estado
import { Link } from 'react-router-dom';
import img1 from "../../assets/Landing/casa.png";
import Oratorio from '../../assets/Landing/Oratorio.jpg';

const Login = () => {
  const [email, setEmail] = useState(''); // Estado para el email
  const [password, setPassword] = useState(''); // Estado para la contraseña
  const [error, setError] = useState(''); // Estado para manejar errores
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Validar las credenciales
    if (email === 'oratorio@cedesdonbosco.ed.cr' && password === 'Oratorio!') {
      // Si las credenciales son correctas, redirigir al dashboard
      window.location.href = "/dashboard";
    } else {
      // Si las credenciales son incorrectas, mostrar un mensaje de error
      setError('Correo o contraseña incorrectos. Inténtalo de nuevo.');
    }
  };

  // Alterna la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex h-screen">
      <div className="absolute z-50 top-10 left-10">
        <Link to="/">
          <img src={img1} alt="Casa" className="w-20 h-20" />
        </Link>
      </div>
      <div className="flex items-center justify-center w-full px-6 mx-auto md:w-1/2">
        <div className="flex-1 max-w-md">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-left text-darkblue">Iniciar Sesión</h1>
            <p className="mt-3 text-lg text-left text-gray-600">
              Ingrese los datos a continuación para ingresar al sistema.
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit}>
              {/* Mostrar mensaje de error si existe */}
              {error && <p className="text-red-500">{error}</p>}

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-darkblue"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu correo"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-aquamarine focus:ring-aquamarine focus:outline-none focus:ring focus:ring-opacity-40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Maneja cambios en el email
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-darkblue"
                  >
                    Contraseña
                  </label>
                </div>

                <input
                  type={showPassword ? 'text' : 'password'} // Alterna entre 'text' y 'password'
                  name="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-aquamarine focus:ring-aquamarine focus:outline-none focus:ring focus:ring-opacity-40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Maneja cambios en la contraseña
                />

                {/* Botón para mostrar/ocultar contraseña */}
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825a5.992 5.992 0 01-3.75-1.287M12 15a3 3 0 003-3m0 0a3 3 0 00-3-3m3 3a3 3 0 01-3 3m0 0a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0A5.992 5.992 0 016.88 5.66M9.62 4.138a9 9 0 016.758 1.004m1.11 6.683a9 9 0 01-2.65 2.828m.11 3.112a9 9 0 01-6.41 1.61M3 3l18 18"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM2.458 12C3.732 7.943 7.337 5 12 5c4.663 0 8.268 2.943 9.542 7-.416 1.26-1.147 2.518-2.143 3.608m-1.67 1.67A8.94 8.94 0 0112 19c-4.663 0-8.268-2.943-9.542-7.002A8.943 8.943 0 014.303 7.303m1.415 1.414a7.978 7.978 0 010 8.572m2.829-2.829a3.978 3.978 0 000-3.586m-1.414-1.415a5.978 5.978 0 000 6.415"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform rounded-lg bg-aquamarine hover:bg-aquamarine focus:outline-none hover:bg-opacity-80 focus:ring focus:ring-aquamarine focus:ring-opacity-50"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="relative items-center justify-end hidden w-1/2 lg:flex">
        <div className="w-1/2 h-screen bg-aquamarine">
          <div className="absolute top-1/2 left-1/2 w-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 h-[80svh] rounded-3xl">
            <img src={Oratorio} alt="Oratorio" className="object-cover w-full h-full rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
