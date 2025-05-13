import type { Order } from '../types/Order';

const USE_MOCK = true;

let mockOrders: Order[] = [
  {
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
  }
];

// Funções mock
const getOrdersMock = async (): Promise<Order[]> => {
  return mockOrders;
};

const newOrderMock = async (order: Order) => {
  mockOrders.push({ ...order, id: crypto.randomUUID(), dataCriacao: new Date().toISOString() });
};

// Funções reais com fetch
const API_URL = "https://localhost:7120/orders";

const getOrdersAPI = async (): Promise<Order[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Erro ao buscar pedidos");
  return response.json();
};

const getOrderByIdAPI = async (id: string): Promise<Order> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error("Erro ao buscar pedido por ID");
  return response.json();
};

const newOrderAPI = async (order: Omit<Order, "id" | "dataCriacao">): Promise<void> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });
  if (!response.ok) throw new Error("Erro ao criar pedido");
};

// Exporta baseado no modo
export const getOrders = USE_MOCK ? getOrdersMock : getOrdersAPI;
export const newOrder = USE_MOCK ? newOrderMock : newOrderAPI;
export const getOrderById = USE_MOCK ? async (id: string): Promise<Order> => {
  const order = mockOrders.find(o => o.id === id);
  if (!order) throw new Error("Pedido não encontrado");
  return order;
} : getOrderByIdAPI;
