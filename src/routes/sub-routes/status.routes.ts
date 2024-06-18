import { Router } from "express";
import { CreateStatusController } from "../../controllers/status/CreateStatusController";
import { DeleteStatusController } from "../../controllers/status/DeleteStatusController";
import { GetAllStatusController } from "../../controllers/status/GetAllStatusController";
import { GetStatusController } from "../../controllers/status/GetStatusController";
import { UpdateStatusController } from "../../controllers/status/UpdateStatusController";

export const StatusRouter = Router();

StatusRouter.get("/", new GetAllStatusController().handle);
StatusRouter.post("/", new CreateStatusController().handle);
StatusRouter.get("/:id", new GetStatusController().handle);
StatusRouter.delete("/:id", new DeleteStatusController().handle);
StatusRouter.put("/:id", new UpdateStatusController().handle);
