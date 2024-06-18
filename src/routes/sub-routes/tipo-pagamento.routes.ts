import { Router } from "express";
import { CreateTipoPagamentoController } from "../../controllers/tipo-pagamento/CreateTipoPagamentoController";
import { GetAllTipoPagamentoController } from "../../controllers/tipo-pagamento/GetAllTipoPagamentoController";
import { GetTipoPagamentoController } from "../../controllers/tipo-pagamento/GetTipoPagamentoController";
import { DeleteTipoPagamentoController } from "../../controllers/tipo-pagamento/DeleteTipoPagamentoController";
import { UpdateTipoPagamentoController } from "../../controllers/tipo-pagamento/UpdateTipoPagamentoController";

export const TipoPagamentoRouter = Router();

TipoPagamentoRouter.get("/", new GetAllTipoPagamentoController().handle);
TipoPagamentoRouter.post("/", new CreateTipoPagamentoController().handle);
TipoPagamentoRouter.get("/:id", new GetTipoPagamentoController().handle);
TipoPagamentoRouter.delete("/:id", new DeleteTipoPagamentoController().handle);
TipoPagamentoRouter.put("/:id", new UpdateTipoPagamentoController().handle);
