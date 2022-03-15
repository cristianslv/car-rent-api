/* eslint-disable no-shadow */
import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

// Então basicamente as rotas são destinadas de forma grupal
// Aqui também não deve existir specificidade de código, por
// conta do Single Responsibility Principle, e portanto apenas
// delego para cada rota controllers que fazem alguma ação.

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
