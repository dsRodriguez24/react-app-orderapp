import { useDispatch, useSelector } from "react-redux";
import { ListitemEditing } from "./ListitemEditing";
import { saveOrder } from "../../../api";
import { generarSweetAlert } from "../../../helpers/sweetalert";
import { resetProduct } from "../../../app/slices/order.slice";
import { Seller } from "./Seller";
import { useEffect, useState } from "react";

export const ListAddedProducts = () => {
  const dispatch = useDispatch();
  
  const { productsSelected } = useSelector((state: any) => state.orden);
  const { token } = useSelector( (state : any) => state.main  );

  const [seller, setSeller] = useState(0);

  const handleSave = async () => {
      const data = {
          detalle: productsSelected,
          seller
      }

      console.log("Data para guardar " , data);
      // return ;

      const respuesta = await saveOrder(data, token);
      const { message, status } = respuesta; 
      generarSweetAlert(status, message);

      if(!status) return;

      dispatch( resetProduct() );
  }

  useEffect(() => {
    console.log("productsSelected ha cambiado");
    
  }, [productsSelected])
  


  return (
    <div>
        <Seller setSeller={setSeller} seller={seller}/>

        <h1 className="text-1xl text-bold  my-4">Productos agregados</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Precio Unitario
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Cantidad
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Precio Total
                  </th>
              </tr>
          </thead>
          <tbody>
            {
              productsSelected.map( ({product, nombre, precio_unitario, precio_total, cantidad}: any) => (
                <ListitemEditing id={product} nombre={nombre} precio_unitario={precio_unitario} precio_total={precio_total} cantidad={cantidad} />
              ))
            }
          </tbody>
          <tfoot>
              <tr>
                  <th colSpan={3} className="px-6 py-3">
                      
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                      Guardar
                    </button>
                  </th>
              </tr>
          </tfoot>
        </table>
    </div>
  )
}
