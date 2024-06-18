import { Venda } from "@prisma/client";
import { prisma } from "../configs/database";

export class ManageVendaService {
  create(venda: Venda, produtos?: number[]) {
    try {
      return prisma.venda.create({
        data: {
          cliente: venda.cliente,
          data_pedido: venda.data_pedido,
          data_finalizado: venda.data_finalizado,
          telefone: venda.telefone,
          id_status: venda.id_status,
          id_tipo_pagamento: venda.id_tipo_pagamento,
          produtos: {
            connect: produtos.map((p: number) => {
              return { id: p };
            }),
          },
          valor: venda.valor
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  getAll() {
    try {
      return prisma.venda.findMany({
        select: {
          id: true,
          cliente: true,
          data_finalizado: true,
          data_pedido: true,
          status: true,
          tipo_pagamento: true,
          telefone: true,
          produtos: {
            select: {
              id: true,
              tipo_produto: {
                select: {
                  id: true,
                  caracteristicas: true,
                },
              },
            },
          },
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  get(id: number) {
    try {
      return prisma.venda.findFirst({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  update(id: number, venda: Venda, produtos?: number[]) {
    try {
      return prisma.venda.update({
        where: {
          id,
        },
        data: {
          cliente: venda.cliente,
          data_pedido: venda.data_pedido,
          data_finalizado: venda.data_finalizado,
          telefone: venda.telefone,
          id_status: venda.id_status,
          id_tipo_pagamento: venda.id_tipo_pagamento,
          produtos: {
            set: produtos.map((p: number) => {
              return { id: p };
            }),
          },
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  delete(id: number) {
    try {
      return prisma.venda.delete({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }
}
