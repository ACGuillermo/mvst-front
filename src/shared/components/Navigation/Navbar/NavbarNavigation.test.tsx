import React from 'react';
import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { NavbarNavigation } from './NavbarNavigation';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('NavbarNavigations', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/coffees',
    });
  });

  it('renders navigation items with correct active state', () => {
    render(<NavbarNavigation />);

    const coffeeNavItem = screen.getByText('Our Coffee');
    const teaNavItem = screen.getByText('Our Tea');

    expect(coffeeNavItem).toBeInTheDocument();
    expect(teaNavItem).toBeInTheDocument();

    expect(coffeeNavItem.closest('div')).toHaveClass('border-yellow-600');
    expect(teaNavItem.closest('div')).not.toHaveClass('border-yellow-600');
  });
});
