import { EyeIcon } from "@heroicons/react/24/solid";
import { getOrderById } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { setOrderActive } from "../../../app/slices/order.slice";

const ItemListOrders = ( { dataItem } : any) => {

    const dispatch = useDispatch();
    
    const { token } = useSelector( (state: any) => state.main);
    const { fecha_registro , user , seller } = dataItem;

    const verDetalle  = async () => {
        const respuesta = await getOrderById(dataItem.id,token)
        let { data }  = respuesta ;
        data = data[0];
        // console.log(`Data de ${dataItem.id} `,  data);

        dispatch(setOrderActive({id: data.id, order: data}));

    }



    return (
    <tr>
        <td scope="col" className="px-6 py-3">
            {fecha_registro}
        </td>
        <td scope="col" className="px-6 py-3">
            {user.nombre}
        </td>
        <td scope="col" className="px-6 py-3">
            {seller.nombre}
        </td>
        <td scope="col" className="px-6 py-3 text-center">
            <EyeIcon className="h-6 w-6 text-blue-500" onClick={verDetalle}/>
        </td>
    </tr>
  )
}

export default ItemListOrders
