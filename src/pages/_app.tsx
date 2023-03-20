import '../core/styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '@/shared/components/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
