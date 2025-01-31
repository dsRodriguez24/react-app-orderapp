import { NavLink } from "react-router-dom"
import { InputAndLabel } from "../../components/InputAndLabel"
import { SelectAndLabel } from "../../components/SelectAndLabel"
import { optionSelect } from "../../components/interfaces/IElementAndLabel"

export const Register = () => {
  const options:optionSelect[] = [
    {
      key: "1",
      value: "Administrador"
    },
    {
      key: "2",
      value: "Cliente"
    }
  ]

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <InputAndLabel marginBottom="3" label="Nombre completo" name="nombre" type="text"/>
                    <InputAndLabel marginBottom="3" label="Email" name="email" type="email"/>
                    <InputAndLabel marginBottom="3" label="Contraseña" name="password" type="password"/>
                    <SelectAndLabel marginBottom="3" label="Rol" name="rol" options={ options }/>
                    
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Registrarse</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
                ¿Ya estas registrado? 
                <NavLink to="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500"> Inicia sesion aqui</NavLink>
                </p>
            </div>
        </div>
    </>
  )
}
