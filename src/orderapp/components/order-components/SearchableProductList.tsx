import { useSelector } from "react-redux"
import ListItem from "./ListItem";
import { ProductParams } from "../interfaces/IProduct";

export const SearchableProductList = () => {
    const { productList } = useSelector((state: any) => state.producto);
    const { searchTerm } = useSelector((state: any) => state.orden);
    

  return (
    <div>
        
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

        { productList
            .filter((product: ProductParams) => searchTerm === "" || product.nombre?.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(( {id,nombre,codigo,precio_venta}: ProductParams) => (
            <ListItem id={id} nombre={nombre} codigo={codigo} precio_venta={precio_venta} key={id} precio_compra={0} />
        ))}

        </ul>

    </div>
  )
}

