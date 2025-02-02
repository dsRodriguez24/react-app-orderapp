import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { ProductParams } from "../interfaces/IProduct";
import { addProduct, removeProduct } from "../../../app/slices/order.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ListItem = ({ id,nombre,codigo,precio_venta} : ProductParams) => {
    
    const dispatch = useDispatch();
    const { productsSelected } = useSelector((state: any) => state.orden);
    

    const handleAdd = () => {
        const nuevoProducto =  {
          product:	id,
          cantidad:	1, 
          nombre, 
          precio_unitario: precio_venta,
          precio_total:	 precio_venta
        }

        dispatch(addProduct(nuevoProducto));
    };
      
    const handleRemove = () => {
      dispatch(removeProduct(id));
    };

    const [isSelected, setIsSelected] = useState(false) 

    useEffect(() => {
      const isProductSelected = productsSelected.some((product: any) => product.product === id);
      setIsSelected(isProductSelected);
    }, [productsSelected, id]);
    
  
  return (
    <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="https://blog.saleslayer.com/hubfs/221018_La-fotograf%C3%ADa-de-producto-en-ecommerce-B2B-y-B2C.png"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {nombre}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {codigo}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${precio_venta}
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        {isSelected ? (
          <MinusCircleIcon 
            onClick={handleRemove} 
            className="h-5 w-5 text-red-500"
          />
        ) : (
          <PlusCircleIcon 
            onClick={handleAdd} 
            className="h-5 w-5 text-blue-500"
          />
        )}
      </div>
      </div>
    </li>
  );
};

export default ListItem;
