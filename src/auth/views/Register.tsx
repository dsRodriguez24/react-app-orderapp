import { Navigate, NavLink } from "react-router-dom"
import { optionSelect } from "../../components/interfaces/IElementAndLabel"
import { useForm } from "../../hooks/useForm"
import { getRol, sendRegister } from "../../api"
import { generarSweetAlert } from "../../helpers/sweetalert"
import { useEffect, useState } from "react"

export const Register = () => {
  const getOptionsRol = async () => {
    const datos = await getRol( {} );
    return datos;
  }

  const [options, setOptions] = useState([])

  useEffect(() => {

    (async function() {
      const optionsRol = await getOptionsRol();
      const { data } = optionsRol;
      const newData = data.map((rol: any) => {
        return { key: rol.id, value: rol.nombre}
      })
      setOptions(newData);
    })();
    
  }, [])
  

  const initialState = {
    nombre: "",
    email: "",
    password: "",
    rol: 1,
  }; 
  const { changeForm, setForm ,nombre, email, password , rol } = useForm(initialState);


  const handlerSubmit = async (e :any ) => {
    e.preventDefault();

    const datos = { nombre, email, password , rol };
    const respuesta = await sendRegister(datos);
    const { status , message } = respuesta;
    generarSweetAlert(status , message)

    if (!status) return;
    setForm(initialState);

    <Navigate to="/auth/login"/>

  }


  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handlerSubmit} method="POST">
                  <div className="mb-3">
                      <label className="block text-sm/6 font-medium text-gray-900">Nombre completo</label>
                      <div className="mt-2"><input type="text" onChange={changeForm} value={nombre}  name="nombre" id="nombre" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"/></div>
                  </div>
                  <div className="mb-3">
                      <label className="block text-sm/6 font-medium text-gray-900">Email</label>
                      <div className="mt-2"><input type="email" onChange={changeForm} value={email}  name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"/></div>
                  </div>
                  <div className="mb-3">
                      <label className="block text-sm/6 font-medium text-gray-900">Contraseña</label>
                      <div className="mt-2"><input type="password" onChange={changeForm} value={password}  name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"/></div>
                  </div>
                  
                  
                  <div className={`mb-1`}>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol</label>
                      <select id="countries" name="rol" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {
                              options.map( (option: optionSelect) => (
                                  <option value={option.key} selected={ rol == option.key}>{option.value}</option>
                              ) )
                          }
                      </select>
                  </div>
                    
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Registrarse</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                ¿Ya estas registrado? 
                <NavLink to="/auth/login" className="font-semibold text-blue-600 hover:text-blue-500"> Inicia sesion aqui</NavLink>
                </p>
            </div>
        </div>
    </>
  )
}
