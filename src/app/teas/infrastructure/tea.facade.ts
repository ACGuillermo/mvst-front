import { axios } from '@/core/lib/axios';

export type TeaResponse = {
  id: number;
  name: string;
  imgUrl: string;
  createdAt: string;
};
export class TeaFacade {
  async fetchAll(): Promise<TeaResponse[]> {
    const response = await axios.get<TeaResponse[]>('/teas');
    return response.data;
  }
}
