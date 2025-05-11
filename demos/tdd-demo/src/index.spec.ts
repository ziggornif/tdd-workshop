import { validateCart } from './index';

describe('Demo TDD test suite', () => {
  test('should return error on empty cart', () => {
    expect(validateCart([])).toEqual({
      isValid: false,
      errors: ['Le panier ne peut pas être vide']
    });
  });

  test('should return error on cart with negative quantity', () => {
    expect(validateCart([
      { id: '1', name: 'item1', price: 10, quantity: -1 }
    ])).toEqual({
      isValid: false,
      errors: ['La quantité de l\'article item1 doit être positive']
    });
  });

  test('should return error on cart with total price exceeding 1000', () => {
    expect(validateCart([
      { id: '1', name: 'item1', price: 500, quantity: 3 }
    ])).toEqual({
      isValid: false,
      errors: ['Le prix total ne peut pas dépasser 1000']
    });
  });

  test('should return error on cart with more than 10 different items', () => {
    const items = Array.from({ length: 11 }, (_, i) => ({
      id: `${i}`,
      name: `item${i}`,
      price: 10,
      quantity: 1
    }));

    expect(validateCart(items)).toEqual({
      isValid: false,
      errors: ['Le panier ne peut pas contenir plus de 10 articles différents']
    });
  });
})