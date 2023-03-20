import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type SideNavigationItem = {
  name: string;
  to: string;
};

export const NavbarNavigation: React.FC = (): JSX.Element => {
  const router = useRouter();
  const navigation: SideNavigationItem[] = [
    { name: 'Our Coffee', to: '/coffees' },
    { name: 'Our Tea', to: '/teas' },
  ];
  return (
    <React.Fragment>
      {navigation.map((item) => (
        <div
          key={item.to}
          className={`w-full sm:w-auto text-center border-b-8 sm:border-0 relative ${
            router.pathname === item.to
              ? ' border-yellow-600'
              : 'border-transparent'
          }`}
        >
          <Link passHref href={item.to}>
            {item.name}
          </Link>
          {router.pathname === item.to && (
            <div className="absolute h-2 top-9 w-full bg-yellow-600 hidden sm:block"></div>
          )}
        </div>
      ))}
    </React.Fragment>
  );
};
