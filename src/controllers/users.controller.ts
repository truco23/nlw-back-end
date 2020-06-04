import { Request, Response } from "express";
import api from "../config/axios";

class UserController {

  async getUsers(req: Request, res: Response) {
    const response = await api.get('/users')

    return res.json({ success: response.data })
  }
}

export default UserController