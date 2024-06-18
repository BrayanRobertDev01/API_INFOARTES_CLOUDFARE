import { TipoPagamento } from "@prisma/client";
import { Request, Response } from "express";
import { ManageTipoPagamentoService } from "../../services/ManageTipoPagamentoService";

export class CreateTipoPagamentoController {
  async handle(req: Request, res: Response) {
    const tipoPagamento: TipoPagamento = req.body;
    const response = await new ManageTipoPagamentoService().create(
      tipoPagamento
    );

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
