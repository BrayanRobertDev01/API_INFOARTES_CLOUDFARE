import { Request, Response } from "express";
import { ManageStatusService } from "../../services/ManageStatusService";
import { Status } from "@prisma/client";

export class UpdateStatusController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const status: Status = req.body;

    const response = await new ManageStatusService().update(Number(id), status);

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    res.status(200).send(response);
  }
}
