import { useSelector } from "react-redux";
import { DetailOrder, ListOrders, NewOrder } from "../components/order-components"
export const Orders = () => {
  const { rol } = useSelector( (state:any) => state.main);

  return (
    <div className="min-h-screen p-6">
      {
        (rol != 1) ? <NewOrder/> : <p className="text-xl text-red-900 dark:text-white">No puedes crear ordenes nuevas</p>

      }

      <ListOrders/>

      <DetailOrder/>
    

    </div>
  );
};
