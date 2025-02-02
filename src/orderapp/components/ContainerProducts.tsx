import { CardProducts } from "./CardProducts"
import { useSelector } from "react-redux";

export const ContainerProducts = () => {

    const { productList } = useSelector( (state : any) => state.producto );
    
    return (
        <div className="container mx-auto  my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                productList.map( (product: any) => (
                    <CardProducts id={product.id} nombre={product.nombre} precio={product.precio_compra} codigo={product.codigo} stock={product.stock} imagen=""/>
                ))
            }
        </div>
    )
}
