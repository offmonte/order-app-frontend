export type OrderStatus = 'Pendente' | 'Processando' | 'Finalizado';

export interface Order {
  id: string; // Guid
  cliente: string;
  produto: string;
  valor: number; // decimal
  status: OrderStatus;
  dataCriacao: string; // DateTime em formato ISO (recomendado para troca via API)
}
