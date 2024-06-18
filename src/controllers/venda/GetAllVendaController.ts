import { Request, Response } from "express";
import { ManageVendaService } from "../../services/ManageVendaService";

export class GetAllVendaController {
  async handle(req: Request, res: Response) {
    const response = await new ManageVendaService().getAll();

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}
