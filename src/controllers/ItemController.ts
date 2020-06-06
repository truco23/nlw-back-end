import { Request, Response } from "express";
import { variables } from "../helpers/variables";
import { queryAll } from "../helpers/query";

interface Item {
  id: number;
  title: string;
  image: string
}

class ItemController {

  async getItems(req: Request, res: Response) {

    const items = await queryAll(variables.tableNameItem)
    const serialize = items.map((item: Item) => {
      return {
        id: item.id,
        title: item.title,
        image: `${variables.localHost}:${variables.port}/${variables.urlUpload}/${item.image}`
      }
    })
    return res.json({ success: serialize })
  }
}

export default ItemController