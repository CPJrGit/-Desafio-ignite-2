import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    return response
      .status(200)
      .json(this.showUserProfileUseCase.execute({ user_id }));
  }
}

export { ShowUserProfileController };
