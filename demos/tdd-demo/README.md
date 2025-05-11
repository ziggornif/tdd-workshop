# TDD Démo

## Installation des dépendances

Installation des dépendances d’exécution et de développement

`npm ci`

## Lancer les tests

Commande pour lancer les tests jest

`npm run test`

ou

`npm test`

## Solution

Tests :

```ts
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
```

Code :
```ts
type Cart = Item[]

type Item = {
    id: string
    name: string
    price: number
    quantity: number
}

type ValidationObject = {
    isValid: boolean
    errors: string[]
}

/**
 * Valide un panier d'achat selon les règles suivantes:
 * 1. Le panier ne peut pas être vide
 * 2. Chaque article doit avoir une quantité positive
 * 3. Le prix total ne peut pas dépasser 1000
 * 4. Le panier ne peut pas contenir plus de 10 articles différents
 */
export function validateCart(cart: Cart): ValidationObject {
  const result: ValidationObject = {
    isValid: true,
    errors: []
  };

  if(cart.length === 0) {
    result.isValid = false;
    result.errors.push('Le panier ne peut pas être vide');
  }

  let totalPrice = 0;

  for(const item of cart) {
    if(item.quantity <= 0) {
      result.isValid = false;
      result.errors.push(`La quantité de l'article ${item.name} doit être positive`);
    }

    totalPrice += item.price * item.quantity;
  }

  if(totalPrice > 1000) {
    result.isValid = false;
    result.errors.push('Le prix total ne peut pas dépasser 1000');
  }
  
  if(cart.length > 10) {
    result.isValid = false;
    result.errors.push('Le panier ne peut pas contenir plus de 10 articles différents');
  }
  
  return result;
}
```