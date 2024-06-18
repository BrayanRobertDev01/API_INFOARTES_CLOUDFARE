import { Produto, TipoProduto } from "@prisma/client";
import { prisma } from "../configs/database";

export class ManageTipoProdutoService {
  async create(tipoProduto: TipoProduto) {
    try {
      const { nome, caracteristicas } = tipoProduto;

      // Criando um novo tipo de produto no banco de dados
      const newTipoProduto = await prisma.tipoProduto.create({
        data: {
          nome: nome, // Adicionar o nome
          caracteristicas: caracteristicas, // Adicionar características como objeto
        },
      });

      return newTipoProduto; // Retornar a entrada criada
    } catch (err: any) {
      console.error(err); // Logar o erro para debug
      throw new Error("Erro ao criar tipo de produto"); // Retornar erro
    }
  }


  getAll() {
    try {
      return prisma.tipoProduto.findMany({
        select: {
          id: true,
          caracteristicas: true,
          nome: true
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  getProductByCategory(id_tipo_produto: number) {
    try {
      return prisma.produto.findMany({
        where: {
          id_tipo_produto: id_tipo_produto
        },
        select: {
          id: true,
          id_tipo_produto: true,
          nome: true,
          informacoes: true,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  get(id: number) {
    try {
      return prisma.tipoProduto.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          caracteristicas: true,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  update(id: number, tipoProduto: TipoProduto) {
    try {
      return prisma.tipoProduto.update({
        where: {
          id,
        },
        data: {
          caracteristicas: tipoProduto.caracteristicas,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  delete(id: number) {
    try {
      return prisma.tipoProduto.delete({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }
}
