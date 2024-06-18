import { Request, Response } from "express";
import { ManageTipoProdutoService } from "../../services/ManageTipoProdutoService";
import { TipoProduto } from "@prisma/client";

export class UpdateTipoProdutoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const tipoProduto: TipoProduto = req.body;
    const response = await new ManageTipoProdutoService().update(
      Number(id),
      tipoProduto
    );

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
