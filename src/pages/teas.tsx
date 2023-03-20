import React from 'react';
import { ContentLayout } from '@/shared/components/Layout';
import { GetStaticProps } from 'next';
import { CoffeeResponse } from '@/app/coffees/infrastructure';
import { TeaPage } from '@/app/teas/presentation/pages';
import { TeaMapper } from '@/app/teas/infrastructure';
import { fetchTeaService } from '@/app/teas/application';
import { TeaResponse } from '@/app/teas/infrastructure';

export const getStaticProps: GetStaticProps<{ data: TeaResponse[] }> =
  async () => {
    const data = await fetchTeaService();

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
  const domainData = data.map(TeaMapper.toDomain);
  return (
    <ContentLayout
      heading="Our beloved coffee"
      subheading="Hand-picked, made with love, curated, call it what you want. But we
    promise you, this will be the best coffee of your life."
    >
      <TeaPage data={domainData} />
    </ContentLayout>
  );
}
