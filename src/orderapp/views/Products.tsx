import { Carousel } from "../components/Carousel"
import { ContainerProducts } from "../components/ContainerProducts"

export const Products = () => {
  return (
    <>
        <Carousel/>

        <h2 className="text-3xl font-extrabold dark:text-white text-center">Productos</h2>
        
        
    <button data-modal-target="static-modal" data-modal-toggle="static-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Nuevo Producto
    </button>

        <ContainerProducts/>

    </>
  )
}
