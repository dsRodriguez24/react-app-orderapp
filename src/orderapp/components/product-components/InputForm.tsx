import { InputFormProps } from "../interfaces/IInputForm"

export const InputForm = ( {label, value, type, name, change} : InputFormProps) => {
    const handlerChange = (e: any) =>  {
        change(e)
    }

  return (
    <div className="sm:col-span-15">
        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900"> { label } </label>
        <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input onChange={handlerChange} id={name} value={value} name={name} type={type} placeholder={label} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
            </div>
        </div>
    </div>
  )
}
