import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { getOrders } from "../../../api";
import ItemListOrders from "./ItemListOrders";

export const ListOrders = () => {
    const { token } = useSelector((state:any) => state.main);
    const { productsSelected } = useSelector((state:any) => state.orden);
    const [itemsOrder, setItemsOrder] = useState([])
    
    useEffect(() => {
        
        (async function() {
            const respuesta = await getOrders(token);
            console.log(respuesta);
            
            const { data } = respuesta;
            if (!data) return; 
            console.log("Seteando " , data);
            
            setItemsOrder(data)

          })();
    }, [token, productsSelected])
    


    return (
    <>
        <h1 className="text-2xl my-4">Tus ordenes de compra</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Fecha
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Hecha por
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Hecha a
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ver detalle
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    itemsOrder.map( (item: any) => (
                        <ItemListOrders dataItem={item}/>
                    ) )
                }
            </tbody>
        </table>
    </>
  )
}
