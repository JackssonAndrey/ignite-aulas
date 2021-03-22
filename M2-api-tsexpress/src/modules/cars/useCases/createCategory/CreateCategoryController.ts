import { Request, Response } from 'express';

import CreateCategoryUseCase from './CreateCategoryService';

class CreateCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCase.excute({ name, description });
    return response.status(201).send();
  }
}

export { CreateCategoryController };