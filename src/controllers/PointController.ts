import { Request, Response } from "express"

class PointController {

  async get() { }

  async create(req: Request, res: Response) {

    return res.json({ sucess: 'res' })
  }
}

export default PointController