import { CoffeeFacade, CoffeeResponse } from '../infrastructure/coffee.facade';

export const fetchCoffeeService = async (): Promise<CoffeeResponse[]> => {
  return await new CoffeeFacade().fetchAll();
};
