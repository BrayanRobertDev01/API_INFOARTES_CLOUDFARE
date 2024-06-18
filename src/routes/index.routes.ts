import { Router } from "express";
import { ProdutoRouter } from "./sub-routes/produto.routes";
import { TipoPagamentoRouter } from "./sub-routes/tipo-pagamento.routes";
import { TipoProdutoRouter } from "./sub-routes/tipo-produto.routes";
import { StatusRouter } from "./sub-routes/status.routes";
import { VendaRouter } from "./sub-routes/venda.routes";

export const MainRouter = Router();

MainRouter.use("/produto", ProdutoRouter);
MainRouter.use("/tipo-produto", TipoProdutoRouter);
MainRouter.use("/tipo-pagamento", TipoPagamentoRouter);
MainRouter.use("/status", StatusRouter);
MainRouter.use("/venda", VendaRouter);
