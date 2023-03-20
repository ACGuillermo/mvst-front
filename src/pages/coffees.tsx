import React from 'react';
import { fetchCoffeeService } from '@/app/coffees/application';
import { CoffeeMapper } from '@/app/coffees/infrastructure';
import { CoffeePage } from '@/app/coffees/presentation/pages';
import { ContentLayout } from '@/shared/components/Layout';
import { GetStaticProps } from 'next';
import { CoffeeResponse } from '@/app/coffees/infrastructure/coffee.facade';

export const getStaticProps: GetStaticProps<{ data: CoffeeResponse[] }> =
  async () => {
    const data = await fetchCoffeeService();

    return {
      props: {
        data,
      },
    };
  };

export default function Index({
  data,
}: {
  data: CoffeeResponse[];
}): JSX.Element {
  const domainData = data.map(CoffeeMapper.toDomain);
  return (
    <ContentLayout
      heading="Our beloved coffee"
      subheading="Hand-picked, made with love, curated, call it what you want. But we
    promise you, this will be the best coffee of your life."
    >
      <CoffeePage data={domainData} />
    </ContentLayout>
  );
}
