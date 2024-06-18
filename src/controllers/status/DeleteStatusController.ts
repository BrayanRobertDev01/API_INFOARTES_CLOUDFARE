import { Request, Response } from "express";
import { ManageStatusService } from "../../services/ManageStatusService";

export class DeleteStatusController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const response = await new ManageStatusService().delete(Number(id));

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    res.status(200).send(response);
  }
}
