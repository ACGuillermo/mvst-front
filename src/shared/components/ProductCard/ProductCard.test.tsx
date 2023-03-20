import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const defaultProps = {
    title: 'Test Coffee',
    img: 'https://example.com/test-coffee.jpg',
    type: 'Espresso',
  };

  it('renders the component with the correct title and type', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(
      screen.getByText(defaultProps.type.toUpperCase())
    ).toBeInTheDocument();
  });

  it('does not render type element if type is not provided', () => {
    const { type, ...propsWithoutType } = defaultProps;
    render(<ProductCard {...propsWithoutType} />);

    const typeElement = screen.queryByText(defaultProps.type.toUpperCase());
    expect(typeElement).toBeNull();
  });
});
