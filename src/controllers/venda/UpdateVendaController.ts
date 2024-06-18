import { Request, Response } from "express";
import { ManageVendaService } from "../../services/ManageVendaService";
import { Venda } from "@prisma/client";

interface VendaResult extends Partial<Venda> {
  produtos?: number[];
}

export class UpdateVendaController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const venda: VendaResult = req.body;

    const response = await new ManageVendaService().update(
      Number(id),
      venda as Venda,
      venda.produtos
    );

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    res.status(200).send(response);
  }
}
