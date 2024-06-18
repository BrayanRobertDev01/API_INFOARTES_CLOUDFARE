import { Request, Response } from "express";
import { ManageProdutoService } from "../../services/ManageProdutoService";
import { Produto } from "@prisma/client";

export class CreateProdutoController {
  async handle(req: Request, res: Response) {
    const produto: Produto = req.body;
    const response = await new ManageProdutoService().create(produto);

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
