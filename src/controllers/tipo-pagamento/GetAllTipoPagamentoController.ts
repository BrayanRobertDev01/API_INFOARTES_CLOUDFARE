import { Request, Response } from "express";
import { ManageTipoPagamentoService } from "../../services/ManageTipoPagamentoService";

export class GetAllTipoPagamentoController {
  async handle(req: Request, res: Response) {
    const response = await new ManageTipoPagamentoService().getAll();

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
