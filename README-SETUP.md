# Guide de configuration - Système d'authentification

Ce guide vous explique comment configurer et lancer le système d'authentification avec PostgreSQL.

## Prérequis

1. **Node.js** (version 18 ou supérieure)
2. **PostgreSQL** (version 12 ou supérieure)
3. **npm** ou **yarn**

## Installation

### 1. Configuration de PostgreSQL

Assurez-vous que PostgreSQL est installé et en cours d'exécution sur votre machine.

Créez une base de données pour le projet :
```sql
CREATE DATABASE my_project_db;
```

### 2. Configuration du Backend

1. Naviguez vers le dossier `server` :
```bash
cd server
```

2. Installez les dépendances :
```bash
npm install
```

3. Créez un fichier `.env` :

**Sur Windows (PowerShell)** :
```powershell
cd server
.\setup-env.ps1
```

**Sur Linux/Mac** :
```bash
cd server
chmod +x setup-env.sh
./setup-env.sh
```

4. Modifiez le fichier `.env` avec vos informations de connexion PostgreSQL (notamment `DB_PASSWORD`) :
```env
PORT=3001
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_project_db
DB_USER=postgres
DB_PASSWORD=votre_mot_de_passe

JWT_SECRET=votre_secret_jwt_super_securise_changez_cela_en_production
JWT_EXPIRES_IN=7d
```

### 3. Configuration du Frontend

1. Retournez à la racine du projet :
```bash
cd ..
```

2. Créez un fichier `.env` à partir de `.env.example` :
```bash
cp .env.example .env
```

3. Le fichier `.env` devrait contenir :
```env
VITE_API_URL=http://localhost:3001/api
```

## Lancement du projet

### Option 1 : Démarrage automatique (recommandé)

**Sur Windows (PowerShell)** :
```powershell
.\start-dev.ps1
```

**Sur Linux/Mac** :
```bash
chmod +x start-dev.sh
./start-dev.sh
```

Ce script démarre automatiquement le backend et le frontend.

### Option 2 : Démarrage manuel

**Terminal 1 - Backend** :
```bash
cd server
npm run dev
```

Le serveur backend sera accessible sur `http://localhost:3001`

**Terminal 2 - Frontend** :
```bash
npm run dev
```

Le frontend sera accessible sur `http://localhost:5173`

## Structure du projet

```
my-project/
├── server/                 # Backend Express + TypeScript
│   ├── src/
│   │   ├── config/         # Configuration de la base de données
│   │   ├── models/         # Modèles de données
│   │   ├── routes/         # Routes API
│   │   ├── middleware/     # Middleware d'authentification
│   │   └── index.ts        # Point d'entrée du serveur
│   ├── package.json
│   └── tsconfig.json
├── src/
│   ├── contexts/           # Contextes React (AuthContext)
│   ├── services/           # Services API
│   ├── Page/               # Pages (Login, Register)
│   └── Components/         # Composants React
└── package.json
```

## Fonctionnalités

- ✅ Inscription utilisateur avec email et mot de passe
- ✅ Connexion utilisateur
- ✅ Authentification JWT
- ✅ Protection des routes avec middleware
- ✅ Gestion de session côté client
- ✅ Interface utilisateur pour login/register

## API Endpoints

### POST `/api/auth/register`
Inscription d'un nouvel utilisateur
- Body: `{ email: string, password: string }`
- Retourne: `{ token, user }`

### POST `/api/auth/login`
Connexion d'un utilisateur
- Body: `{ email: string, password: string }`
- Retourne: `{ token, user }`

### GET `/api/auth/me`
Récupère les informations de l'utilisateur connecté
- Headers: `Authorization: Bearer <token>`
- Retourne: `{ user }`

## Notes de sécurité

⚠️ **Important pour la production** :
- Changez le `JWT_SECRET` par une valeur aléatoire et sécurisée
- Utilisez HTTPS en production
- Configurez CORS correctement pour votre domaine
- Ajoutez une validation plus stricte des mots de passe
- Implémentez un système de rate limiting
- Ajoutez des logs de sécurité

