import { useEffect, useState } from "react";
import type { Order } from "../types/Order";
import { getOrders } from "../services/orderService";
import { OrderTable } from "../components/OrderTable";
import { OrderFormModal } from "../components/OrderFormModal";

export const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  useEffect(() => {
    if(!modal){
      getOrders().then(setOrders)
    }
  }, [modal])
  
  return (
    <div className="w-full h-full justify-center items-center">
      <h1 className="text-2xl font-bold text-center mb-6">Pedidos</h1>
      <OrderTable orders={orders} />
      <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full" onClick={() => setModal(true)}>Novo Pedido</button>
      <OrderFormModal modal={modal} setModal={setModal}/>
    </div>
  );
};
