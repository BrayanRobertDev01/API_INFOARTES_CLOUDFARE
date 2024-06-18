import { Status } from "@prisma/client";
import { Request, Response } from "express";
import { ManageStatusService } from "../../services/ManageStatusService";

export class CreateStatusController {
  async handle(req: Request, res: Response) {
    const status: Status = req.body;
    const response = await new ManageStatusService().create(status);

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
