import { Status } from "@prisma/client";
import { prisma } from "../configs/database";

export class ManageStatusService {
  create(status: Status) {
    try {
      return prisma.status.create({
        data: {
          nome: status.nome,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  getAll() {
    try {
      return prisma.status.findMany({
        select: {
          id: true,
          nome: true,
          vendas: true,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  get(id: number) {
    try {
      return prisma.status.findFirst({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  update(id: number, status: Status) {
    try {
      return prisma.status.update({
        where: {
          id,
        },
        data: {
          nome: status.nome,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }

  delete(id: number) {
    try {
      return prisma.status.delete({
        where: {
          id,
        },
      });
    } catch (err: any) {
      return new Error("");
    }
  }
}
