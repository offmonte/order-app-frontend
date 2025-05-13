import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { newOrder } from "../services/orderService";
import type { Order } from "../types/Order";

type OrderFormProps = {
  modal: boolean;
  setModal: (state: boolean) => void;
};

export const OrderFormModal = ({ modal, setModal }: OrderFormProps) => {
  const [form, setForm] = useState<Omit<Order, 'id' | 'dataCriacao'>>({
    cliente: "",
    produto: "",
    valor: 0,
    status: "Pendente"
  });

  const handleChange = (field: keyof typeof form) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm({ ...form, [field]: field === 'valor' ? parseFloat(e.target.value) : e.target.value });
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await newOrder(form as Order); // Tipagem flexível pro mock funcionar
      setForm({
        cliente: "",
        produto: "",
        valor: 0,
        status: "Pendente"
      });
      setModal(false);
    } catch (err) {
      console.error("Erro ao criar pedido:", err);
    }
  };

  if (!modal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <div
          onClick={() => setModal(false)}
          className="absolute cursor-pointer top-2 right-2 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-300 m-2.5"
          aria-label="Fechar"
        >
          &times;
        </div>
        <h2 className="text-xl mb-4">Criar Pedido</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1">Cliente</label>
            <input
              value={form.cliente}
              onChange={handleChange("cliente")}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Produto</label>
            <input
              value={form.produto}
              onChange={handleChange("produto")}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Valor (R$)</label>
            <input
              type="number"
              step="0.01"
              value={form.valor}
              onChange={handleChange("valor")}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1">Status</label>
            <select
              value={form.status}
              onChange={handleChange("status")}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Pendente">Pendente</option>
              <option value="Processando">Processando</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Criar Pedido
          </button>
        </form>
      </div>
    </div>
  );
};
