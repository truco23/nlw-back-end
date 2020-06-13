import { Request, Response } from "express";
import Knex from "knex";
import { variables } from "../helpers/variables";

class PointController {
  async get() {}

  async create(req: Request, res: Response) {
    // const trx = await Knex.transaction()

    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = req.body;

    try {
      const ids = await Knex(variables.tableNamePoint).insert({
        image: "image-fake",
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
      });

      const pointItems = items.map((item_id: number) => {
        return {
          item_id,
          point_id: ids[0],
        };
      });

      await Knex(variables.tableNamePointItem).insert(pointItems);

      return res.json({ sucess: req.body });
    } catch (error) {
      console.log(error);
      return res.json({ fail: error });
    }
  }
}

export default PointController;
