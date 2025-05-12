import type { Order } from '../types/Order';

let orders: Order[] = [{
  id: '1a2b3c',
  cliente: 'João Silva',
  produto: 'Notebook',
  valor: 4500.99,
  status: 'Processando',
  dataCriacao: new Date().toISOString(),
},
{
  id: '3c2b1a',
  cliente: 'Maria Oliveira',
  produto: 'Smartphone',
  valor: 2999.49,
  status: 'Finalizado',
  dataCriacao: new Date().toISOString(),
}]

export const getOrders = async (): Promise<Order[]> => {
  return orders
};
export const newOrder = async (order: Order) => {
  orders.push(order);
};