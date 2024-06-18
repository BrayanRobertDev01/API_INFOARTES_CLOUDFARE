import { Venda } from "@prisma/client";
import { Request, Response } from "express";
import { ManageVendaService } from "../../services/ManageVendaService";

interface VendaResult extends Partial<Venda> {
  produtos?: number[];
}

export class CreateVendaController {
  async handle(req: Request, res: Response) {
    const venda: VendaResult = req.body;
    const response = await new ManageVendaService().create(
      venda as Venda,
      venda.produtos
    );

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
