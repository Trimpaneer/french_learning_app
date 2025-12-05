# 🇫🇷 French Learning App

Application d'apprentissage du français avec React, TypeScript, et PostgreSQL.

## 🚀 Déploiement rapide sur Vercel

Consultez [QUICK-START-VERCEL.md](./QUICK-START-VERCEL.md) pour déployer en 5 minutes !

Pour un guide détaillé : [DEPLOIEMENT-VERCEL.md](./DEPLOIEMENT-VERCEL.md)

## 💻 Développement local

### Prérequis

- Node.js 18+ 
- PostgreSQL 12+
- npm ou yarn

### Installation

```powershell
# Installer toutes les dépendances
npm run install:all

# Créer la base de données
# Voir CREER-BASE-DONNEES.md

# Configurer les variables d'environnement
cp server/.env.example server/.env
# Éditer server/.env avec vos informations
```

### Démarrer l'application

**Option 1 : Script automatique**
```powershell
.\start-dev.ps1
```

**Option 2 : Manuellement**
```powershell
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
npm run dev
```

L'application sera disponible sur :
- Frontend : http://localhost:5173
- Backend : http://localhost:3001
- API Health : http://localhost:3001/api/health

## 📚 Documentation

- [QUICK-START.md](./QUICK-START.md) - Démarrage rapide local
- [CREER-BASE-DONNEES.md](./CREER-BASE-DONNEES.md) - Configuration PostgreSQL
- [DEMARRER-BACKEND.md](./DEMARRER-BACKEND.md) - Démarrer le serveur
- [DEPLOIEMENT-VERCEL.md](./DEPLOIEMENT-VERCEL.md) - Guide de déploiement complet
- [QUICK-START-VERCEL.md](./QUICK-START-VERCEL.md) - Déploiement rapide

## 🏗️ Architecture

```
my-project/
├── src/                    # Frontend React
│   ├── components/         # Composants React
│   ├── pages/             # Pages de l'application
│   ├── services/          # Services API
│   └── contexts/          # Contextes React
├── server/                # Backend Express
│   └── src/
│       ├── config/        # Configuration DB
│       ├── models/        # Modèles de données
│       ├── routes/        # Routes API
│       └── middleware/    # Middleware auth
├── api/                   # Vercel Serverless Functions
└── public/               # Assets statiques
```

## 🔑 Fonctionnalités

- ✅ Authentification JWT
- ✅ Inscription / Connexion
- ✅ Suivi de progression (tutoriels & exercices)
- ✅ Base de données PostgreSQL
- ✅ API RESTful
- ✅ Interface responsive

## 🛠️ Technologies

**Frontend**
- React 19
- TypeScript
- Vite
- TailwindCSS
- React Router

**Backend**
- Node.js
- Express
- PostgreSQL
- JWT
- bcryptjs

**Déploiement**
- Vercel (Frontend + API)
- Vercel Postgres (Database)

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Créer un compte
- `POST /api/auth/login` - Se connecter
- `GET /api/auth/me` - Obtenir l'utilisateur actuel

### Completions
- `POST /api/completions/tutorials/:id/complete` - Marquer un tutoriel comme terminé
- `POST /api/completions/exercises/:id/complete` - Marquer un exercice comme terminé
- `GET /api/completions/tutorials/:id/status` - Statut d'un tutoriel
- `GET /api/completions/exercises/:id/status` - Statut d'un exercice
- `GET /api/completions/stats` - Statistiques utilisateur

## 🔐 Variables d'environnement

### Production (Vercel)
Configurées dans Vercel Dashboard :
- `POSTGRES_URL` (auto-généré par Vercel Postgres)
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `FRONTEND_URL`

### Développement local
Voir `server/.env.example`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT

## 🆘 Support

Pour toute question ou problème :
- Consultez [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- Consultez [DEPANNAGE-CONNEXION.md](./DEPANNAGE-CONNEXION.md)

---

Fait avec ❤️ pour l'apprentissage du français
