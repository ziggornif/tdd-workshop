---
marp: true
theme: gaia
_class: lead
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# Tests unitaires

La technique TDD, les librairies de tests unitaires, la couverture de code.

Mise en pratique

![bg left:40% 80%](./assets/logo.png)

---

# La technique TDD (Test Driven Development)

Le développement piloté par les tests est une technique qui demande l’écriture des tests unitaires avant l’écriture du code.

C’est une technique itérative et incrémentale, le cycle est répété tout au long du développement de l’application et pour chaque incrément technique ou fonctionnel.

---

# Cycle du TDD

- Écrire le test
- Vérifier que le test échoue
- Écrire le code
- Vérifier que le test passe
- Refactoriser le code

![bg right:50% 100%](./assets/tdd.png)

---

# Librairies de tests

- JS : Jest, Vitest, Mocha
- Java : JUnit, Kotest (Kotlin)
- Dotnet : NUnit
- Rust : Natif via la commande cargo test
- Go : Natif via la commande go test

---

# La couverture de code

Quatre principales méthodes de couverture de code par les tests :

• Couverture des fonctions : combien de fois une fonction est appelée
• Couverture des instructions : combien de fois une ligne de code est appelée
• Couverture des points de tests : combien de valeurs de variables sont testées
• Couverture des chemins d’exécution : combien de parcours possibles sont testés

---

#

![](./assets/julien-twitter.png)

---

# Couverture de code à MGDIS

Profils `Quality gates` Sonar :

- A+ 90% de couverture
- A > 80% de couverture
- B > 70% de couverture
- C > 60% de couverture

Si couverture inférieure au profil défini => build Gitlab KO 🚨

---

# Démonstration

Démonstration rapide d'un développement en TDD.

**Feature :** Valider un panier d'achat selon les règles suivantes:
- 1. Le panier ne peut pas être vide
- 2. Chaque article doit avoir une quantité positive
- 3. Le prix total ne peut pas dépasser 1000€
- 4. Le panier ne peut pas contenir plus de 10 articles différents

---

# Mise en pratique

https://bit.ly/4bi1SwJ

![bg right:50% 100%](./assets/bit.ly_4bi1SwJ.png)

Cliquer sur le bouton 

![width:300px](https://camo.githubusercontent.com/b04f5659467d23b5109ba935a40c00decd264eea25c22d50a118021349eea94f/68747470733a2f2f676974706f642e696f2f627574746f6e2f6f70656e2d696e2d676974706f642e737667)

---

# Rendu du TP

- Archive avec les fichiers :
    - apps/rhapi/src/employee/employee.service.ts
    - apps/rhapi/src/employee/employee.service.spec.ts
- Envoyer par mail à drouian-m@mgdis.fr
- **Rendu attendu avant la fin de journée (13/05/2025)**

---

# Et l'IA dans tout ça ?

**TDD assisté par IA**

- Écriture de tests assisté par IA
- Features implémentées par IA à partir des assertions des tests

**Outils :** Copilot, Windsurf, Cursor, Claude, self hosted solution (Ollama, Lmstudio)

**Ressources :** [TDD & generative AI - a perfect pairing? by Bouke Nijhuis](https://www.youtube.com/watch?v=YRFpyGbp6h4)

---

# Conseils sur l'IA

- **(Pour les alternants) demandez à votre entreprise les règles internes sur l'IA (outils autorisés, licences ...)**
- Ne pas faire confiance aveuglément aux résultats produits
- Toujours chercher à comprendre le code produit
- Utiliser l'outil le plus adapté à une tâche (ex : un renommage de variable dans un projet est parfaitement géré par les IDE et ne nécessite pas d'IA)

---

# Pour aller plus loin

Tests snapshot

Architecture hexagonale ([conférence Devoxx](https://youtu.be/-dXN8wkN0yk?si=zbGllnyK7g1wG_Sg))

Quelques katas pour s'entraîner au TDD :

- http://codingdojo.org/kata/FizzBuzz/
- http://codingdojo.org/kata/StringCalculator/
- http://codingdojo.org/kata/Bowling/
