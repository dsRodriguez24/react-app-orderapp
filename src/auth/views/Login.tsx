import {  NavLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { sendLogin } from "../../api";
// import { generarSweetAlert } from "../../helpers/sweetalert";
import { useDispatch } from "react-redux";
import { login } from "../../app/slices/main.slice";
import { generarSweetAlert } from "../../helpers/sweetalert";

export const Login = () => {
    const dispatch = useDispatch();

    const initialState = {
        email: "",
        password: ""
    }; 

    const { changeForm, email, password } = useForm(initialState);

    const handlerSubmit = async (e: any) => {
        e.preventDefault();

        const datos = { email,  password }; 
        const respuesta = await sendLogin(datos);
        const { data , message, status } = respuesta;

        generarSweetAlert(status, message);
        if(!status) return;
        dispatch( login( data ) );

    }

    return (
    <>
        <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handlerSubmit} method="POST">

                    <div className="mb-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2"><input type="email" onChange={changeForm} value={email}  name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"/></div>
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Contraseña</label>
                        <div className="mt-2"><input type="password" onChange={changeForm} value={password}  name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"/></div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Iniciar sesion</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                ¿No estas registrado? 
                <NavLink to="/auth/register" className="font-semibold text-blue-600 hover:text-blue-500">Registrate aqui</NavLink>
                </p>
            </div>
        </div>
    </>
  )
}
