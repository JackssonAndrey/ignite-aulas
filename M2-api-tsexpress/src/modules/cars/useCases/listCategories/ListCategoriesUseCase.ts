import { inject, injectable } from 'tsyringe';

import { Category } from '@modules/cars/entities/Category';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRRepository: ICategoriesRepository
  ) {
    /*  */
  }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
