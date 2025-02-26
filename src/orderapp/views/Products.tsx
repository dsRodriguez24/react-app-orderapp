import { useEffect } from "react"
import { Carousel } from "../components/product-components/Carousel"
import { ContainerProducts } from "../components/product-components/ContainerProducts"
import { ModalProduct } from "../components/product-components/ModalProduct"
import { OffCanvasDetailProduct } from "../components/product-components/OffCanvasDetailProduct"
import { useDispatch, useSelector } from "react-redux"
import { setProductList } from "../../app/slices/product.slice"
import { getProducts } from "../../api/api.product"

export const Products = () => {
  const dispatch = useDispatch();
  const { token } = useSelector( (state : any) => state.main );
  const { idDetailProduct } = useSelector( (state : any) => state.producto );

    useEffect(() => {

      (async function() {
          const response = await getProducts( token );
          const { data } = response;
          dispatch( setProductList(data) )
      })();

  }, [idDetailProduct])
  


  return (
    <>
        {/* <Carousel/> */}

        <h2 className="text-3xl font-bold dark:text-white text-center my-3">Productos</h2>

        <ModalProduct/>

        <ContainerProducts/>

        <OffCanvasDetailProduct/>

    </>
  )
}
