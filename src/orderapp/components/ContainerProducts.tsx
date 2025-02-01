import { CardProducts } from "./CardProducts"

export const ContainerProducts = () => {
    const productos = [
        {
            name: "Producto 1",
            price: 5000,
            stock: "200",
            imagen: "",
        },
        {
            name: "Producto 2",
            price: 500,
            stock: "100",
            imagen: "",
        }
    ]


  return (
    <div className="container mx-auto  my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            productos.map( (product: any) => (
                <CardProducts nombre={product.name} precio={product.price} stock={product.stock} imagen={product.imagen}/>
            ))
        }
    </div>
  )
}
