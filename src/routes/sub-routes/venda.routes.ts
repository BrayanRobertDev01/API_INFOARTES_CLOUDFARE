import { Router } from "express";
import { CreateVendaController } from "../../controllers/venda/CreateVendaController";
import { DeleteVendaController } from "../../controllers/venda/DeleteVendaController";
import { GetAllVendaController } from "../../controllers/venda/GetAllVendaController";
import { GetVendaController } from "../../controllers/venda/GetVendaController";
import { UpdateVendaController } from "../../controllers/venda/UpdateVendaController";

export const VendaRouter = Router();

VendaRouter.get("/", new GetAllVendaController().handle);
VendaRouter.post("/", new CreateVendaController().handle);
VendaRouter.get("/:id", new GetVendaController().handle);
VendaRouter.delete("/:id", new DeleteVendaController().handle);
VendaRouter.put("/:id", new UpdateVendaController().handle);
