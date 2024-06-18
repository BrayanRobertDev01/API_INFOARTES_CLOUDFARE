import { Router } from "express";
import { CreateProdutoController } from "../../controllers/produto/CreateProdutoController";
import { GetAllProdutoController } from "../../controllers/produto/GetAllProdutoController";
import { GetProdutoController } from "../../controllers/produto/GetProdutoController";
import { DeleteProdutoController } from "../../controllers/produto/DeleteProdutoController";
import { UpdateProdutoController } from "../../controllers/produto/UpdateProdutoController";
import { GetProductByCategoryController } from "../../controllers/produto/GetProdutoByCategory";

export const ProdutoRouter = Router();

ProdutoRouter.get("/", new GetAllProdutoController().handle);
ProdutoRouter.get("/categoria/:id_tipo_produto", new GetProductByCategoryController().handle);
ProdutoRouter.post("/", new CreateProdutoController().handle);
ProdutoRouter.get("/:id", new GetProdutoController().handle);
ProdutoRouter.delete("/:id", new DeleteProdutoController().handle);
ProdutoRouter.put("/:id", new UpdateProdutoController().handle);
