import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../../api/api.product";
import { ArrowsUpDownIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid"; // Icono de cierre
import { offcanvasShow } from "../../app/slices/product.slice";
import { InputForm } from "./InputForm";
import { useForm } from "../../hooks/useForm";
import { handleDeleteProduct, handleUpdateProduct } from "./handlers/product.handler";

export const OffCanvasDetailProduct = () => {
    const dispatch = useDispatch();
    const { offCanvasIsOpen, idDetailProduct } = useSelector((state: any) => state.producto);
    const { token , rol } = useSelector((state: any) => state.main);
    // const [detalle, setDetalle] = useState<any>({});

    const formInitialState = {
        nombre: "" ,
        stock: "" ,
        precio_compra: "",
        precio_venta: "",
        codigo: ""
    };

    const { nombre , stock , precio_compra, precio_venta, codigo, changeForm, setForm } = useForm(formInitialState);

    useEffect(() => {
        if (!idDetailProduct) return;
        
        (async function () {
        const { data } = await getProductById(token, idDetailProduct);
        const product = data[0];
        console.log("Data de producto ", product);
        setForm(product);
        // setDetalle(product);

        })();
    }, [idDetailProduct]);

    const handleUpdate = async () => {
        const datos = {nombre , stock , precio_compra, precio_venta, codigo};
        const resp = await handleUpdateProduct(token, idDetailProduct, datos);
        if (!resp) return;
        dispatch(offcanvasShow({isOpen: false, idProduct: null}));

    }
    
    const handleDelete = async () => {
        const resp = await handleDeleteProduct(idDetailProduct, token);
        if (!resp) return;
        dispatch(offcanvasShow({isOpen: false, idProduct: null}));
    }


  return (
    <>

        <div className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-96 dark:bg-gray-800 shadow-lg ${
            offCanvasIsOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <button onClick={() => dispatch(offcanvasShow({isOpen: false, idProduct: null}))} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
            <XMarkIcon className="w-6 h-6" />
        </button>

        


        <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4"> {nombre || "Cargando información..."}</h4>

        <img className="h-auto max-w-full" src="https://blog.saleslayer.com/hubfs/221018_La-fotograf%C3%ADa-de-producto-en-ecommerce-B2B-y-B2C.png"/>

        <InputForm change={changeForm} label="Nombre" value={nombre} type="text" name="nombre"/>
        <InputForm change={changeForm} label="Codigo" value={codigo} type="text" name="codigo"/>
        <InputForm change={changeForm} label="Precio de compra (En COP)" value={precio_compra} type="number" name="precio_compra"/>
        <InputForm change={changeForm} label="Precio de venta (En COP)" value={precio_venta} type="number" name="precio_venta"/>
        <InputForm change={changeForm} label="Stock actual" value={stock} type="number" name="stock"/>


        <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Botón de actualizar */}
        <button onClick={handleUpdate} disabled={rol !== 1} title={rol !== 1 ? "No puedes editar este producto" : ""} 
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg 
            ${rol === 1 ? "text-white bg-blue-600 hover:bg-blue-700" : "text-gray-400 bg-gray-300 cursor-not-allowed"}`}>
            &nbsp;&nbsp;<ArrowsUpDownIcon className="h-6 w-6 text-current" /> 
            Actualizar
        </button>

        {/* Botón de eliminar */}
        <button  onClick={handleDelete} disabled={rol !== 1}  title={rol !== 1 ? "No puedes eliminar este producto" : ""} 
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors 
            ${rol === 1 ? "text-white bg-red-600 border-red-600 hover:bg-red-700" 
            : "text-gray-400 bg-gray-200 border-gray-300 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500 dark:border-gray-600"}`}>
            &nbsp;&nbsp;<TrashIcon className="h-6 w-6 text-current" />
            Eliminar
        </button>
</div>

        </div>
    </>
    );
};
