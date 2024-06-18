import { TipoPagamento } from "@prisma/client";
import { prisma } from "../configs/database";

export class ManageTipoPagamentoService {
  create(tipoPagamento: TipoPagamento) {
    try {
      return prisma.tipoPagamento.create({
        data: {
          nome: tipoPagamento.nome,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  getAll() {
    try {
      return prisma.tipoPagamento.findMany({
        select: {
          id: true,
          nome: true,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  get(id: number) {
    try {
      return prisma.produto.findFirst({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  update(id: number, tipoPagamento: TipoPagamento) {
    try {
      return prisma.tipoPagamento.update({
        where: {
          id,
        },
        data: {
          nome: tipoPagamento.nome,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  delete(id: number) {
    try {
      return prisma.tipoPagamento.delete({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }
}
