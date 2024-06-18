import { Request, Response } from "express";
import { ManageTipoPagamentoService } from "../../services/ManageTipoPagamentoService";
import { TipoPagamento } from "@prisma/client";

export class UpdateTipoPagamentoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const TipoPagamento: TipoPagamento = req.body;

    const response = await new ManageTipoPagamentoService().update(
      Number(id),
      TipoPagamento
    );

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    res.status(200).send(response);
  }
}
