# Backend Server

Serveur Express avec TypeScript pour l'authentification des utilisateurs.

## Installation

```bash
npm install
```

## Configuration

1. Créez un fichier `.env` à partir de `.env.example`
2. Configurez vos variables d'environnement (voir `.env.example`)

## Démarrage

### Mode développement
```bash
npm run dev
```

### Mode production
```bash
npm run build
npm start
```

## Structure

- `src/config/database.ts` - Configuration PostgreSQL
- `src/models/User.ts` - Modèle utilisateur
- `src/routes/auth.ts` - Routes d'authentification
- `src/middleware/auth.ts` - Middleware JWT
- `src/index.ts` - Point d'entrée

## Base de données

La base de données sera initialisée automatiquement au premier démarrage du serveur.

