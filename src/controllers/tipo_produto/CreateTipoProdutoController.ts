import { Request, Response } from "express";
import { ManageTipoProdutoService } from "../../services/ManageTipoProdutoService";
import { TipoProduto } from "@prisma/client";

export class CreateTipoProdutoController {
  async handle(req: Request, res: Response) {
    const tipoProduto: TipoProduto = req.body;
    const response = await new ManageTipoProdutoService().create(tipoProduto);

    if (response instanceof Error) {
      return res.status(400).send({ error: response.message });
    }

    return res.status(200).send(response);
  }
}

const Camisa = {
  "Tecido" : ["Algodão", "Poliéster", "Dryfall"], //Select
  "Tamanho" : ["P", "M", "G", "GG", "xGG"], //Select
  "Cor" : ["Preta", "Branca", "Colorida"], //Select
  "Valor" : ["Combinação dos selects"] // rota = url/products/tecido_id=1&tamanho_id=1&cor_id=1
}

const CamisaCerta = {
  "Algodão" : {
    "Preta" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 10,
      },
    "Branca" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 15,
      },
    "Colorido" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 20,
      },
      },
  "Poliéster" : {
    "Preta" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 10,
      },
    "Branca" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 15,
      },
    "Colorido" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 20,
      },
    },
  "DryFall" : {
    "Preta" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 10,
      },
    "Branca" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 15,
      },
    "Colorido" : {
        "Tamanho" : ["P", "M", "G", "GG"],
        "Price" : 20,
      },
    }
  }
