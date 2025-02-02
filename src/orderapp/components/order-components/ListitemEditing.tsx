import { useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm"
import { updateProduct } from "../../../app/slices/order.slice";

export const ListitemEditing = (props : any) => {
    console.log("Props que llegaron " , props);
    

    const dispatch = useDispatch();     

    const {id, nombre, precio_unitario: precioU,precio_total: precioT, cantidad: cantidadE} = props;

    const initialState = {
        cantidad: cantidadE, 
        precio_unitario: precioU,
        precio_total: precioT
    }
    const { cantidad , precio_unitario, precio_total, changeForm } = useForm(initialState);
    

    const handleChangeE = (e: any) => {
        changeForm(e);

        let resultado = Number(cantidad * precio_unitario);

        const data = {
            id: Number(id),
            cantidad: Number(cantidad) || 0,
            precio_unitario: Number(precio_unitario),
            precio_total: Number(resultado)
        }

        // console.log("Enviando contenido al dispatch " , data);
        
        dispatch( updateProduct( data ) )

    }


    return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {nombre}
        </th>
        <td className="px-6 py-4">
        <input onChange={handleChangeE} id="precio_unitario" value={precio_unitario} name="precio_unitario" type="number" placeholder="" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>

        </td>
        <td className="px-6 py-4">
            <input onChange={handleChangeE} id="cantidad" value={cantidad} name="cantidad" type="number" placeholder="" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
        </td>
        <td className="px-6 py-4">
            <input onChange={handleChangeE} id="precio_total" value={precio_total} name="precio_total" type="number" placeholder="" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
        </td>
    </tr>
)
}


