import { Coffee } from '../domain/coffee';
import { CoffeeResponse } from './coffee.facade';
import { CoffeeMapper } from './coffee.mapper';

describe('CoffeeMapper', () => {
  it('should map CoffeeResponse to Coffee', () => {
    const coffeeResponse: CoffeeResponse = {
      id: 1,
      name: 'Lavazza Espresso',
      imgUrl: 'https://example.com/lavazza.jpg',
      createdAt: '2022-12-01T00:00:00.000Z',
      type: 'Espresso',
    };

    const expectedCoffee = new Coffee({
      id: 1,
      title: 'Lavazza Espresso',
      img: 'https://example.com/lavazza.jpg',
      addedAt: '2022-12-01T00:00:00.000Z',
      type: 'Espresso',
    });

    const mappedCoffee = CoffeeMapper.toDomain(coffeeResponse);

    expect(mappedCoffee).toEqual(expectedCoffee);
  });
});
