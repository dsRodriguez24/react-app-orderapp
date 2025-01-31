import { NavLink } from "react-router-dom"
import { InputAndLabel } from "../../components/InputAndLabel"

export const Login = () => {
  return (
    <>
        <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <InputAndLabel label="Email" marginBottom="3" name="email" type="email"/>
                    <InputAndLabel label="Contraseña" marginBottom="3" name="password" type="password"/>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar sesion</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                ¿No estas registrado? 
                <NavLink to="/auth/register" className="font-semibold text-indigo-600 hover:text-indigo-500">Registrate aqui</NavLink>
                </p>
            </div>
        </div>
    </>
  )
}
