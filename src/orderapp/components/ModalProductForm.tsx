import { useDispatch, useSelector } from "react-redux";
import { saveProduct } from "../../api/api.product";
import { useForm } from "../../hooks/useForm";
import { InputForm } from "./InputForm";
import { generarSweetAlert } from "../../helpers/sweetalert";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { modalShow } from "../../app/slices/product.slice";

export const ModalProductForm = () => {
    
    
    const formInitialState = {
        nombre: "",
        stock: "",
        precio_compra: 0,
        precio_venta: 0,
        codigo: "",
    }

    const { token } = useSelector( (state : any) => state.main  );
    const dispatch = useDispatch();
    
    const { nombre , stock , precio_compra, precio_venta, codigo, changeForm, setForm } = useForm(formInitialState);
    
    const handlerSumit = async (e: any) => {
        e.preventDefault();

        const datos = {
            nombre ,
            codigo,
            precio_compra,
            precio_venta,
            stock ,
        }

        console.log(`Enviando ${token} datos ` , datos);
        
        
        const respuesta = await saveProduct(datos, token);
        console.log(`Respuesta ` , respuesta);
        const { message, status } = respuesta; 
        generarSweetAlert(status, message);

        if (!status) return;

        setForm(formInitialState)
        dispatch( modalShow(false) )

    }

    return (
    <form onSubmit={handlerSumit}>
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <InputForm change={changeForm} label="Nombre" value={nombre} type="text" name="nombre"/>
                    <InputForm change={changeForm} label="Codigo" value={codigo} type="text" name="codigo"/>
                    <InputForm change={changeForm} label="Precio de compra (En COP)" value={precio_compra} type="number" name="precio_compra"/>
                    <InputForm change={changeForm} label="Precio de venta (En COP)" value={precio_venta} type="number" name="precio_venta"/>
                    <InputForm change={changeForm} label="Stock actual" value={stock} type="number" name="stock"/>
                </div>

                <div className="text-end my-4">
                    <button type="submit" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto" > <BookmarkIcon className="h-5 w-5 text-white-500" /> Guardar</button>

                </div>
            </div>
        </div>



    </form>
  )
}
