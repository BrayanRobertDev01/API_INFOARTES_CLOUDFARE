import { Request, Response } from "express";
import { ManageProdutoService } from "../../services/ManageProdutoService";

export class GetAllProdutoController {
  async handle(req: Request, res: Response) {
    const response = await new ManageProdutoService().getAll();

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
