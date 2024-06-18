import { Request, Response } from "express";
import { ManageProdutoService } from "../../services/ManageProdutoService";
import { Produto } from "@prisma/client";

export class UpdateProdutoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const produto: Produto = req.body;

    const response = await new ManageProdutoService().update(Number(id), produto);

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    res.status(200).send(response);
  }
}
