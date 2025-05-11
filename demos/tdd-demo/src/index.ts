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
  
  return result;
}

