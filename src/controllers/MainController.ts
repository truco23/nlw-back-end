import { Request, Response } from "express";

class MainController {

  get(req: Request, res: Response) {
    res.json({ success: 'Bem-vindo a NWL' })
  }
}

export default MainController