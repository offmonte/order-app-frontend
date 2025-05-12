import { useState, useEffect } from "react";
import { getOrders } from "../services/orderService";

import type { Order } from "../types/Order";
import { useNavigate, useParams } from "react-router-dom";

export const OrderDetails = () => {
  const [order, setOrder] = useState<Order>({} as Order)

  const navigate = useNavigate()

  const { id } = useParams()

  // Atualizar o componente com dados na hora da renderização
  useEffect(() => {
    // Vou achar o produto com esse id

    getOrders().then(orders => {
      orders.map(order => {
        if (order.id == id) {
          setOrder(order)
        }
      })
    })
  }, [])

  return (
    <div className="fixed inset-0 bg-gray-200 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Detalhes do Pedido</h2>
        <p><strong>ID:</strong> {order.id}</p>
        <p><strong>Cliente:</strong> {order.cliente}</p>
        <p><strong>Produto:</strong> {order.produto}</p>
        <p><strong>Valor:</strong> R$ {order.valor}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Data de Criação:</strong> {new Date(order.dataCriacao).toLocaleString()}</p>
        <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 w-full">Voltar</button>
      </div>
    </div>
  );
};
