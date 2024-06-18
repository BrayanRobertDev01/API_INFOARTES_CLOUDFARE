import { Request, Response } from "express";
import { ManageTipoProdutoService } from "../../services/ManageTipoProdutoService";

export class DeleteTipoProdutoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const response = await new ManageTipoProdutoService().delete(Number(id));

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
