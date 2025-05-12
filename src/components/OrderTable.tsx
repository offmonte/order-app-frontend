import type { Order } from "../types/Order";
import { useNavigate } from "react-router-dom";

interface OrderTableProps {
  orders: Order[];
}

export const OrderTable = ({ orders }: OrderTableProps) => {

  const navigate = useNavigate()

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm text-center border">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 border">Cliente</th>
            <th className="px-4 py-2 border">Produto</th>
            <th className="px-4 py-2 border">Valor</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="cursor-pointer hover:bg-gray-100" onClick={() => navigate(`detalhes/${order.id}`)}>
              <td className="px-4 py-2 border">{order.cliente}</td>
              <td className="px-4 py-2 border">{order.produto}</td>
              <td className="px-4 py-2 border">R$ {order.valor}</td>
              <td className="px-4 py-2 border">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
