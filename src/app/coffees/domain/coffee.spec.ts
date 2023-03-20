import { Coffee } from './coffee';

describe('Coffee', () => {
  const coffee = new Coffee({
    id: 1,
    title: 'Lavazza Espresso',
    img: 'https://example.com/lavazza.jpg',
    addedAt: '2022-12-01T00:00:00.000Z',
    type: 'Espresso',
  });

  it('should set properties correctly', () => {
    expect(coffee.id).toEqual(1);
    expect(coffee.title).toEqual('Lavazza Espresso');
    expect(coffee.img).toEqual('https://example.com/lavazza.jpg');
    expect(coffee.type).toEqual('Espresso');
  });

  it('should return addedAt date as a string', () => {
    const addedAt = coffee.getDate();
    expect(addedAt).toEqual('2022-12-01T00:00:00.000Z');
  });
});
