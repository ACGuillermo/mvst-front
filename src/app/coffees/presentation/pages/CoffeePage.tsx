import { ProductCard } from '@/shared/components';
import React from 'react';
import { Coffee } from '../../domain/coffee';

type Props = {
  data: Coffee[];
};

export const CoffeePage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 sm:gap-x-20 gap-x-40 justify-center">
        {data.map((coffee) => (
          <ProductCard
            key={coffee.id}
            img={coffee.img}
            title={coffee.title}
            type={coffee.type}
          />
        ))}
      </section>
    </>
  );
};
