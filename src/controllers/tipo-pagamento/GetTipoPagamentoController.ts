import { Request, Response } from "express";
import { ManageTipoPagamentoService } from "../../services/ManageTipoPagamentoService";

export class GetTipoPagamentoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const response = await new ManageTipoPagamentoService().get(Number(id));

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
