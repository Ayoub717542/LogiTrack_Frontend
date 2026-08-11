# 1. Nom du projet

**Nom du projet :** LogiTrack Part 2 — Sécurisation de l’API et développement du frontend React

---

# 2. Présentation du projet

LogiTrack est une application de gestion logistique permettant de gérer les **clients, les produits et les commandes**.

Dans cette deuxième partie du projet, l’objectif principal est de sécuriser l’API REST développée avec **Spring Boot** en utilisant **Spring Security et JWT**, puis de développer une interface frontend avec **React JS** permettant aux utilisateurs d'accéder aux différentes fonctionnalités selon leur rôle.

L'application prend en charge trois rôles :

* **ADMIN** : administration complète de l'application ;
* **MANAGER** : gestion des opérations et consultation des statistiques ;
* **AGENT** : consultation et suivi des opérations quotidiennes.

Le frontend React communique avec l'API sécurisée grâce à **Axios** et utilise des **interceptors** pour gérer automatiquement le JWT et les erreurs HTTP.

L'application propose également une interface moderne et responsive permettant de gérer les clients, les produits et les commandes.

---

# 3. Contexte et problématique

Après le développement de l'API REST LogiTrack, il était nécessaire de sécuriser l'accès aux différentes fonctionnalités de l'application.

L'objectif était donc de mettre en place une solution permettant de :

* authentifier les utilisateurs ;
* sécuriser les endpoints de l'API ;
* gérer les rôles et les autorisations ;
* protéger les routes du frontend ;
* contrôler l'accès aux fonctionnalités selon le rôle ;
* communiquer de manière sécurisée entre React et Spring Boot.

La solution mise en place repose sur **Spring Security + JWT côté backend** et sur **ProtectedRoute, RoleGuard et Axios Interceptors côté frontend**.

---

# 4. Fonctionnalités principales

## 4.1 Authentification

L'application permet aux utilisateurs de :

* créer un compte ;
* se connecter ;
* récupérer un token JWT ;
* conserver leur session ;
* se déconnecter ;
* être automatiquement redirigés après connexion.

Le JWT est automatiquement ajouté aux requêtes envoyées vers l'API grâce à un **Axios Request Interceptor**.

---

## 4.2 Gestion des rôles

Trois rôles sont disponibles :

| Rôle        | Description                             |
| ----------- | --------------------------------------- |
| **ADMIN**   | Administre l'ensemble de l'application  |
| **MANAGER** | Pilote les opérations                   |
| **AGENT**   | Exécute et suit les tâches quotidiennes |

### ADMIN

L'administrateur peut :

* gérer les utilisateurs ;
* gérer les clients ;
* gérer les produits ;
* gérer les commandes ;
* supprimer les données ;
* consulter les statistiques.

### MANAGER

Le manager peut :

* gérer les clients ;
* gérer les produits ;
* gérer les commandes ;
* modifier le statut des commandes ;
* consulter les statistiques ;
* consulter les produits avec un stock faible.

### AGENT

L'agent peut :

* consulter les clients ;
* consulter les produits ;
* consulter les commandes ;
* consulter les détails d'une commande ;
* modifier le statut d'une commande selon ses autorisations.

---

# 5. Fonctionnalités de l'application

## 5.1 Tableau de bord

Le dashboard permet d'afficher les principales informations de l'activité logistique :

* nombre de clients ;
* nombre de produits ;
* nombre de commandes ;
* commandes en attente ;
* commandes expédiées ;
* commandes livrées ;
* produits avec un stock faible ;
* produit le plus commandé ;
* commandes récentes.

Le contenu du dashboard peut également varier selon le rôle de l'utilisateur connecté.

### Capture d'écran — Dashboard

**Insérer ici une capture du Dashboard**

<br><br><br><br>

---

## 5.2 Gestion des clients

L'application permet de :

* afficher la liste des clients ;
* rechercher un client par nom ;
* consulter les détails d'un client ;
* ajouter un client ;
* modifier un client ;
* supprimer un client selon les autorisations.

### Capture d'écran — Gestion des clients

**Insérer ici une capture de la liste des clients**

<br><br><br><br>

---

## 5.3 Gestion des produits

L'application permet de :

* afficher la liste des produits ;
* consulter les détails d'un produit ;
* ajouter un produit ;
* modifier un produit ;
* supprimer un produit selon le rôle ;
* rechercher les produits par catégorie ;
* rechercher les produits selon leur prix ;
* afficher les produits avec un stock faible.

### Capture d'écran — Gestion des produits

**Insérer ici une capture de la liste des produits**

<br><br><br><br>

---

## 5.4 Gestion des commandes

L'application permet de :

* afficher la liste des commandes ;
* consulter les détails d'une commande ;
* créer une commande pour un client ;
* ajouter des produits à une commande ;
* modifier le statut d'une commande ;
* afficher les commandes d'un client ;
* filtrer les commandes par statut.

Les statuts disponibles sont :

* `EN_ATTENTE`
* `EXPEDIEE`
* `LIVREE`

### Capture d'écran — Gestion des commandes

**Insérer ici une capture de la liste des commandes**

<br><br><br><br>

---

# 6. Technologies utilisées

| Technologie            | Utilisation                             |
| ---------------------- | --------------------------------------- |
| **Java / Spring Boot** | Développement de l'API REST             |
| **Spring Security**    | Sécurisation de l'API                   |
| **JWT**                | Authentification stateless              |
| **Spring Data JPA**    | Accès aux données                       |
| **MySQL**              | Base de données                         |
| **React 19**           | Développement du frontend               |
| **Vite**               | Environnement de développement frontend |
| **React Router DOM**   | Gestion du routage                      |
| **Axios**              | Communication avec l'API REST           |
| **React Hook Form**    | Gestion des formulaires                 |
| **Yup**                | Validation des formulaires              |
| **MUI**                | Composants et interface utilisateur     |
| **JavaScript ES6+**    | Développement frontend                  |
| **HTML5 / CSS3**       | Structure et style                      |
| **Git / GitHub**       | Gestion de versions                     |

---

# 7. Architecture du projet

Le projet est organisé en deux parties principales :

```text
LogiTrack
│
├── Backend
│   ├── Spring Boot
│   ├── Spring Security
│   ├── JWT
│   ├── Spring Data JPA
│   └── MySQL
│
└── Frontend
    ├── React
    ├── Vite
    ├── React Router
    ├── Axios
    ├── React Hook Form
    └── Yup
```

Le frontend communique avec le backend à travers des endpoints REST sécurisés.

---

# 8. Sécurité et authentification

## 8.1 Authentification JWT

L'authentification repose sur un système de **JSON Web Token (JWT)**.

Lorsqu'un utilisateur se connecte :

1. il envoie son email et son mot de passe ;
2. Spring Security vérifie les informations ;
3. le backend génère un JWT ;
4. le JWT est retourné au frontend ;
5. le frontend conserve le token ;
6. Axios ajoute automatiquement le token aux requêtes protégées.

Le token est envoyé dans le header :

```http
Authorization: Bearer <JWT>
```

---

## 8.2 Spring Security

Spring Security permet de protéger les endpoints de l'API et de contrôler les accès selon le rôle de l'utilisateur.

Les rôles utilisés dans l'application sont :

```text
ROLE_ADMIN
ROLE_MANAGER
ROLE_AGENT
```

Les autorisations sont appliquées sur les différentes fonctionnalités de l'application.

---

# 9. Axios Interceptors

Une configuration Axios centralisée a été mise en place afin de simplifier la communication avec l'API.

## Request Interceptor

Le Request Interceptor :

* récupère automatiquement le JWT ;
* ajoute le token dans le header `Authorization` ;
* permet d'éviter de répéter cette logique dans chaque requête.

Exemple :

```http
Authorization: Bearer <token>
```

## Response Interceptor

Le Response Interceptor permet de gérer les différentes erreurs HTTP :

* `401 Unauthorized`
* `403 Forbidden`
* `404 Not Found`
* `500 Internal Server Error`

Lorsqu'une erreur `401` est reçue, l'utilisateur est déconnecté et redirigé vers la page de connexion.

---

# 10. Protection des routes

Pour empêcher un utilisateur non authentifié d'accéder aux pages privées, un composant **ProtectedRoute** a été mis en place.

Les routes protégées comprennent notamment :

```text
/dashboard
/clients
/products
/orders
/users
```

Un utilisateur qui n'est pas authentifié est automatiquement redirigé vers la page de connexion.

---

# 11. Contrôle des rôles

Un composant **RoleGuard** permet de contrôler l'accès aux fonctionnalités selon le rôle de l'utilisateur.

Par exemple :

```text
ADMIN
 ├── Users
 ├── Clients
 ├── Products
 ├── Orders
 └── Statistics

MANAGER
 ├── Clients
 ├── Products
 ├── Orders
 └── Statistics

AGENT
 ├── Clients
 ├── Products
 └── Orders
```

Lorsqu'un utilisateur tente d'accéder à une fonctionnalité qui ne lui est pas autorisée, il est redirigé vers une page **Accès refusé**.

### Capture d'écran — Accès refusé

**Insérer ici une capture de la page AccessDenied**

<br><br><br><br>

---

# 12. Pagination, tri et recherche

L'application consomme les endpoints paginés de l'API afin d'améliorer la gestion des données.

Les fonctionnalités disponibles comprennent :

* changement de page ;
* choix du nombre d'éléments par page ;
* affichage du nombre total d'éléments ;
* tri des données ;
* recherche ;
* filtrage.

### Recherche et filtrage

Les recherches disponibles comprennent :

* recherche d'un client par nom ;
* recherche d'un produit par catégorie ;
* recherche selon le prix ;
* recherche des commandes d'un client ;
* filtrage des commandes par statut ;
* affichage des produits avec un stock faible.

### Capture d'écran — Recherche / Pagination

**Insérer ici une capture montrant la recherche, le tri et la pagination**

<br><br><br><br>

---

# 13. Validation des formulaires

Les formulaires React utilisent :

* **React Hook Form** pour la gestion des formulaires ;
* **Yup** pour la validation des données.

Les validations permettent notamment de vérifier :

* les champs obligatoires ;
* le format de l'email ;
* les valeurs numériques ;
* les informations des clients ;
* les informations des produits ;
* les informations des commandes.

Les erreurs de validation sont affichées directement dans l'interface afin d'aider l'utilisateur à corriger les informations saisies.

### Capture d'écran — Formulaire

**Insérer ici une capture d'un formulaire avec validation**

<br><br><br><br>

---

# 14. Pages principales

L'application contient les pages suivantes :

```text
Login
Register
Dashboard

Clients
ClientDetails
ClientForm

Products
ProductDetails
ProductForm

Orders
OrderDetails
OrderForm

Users
Profile

AccessDenied
NotFound
```

---

# 15. Composants principaux

Les composants principaux développés sont :

```text
Navbar
Sidebar
DashboardCard
ClientList
ClientForm
ProductList
ProductForm
OrderList
OrderForm
Pagination
SearchBar
StatusFilter
ProtectedRoute
RoleGuard
Loader
ConfirmDialog
NotFound
```

Cette organisation permet de rendre le code plus **modulaire, réutilisable et facile à maintenir**.

---

# 16. Installation et lancement

## 16.1 Prérequis

Avant de lancer le projet, il faut disposer de :

* Java 21 ou une version compatible ;
* Maven ;
* Node.js ;
* npm ;
* MySQL ;
* Git.

---

## 16.2 Cloner le projet

```bash
git clone <LIEN_DU_REPOSITORY>
```

Puis :

```bash
cd LogiTrack
```

---

## 16.3 Lancer le Backend

Depuis le dossier backend :

```bash
mvn spring-boot:run
```

L'API sera accessible sur :

```text
http://localhost:8080
```

---

## 16.4 Installer les dépendances Frontend

Depuis le dossier frontend :

```bash
npm install
```

---

## 16.5 Lancer le Frontend

```bash
npm run dev
```

L'application React sera accessible sur :

```text
http://localhost:5173
```

---

# 17. Variables d'environnement

Les informations sensibles ne doivent pas être directement écrites dans le code source.

Exemple de configuration frontend :

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

Les informations de connexion à la base de données et les secrets JWT doivent également être configurés côté backend à travers les fichiers de configuration ou les variables d'environnement.

---

# 18. Captures d'écran de l'application

## 18.1 Page de connexion

**Insérer ici la capture de la page Login**

<br><br><br><br><br>

---

## 18.2 Page d'inscription

**Insérer ici la capture de la page Register**

<br><br><br><br><br>

---

## 18.3 Dashboard

**Insérer ici la capture du Dashboard**

<br><br><br><br><br>

---

## 18.4 Interface Clients

**Insérer ici la capture de la gestion des clients**

<br><br><br><br><br>

---

## 18.5 Interface Produits

**Insérer ici la capture de la gestion des produits**

<br><br><br><br><br>

---

## 18.6 Interface Commandes

**Insérer ici la capture de la gestion des commandes**

<br><br><br><br><br>

---

## 18.7 Interface Responsive

**Insérer ici une capture de l'application sur une résolution mobile/tablette**

<br><br><br><br><br>

---

# 19. Contribution personnelle

Ma contribution a porté sur la **sécurisation de l'API LogiTrack et le développement du frontend React**.

Côté backend, j'ai travaillé sur :

* l'intégration de Spring Security ;
* l'authentification avec JWT ;
* la gestion des utilisateurs ;
* la gestion des rôles `ADMIN`, `MANAGER` et `AGENT` ;
* la protection des endpoints ;
* la configuration des autorisations.

Côté frontend, j'ai développé :

* les pages d'inscription et de connexion ;
* la gestion de la session utilisateur ;
* l'intégration du JWT ;
* les Axios Interceptors ;
* les routes protégées ;
* le contrôle d'accès par rôle ;
* le dashboard ;
* la gestion des clients ;
* la gestion des produits ;
* la gestion des commandes ;
* la pagination ;
* le tri ;
* la recherche et le filtrage ;
* la validation des formulaires avec React Hook Form et Yup ;
* l'interface responsive.

---

# 20. Difficultés rencontrées

## Difficulté 1 — Authentification JWT

J'ai rencontré des difficultés lors de la mise en place de l'authentification JWT et de la communication entre le frontend React et l'API Spring Boot.

Le problème venait notamment de la gestion du token et de son ajout aux requêtes protégées.

J'ai résolu ce problème en mettant en place une configuration Axios centralisée avec un Request Interceptor permettant d'ajouter automatiquement le JWT dans le header `Authorization`.

Cette difficulté m'a permis de mieux comprendre le fonctionnement d'une authentification stateless avec JWT.

---

## Difficulté 2 — Gestion des rôles et autorisations

J'ai également rencontré des difficultés lors de la gestion des autorisations selon les rôles.

Il fallait faire la différence entre :

* l'authentification ;
* l'autorisation ;
* la protection des routes frontend ;
* les permissions côté backend.

J'ai résolu ce problème en utilisant Spring Security pour sécuriser les endpoints backend et en mettant en place des composants `ProtectedRoute` et `RoleGuard` côté React.

Cette difficulté m'a permis de comprendre qu'il est nécessaire de sécuriser l'application à la fois côté backend et côté frontend.

---

## Difficulté 3 — Communication Frontend / Backend

Une autre difficulté rencontrée concernait la communication entre React et l'API sécurisée, notamment les erreurs `401`, `403` et les problèmes liés aux requêtes protégées.

J'ai centralisé la gestion des requêtes avec Axios afin de simplifier la communication avec l'API et de gérer les erreurs de manière uniforme.

Cette approche a permis d'améliorer l'organisation du code et d'éviter de répéter la logique d'authentification dans chaque composant.

---

# 21. Améliorations possibles

Dans une prochaine version, je pourrais :

* ajouter des tests unitaires et des tests end-to-end ;
* améliorer les notifications utilisateur ;
* améliorer davantage le design de l'interface ;
* ajouter davantage de statistiques au dashboard ;
* améliorer la gestion des erreurs ;
* ajouter une gestion plus avancée des permissions ;
* déployer le backend et le frontend sur une plateforme cloud ;
* ajouter une documentation Swagger/OpenAPI plus complète.

---

# 22. Conclusion

Ce projet m'a permis de mettre en pratique plusieurs concepts importants du développement Full Stack.

J'ai notamment travaillé sur la **sécurisation d'une API REST avec Spring Security et JWT**, la gestion des rôles et des autorisations, ainsi que sur la création d'une interface frontend avec React.

La réalisation du projet m'a également permis de mieux comprendre la communication entre un frontend et un backend sécurisé, notamment grâce à **Axios Interceptors, ProtectedRoute et RoleGuard**.

Enfin, la mise en place du CRUD, de la pagination, du tri, de la recherche, de la validation des formulaires et du responsive design m'a permis d'avoir une vision plus complète du développement d'une application web moderne.
