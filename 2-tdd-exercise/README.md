# Exercice TDD

## Installation des dépendances

Installation des dépendances d'éxécution et de développement

`npm ci`

## Lancer les tests

Commande pour lancer les tests jest

`npm run test`

ou

`npm test`

## Lancer le serveur

Commande pour lancer le serveur

`npm start`

Vous pouvez alors récupérer un résultat en appelant

`http://localhost:3000/api/words/count?text=hello`

## Exercice 1 :

Corrigez les erreurs présentes dans le code et vérifiez que vous obtenez des tests unitaires valides et le bon résultat pour la phrase : "Testez sans douter"

## Exercice 2 :

Améliorez la fonctionnalité en gérant le cas ou la citation est nulle.

1. Ecrivez un nouveau test qui ne passe pas de paramètre à la fonction et qui s'attend à reçevoir zéro en résultat. Que se passe t'il ?
2. Faites la modification de code pour prendre en compte ce cas d'usage. Le code écrit répond au besoin et les tests unitaires sont tous valides.

# Exercice 3 :

Augmentez la fonctionnalité en comptant les mots dans ces citations :
 - "Tester c'est douter, corriger c'est abdiquer"
 - "Rien n'est codé par hasard"

Nous allons utiliser la méthode TDD  :
1. Commencez par mettre en place les tests unitaires dans un premier temps. Le code actuel ne permet pas de gérer ces cas là, il faut le faire évoluer.
2. Faites la modification de code pour prendre en compte ces citations. Le code écrit répond au besoin et les tests unitaires sont tous valides.
3. Le code n'est pas dans un format synthétique et facilement maintenable, on le refactorise. Le code écrit répond au besoin et est lisible et maintenable. Les tests unitaires sont tous valides.

## Exercice 4 :

Augmentez encore la fonctionnalité en comptant les mots dans ces citations :
 - "Tester c'est douter, corriger c'est abdiquer !"
 - "Dans les phrases à ne jamais dire, nous trouvons par exemple : 'Cela marche sur mon poste.'."

**Rejouez la méthode TDD**

## Exercice 5 :

1. Consultez la documentation de Jest et trouvez comment modifier le fichier `jest.config.js` pour ajouter le rapport de couverture de code.
Lancez la commande `npm test` et observez la différence dans la console.

2. Utilisez aussi la commande permettant de générer un rapport de couverture de code par les tests unitaires. Vérifiez que 100% de votre code est couvert. Dans le cas contraire ajoutez des tests ou refactorisez votre code.


## [Bonus] Exercice 6 : 

A l'aide de la librairie [supertest](https://www.npmjs.com/package/supertest) écrire les tests d'intégration suivants qui serviront à tester notre API.

1. Ecrivez un test qui compte les mots de cette citation en passant par l'api.
 - "Compiler c'est tester !"
 
2. Ecrivez un test qui appelle l'api sans le paramètre `?text=xxxx` dans l'url. Que se passe-t-il ? Proposez une correction.
