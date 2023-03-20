import { Coffee } from '../domain/coffee';
import { CoffeeResponse } from './coffee.facade';

export const CoffeeMapper = {
  toDomain: (data: CoffeeResponse): Coffee =>
    new Coffee({
      id: data.id,
      title: data.name,
      img: data.imgUrl,
      addedAt: data.createdAt || '',
      type: data.type,
    }),
};
