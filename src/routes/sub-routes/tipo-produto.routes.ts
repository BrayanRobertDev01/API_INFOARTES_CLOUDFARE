import { Router } from "express";
import { CreateTipoProdutoController } from "../../controllers/tipo_produto/CreateTipoProdutoController";
import { GetAllTipoProdutoController } from "../../controllers/tipo_produto/GetAllTipoProdutoController";
import { UpdateTipoProdutoController } from "../../controllers/tipo_produto/UpdateTipoProdutoController";
import { DeleteTipoProdutoController } from "../../controllers/tipo_produto/DeleteTipoProdutoController";
import { GetTipoProdutoController } from "../../controllers/tipo_produto/GetTipoProdutoController";

export const TipoProdutoRouter = Router();

TipoProdutoRouter.get("/", new GetAllTipoProdutoController().handle);
TipoProdutoRouter.post("/", new CreateTipoProdutoController().handle);
TipoProdutoRouter.put("/:id", new UpdateTipoProdutoController().handle);
TipoProdutoRouter.delete("/:id", new DeleteTipoProdutoController().handle);
TipoProdutoRouter.get("/:id", new GetTipoProdutoController().handle);
