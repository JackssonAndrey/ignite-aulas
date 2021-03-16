import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRRepository: ICategoriesRepository) { }

  execute(): Category[] {
    const categories = this.categoriesRRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
