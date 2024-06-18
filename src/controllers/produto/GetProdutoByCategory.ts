import { Request, Response } from "express";
import { ManageProdutoService } from "../../services/ManageProdutoService";

export class GetProductByCategoryController {
  async handle(req: Request, res: Response) {
    const manageProdutoService = new ManageProdutoService();
    const { id_tipo_produto } = req.params;

    try {
      const produtos = await manageProdutoService.getProductByCategory(Number(id_tipo_produto));
      res.status(200).send(produtos);
    } catch (error) {
      console.error("Erro ao buscar produtos por categoria:", error);
      res.status(500).send({ error: "Erro interno do servidor" });
    }
  }
}

