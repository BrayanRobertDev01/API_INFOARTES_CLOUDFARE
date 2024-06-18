import { Request, Response } from "express";
import { ManageProdutoService } from "../../services/ManageProdutoService";

export class DeleteProdutoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const response = await new ManageProdutoService().delete(Number(id));

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    res.status(200).send(response);
  }
}
