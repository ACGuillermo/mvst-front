import { axios } from '@/core/lib/axios';

export type CoffeeResponse = {
  id: number;
  name: string;
  imgUrl: string;
  createdAt: string;
  type: string;
};
export class CoffeeFacade {
  async fetchAll(): Promise<CoffeeResponse[]> {
    const response = await axios.get<CoffeeResponse[]>('/coffees');
    return response.data;
  }
}
