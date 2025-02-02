import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux"
import { setOrderActive } from "../../../app/slices/order.slice";

export const DetailOrder = () => {
    const dispatch = useDispatch();
    const { orderIdActive , orderActiveDetail } = useSelector( (state:any) => state.orden );    

    if (!orderIdActive) return;

    return (
    <div>
      <div className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-120 dark:bg-gray-800 shadow-lg ${
            orderIdActive ? "translate-x-0" : "translate-x-full"}`}>
        
        <button onClick={() => dispatch( setOrderActive({id: null, order: null}))} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <XMarkIcon className="w-6 h-6" />
        </button>

        <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4"> { `Orden #${orderActiveDetail.id}` || "Cargando información..."}</h4>


        <p className="text-lg text-gray-900 dark:text-white"><b>Hecha por:</b> {orderActiveDetail.user.nombre}</p>
        <p className="text-lg text-gray-900 dark:text-white"><b>Hecha a:</b> {orderActiveDetail.seller.nombre}</p>
        <p className="text-lg text-gray-900 dark:text-white"><b>Fecha:</b> {orderActiveDetail.fecha_registro}</p>

        <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 my-4"> Detalle</h4>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="text-xs px-6 py-3">
                        Producto
                    </th>
                    <th scope="col" className="text-xs px-6 py-3">
                        Cantidad
                    </th>
                    <th scope="col" className="text-xs px-6 py-3">
                        Valor unitario
                    </th>
                    <th scope="col" className="text-xs px-6 py-3">
                        Valor total
                    </th>
                </tr>
            </thead>
            <tbody>
                {orderActiveDetail.detalle.map( (detalle: any ) => (
                    <tr>
                        <th scope="col" className="text-xs px-6 py-3">
                            {detalle.nombre}
                        </th>
                        <th scope="col" className="text-xs px-6 py-3">
                            {detalle.cantidad}
                        </th>
                        <th scope="col" className="text-xs px-6 py-3">
                            $ {detalle.precio_unitario} COP
                        </th>
                        <th scope="col" className="text-xs px-6 py-3">
                            $ {detalle.precio_total} COP
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </div>
  )
}
