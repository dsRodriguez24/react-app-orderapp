import { useState } from "react"
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../app/slices/order.slice";


export const SearchBarProduct = () => {
    const [value, setvalue] = useState("");
    const dispatch = useDispatch();
    const handlerChange = ({ target }: any) => {
        setvalue(target.value);
        dispatch( setSearchTerm(value) );
    }
  
    return (
    <div className="sm:col-span-15 mb-3">
        <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <input onChange={handlerChange} value={value} type="search" placeholder="Buscar" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
            </div>
        </div>
    </div>
  )
}