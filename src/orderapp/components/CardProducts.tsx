
import { useDispatch } from "react-redux";
import { CardParams } from "./interfaces/ICardProduct"
import { offcanvasShow } from "../../app/slices/product.slice";


export const CardProducts = ( { nombre, precio, stock, codigo, id}: CardParams) => {
    const dispatch = useDispatch();    
    const handlerVerDetalle = (id: number) => {
        console.log("Disparado " , id);
        
        dispatch( offcanvasShow( { isOpen: true, idProduct: id } ) )
    }
    
    precio = Number(precio);

  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="https://blog.saleslayer.com/hubfs/221018_La-fotograf%C3%ADa-de-producto-en-ecommerce-B2B-y-B2C.png" alt="" />
        </a>
        <div className="p-5">
            
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nombre}</h5>
                <h6 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{codigo}</h6>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${precio.toLocaleString('es-CO')} COP</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{stock} Und</p>
            <button onClick={ () => { handlerVerDetalle(id) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ver detalle
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
        </div>
    </div>

  )
}
