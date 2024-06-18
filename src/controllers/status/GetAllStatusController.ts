import { Request, Response } from "express";
import { ManageStatusService } from "../../services/ManageStatusService";

export class GetAllStatusController {
  async handle(req: Request, res: Response) {
    const response = await new ManageStatusService().getAll();

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
