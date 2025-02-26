import { useEffect, useState } from "react"
import { getUsersAdmin } from "../../../api";
import { useSelector } from "react-redux";

export const Seller = ( {setSeller, seller}: any) => {

    const [admins, setAdmins] = useState([]);
    // const [select, setSelect] = useState(0);
    const { token } = useSelector( (state: any) => state.main);

    const handlerChange = (e: any) => {
      // setSelect(e.target.value);
      setSeller(e.target.value);
      console.log(e.target.value);
      
    }

    useEffect(() => {

        (async function() {
            const respuesta = await getUsersAdmin(token);
            const { data } = respuesta;
            setAdmins(data);

          })();
          

    }, [])
    


  return (
    <>
        <h1 className="text-1xl text-bold  mb-4">Elige proveedor / Adminsitrador</h1>
        <select id="seller" onChange={ handlerChange } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option key={0} selected={seller == 0} value={0}>Seleccione...</option>
          {
            admins.map( (admin: any) => (
              <option key={admin.id} selected={seller == admin.id} value={admin.id}>{admin.nombre}</option>
            ) )
          }
        </select>
    </>
  )
}
