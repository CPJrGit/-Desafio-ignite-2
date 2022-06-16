import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.header("id");

    return response
      .status(200)
      .json(this.listAllUsersUseCase.execute({ user_id }));
  }
}

export { ListAllUsersController };
