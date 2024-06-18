import { Request, Response } from "express";
import { ManageVendaService } from "../../services/ManageVendaService";

export class DeleteVendaController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const response = await new ManageVendaService().delete(Number(id));

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    res.status(200).send(response);
  }
}
