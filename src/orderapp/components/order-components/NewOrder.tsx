import { ListAddedProducts, SearchableProductList, SearchBarProduct } from "./";


export const NewOrder = () => {
  return (
    <>
    <h1 className="text-2xl  mb-4">Nueva orden de compra</h1>

      <div className="flex w-full gap-4">
        {/* Sección izquierda - 1/3 del ancho */}
        <div className="w-1/3 p-4 bg-gray-100 rounded-lg shadow-md">
          <SearchBarProduct />
          <SearchableProductList />
        </div>

        {/* Sección derecha - 2/3 del ancho */}
        <div className="w-2/3 p-4 bg-white rounded-lg shadow-md">
          <ListAddedProducts/>
        </div>
      </div>
    
    </>
  )
}
