import { useDispatch } from "react-redux"
import { modalShow } from "../../../app/slices/product.slice";

export const ModalProductFooter = () => {
    const dispatch = useDispatch();
    
    const setOpen = (action: boolean) => {
        dispatch( modalShow(action) );
    }



  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button type="button" data-autofocus onClick={() => setOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"> Cerrar</button>
    </div>
  )
}

