import { Navbar } from '@/shared/components/Navigation';
import { ContentLayout } from './ContentLayout';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className="h-screen bg-primary">
      <Navbar />

      {children}
    </div>
  );
};
