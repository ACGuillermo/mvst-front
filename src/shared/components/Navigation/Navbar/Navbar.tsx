import React from 'react';
import { NavbarNavigation } from './NavbarNavigation';

export const Navbar = (): JSX.Element => {
  return (
    <>
      <nav className="bg-navbar h-16 flex flex-row items-center">
        <div className="text-white container sm:px-4 mx-auto max-w-6xl sm:flex sm:justify-between">
          <h2 className="text-2xl font-bold text-center">Brewed</h2>
          <div className="flex-grow flex items-center justify-center sm:gap-x-20 font-light">
            <NavbarNavigation />
          </div>
        </div>
      </nav>
    </>
  );
};
