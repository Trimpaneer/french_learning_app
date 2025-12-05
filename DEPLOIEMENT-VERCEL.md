# 🚀 Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer votre application React + Backend sur Vercel avec une base de données PostgreSQL.

## 📋 Vue d'ensemble

- **Frontend** : React + Vite → Vercel
- **Backend** : Express API → Vercel Serverless Functions
- **Base de données** : Vercel Postgres (PostgreSQL gratuit)

## 🔧 Prérequis

1. Un compte Vercel (gratuit) : [vercel.com/signup](https://vercel.com/signup)
2. Git installé sur votre machine
3. Votre projet doit être sur GitHub, GitLab ou Bitbucket

---

## 📦 Étape 1 : Préparer le projet pour Git

### 1.1 Initialiser Git (si pas déjà fait)

```powershell
# Dans le dossier my-project
git init
git add .
git commit -m "Initial commit - Préparation pour déploiement Vercel"
```

### 1.2 Créer un repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur **"New repository"**
3. Nommez-le `french-learning-app` (ou autre nom)
4. **Ne cochez PAS** "Initialize with README"
5. Cliquez sur **"Create repository"**

### 1.3 Pousser le code sur GitHub

```powershell
# Remplacez YOUR_USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/YOUR_USERNAME/french-learning-app.git
git branch -M main
git push -u origin main
```

---

## 🗄️ Étape 2 : Configurer Vercel Postgres

### 2.1 Créer un projet Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **"Add New..."** → **"Project"**
4. Sélectionnez votre repository `french-learning-app`
5. **NE DÉPLOYEZ PAS ENCORE** - Cliquez sur **"Configure Project"**

### 2.2 Ajouter Vercel Postgres

1. Dans votre projet Vercel, allez dans l'onglet **"Storage"**
2. Cliquez sur **"Create Database"**
3. Sélectionnez **"Postgres"**
4. Choisissez la région la plus proche (ex: `Washington, D.C., USA (iad1)`)
5. Cliquez sur **"Create"**

### 2.3 Récupérer les variables d'environnement

1. Une fois la base créée, allez dans **"Settings"** → **"Environment Variables"**
2. Vercel a automatiquement créé ces variables :
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `POSTGRES_USER`
   - `POSTGRES_HOST`
   - `POSTGRES_PASSWORD`
   - `POSTGRES_DATABASE`

> ⚠️ **Important** : Ces variables sont déjà configurées automatiquement dans Vercel !

---

## ⚙️ Étape 3 : Configurer les variables d'environnement

### 3.1 Variables pour la production (Vercel)

Dans **Settings** → **Environment Variables** de votre projet Vercel, ajoutez :

| Variable | Valeur | Environnement |
|----------|--------|---------------|
| `JWT_SECRET` | `votre_secret_jwt_super_securise_production_2024` | Production |
| `JWT_EXPIRES_IN` | `7d` | Production |
| `FRONTEND_URL` | `https://votre-app.vercel.app` | Production |

> 💡 Remplacez `votre-app.vercel.app` par l'URL de votre application (vous la verrez après le premier déploiement)

### 3.2 Variables pour le développement local

Votre fichier `server/.env` reste inchangé pour le développement local.

---

## 🔄 Étape 4 : Adapter le backend pour Vercel

Les fichiers de configuration ont été créés automatiquement :

### Fichiers créés :
- ✅ `api/index.ts` - Point d'entrée serverless
- ✅ `vercel.json` - Configuration Vercel
- ✅ `server/src/config/database.vercel.ts` - Configuration DB pour Vercel

### Ce qui change :
- Le backend Express devient une **serverless function**
- La connexion PostgreSQL utilise les variables Vercel
- Les routes API sont accessibles via `/api/*`

---

## 🚀 Étape 5 : Déployer sur Vercel

### Option 1 : Via l'interface Vercel (Recommandé)

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur **"Add New..."** → **"Project"**
3. Sélectionnez votre repository GitHub
4. Vercel détecte automatiquement Vite
5. **Build Settings** (vérifiez) :
   - **Framework Preset** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
6. Cliquez sur **"Deploy"** 🚀

### Option 2 : Via la CLI Vercel

```powershell
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

---

## ✅ Étape 6 : Initialiser la base de données

Après le premier déploiement, la base de données doit être initialisée.

### Option 1 : Via l'interface Vercel Postgres

1. Allez dans **Storage** → Votre base Postgres
2. Cliquez sur **"Query"**
3. Collez ce SQL :

```sql
-- Créer la table users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index sur email
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Créer la table tutorial_completions
CREATE TABLE IF NOT EXISTS tutorial_completions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tutorial_id INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, tutorial_id)
);

-- Créer la table exercise_completions
CREATE TABLE IF NOT EXISTS exercise_completions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  exercise_id INTEGER NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, exercise_id)
);

-- Index pour les completions
CREATE INDEX IF NOT EXISTS idx_tutorial_completions_user ON tutorial_completions(user_id);
CREATE INDEX IF NOT EXISTS idx_exercise_completions_user ON exercise_completions(user_id);
```

4. Cliquez sur **"Run Query"**

### Option 2 : Automatique au premier appel API

Le backend initialisera automatiquement les tables au premier appel API grâce à la fonction `initDatabase()`.

---

## 🧪 Étape 7 : Tester le déploiement

### 7.1 Tester le backend

Ouvrez dans votre navigateur :
```
https://votre-app.vercel.app/api/health
```

Vous devriez voir :
```json
{"status":"OK","message":"Server is running"}
```

### 7.2 Tester l'inscription

Utilisez Postman ou curl :

```powershell
curl -X POST https://votre-app.vercel.app/api/auth/register `
  -H "Content-Type: application/json" `
  -d '{"email":"test@example.com","password":"password123"}'
```

### 7.3 Tester le frontend

Ouvrez `https://votre-app.vercel.app` dans votre navigateur.

---

## 🔄 Étape 8 : Déploiements futurs

### Déploiement automatique

Chaque fois que vous poussez du code sur GitHub :

```powershell
git add .
git commit -m "Nouvelle fonctionnalité"
git push
```

Vercel déploie automatiquement ! 🎉

### Voir les logs

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur votre projet
3. Onglet **"Deployments"** pour voir l'historique
4. Onglet **"Functions"** pour voir les logs du backend

---

## 🐛 Dépannage

### Erreur : "Module not found"

**Solution** : Vérifiez que toutes les dépendances sont dans `package.json`

```powershell
npm install
git add package.json package-lock.json
git commit -m "Fix dependencies"
git push
```

### Erreur : "Database connection failed"

**Solution** : Vérifiez les variables d'environnement dans Vercel

1. **Settings** → **Environment Variables**
2. Vérifiez que `POSTGRES_URL` existe
3. Redéployez : **Deployments** → **...** → **Redeploy**

### Erreur : "CORS policy"

**Solution** : Mettez à jour `FRONTEND_URL` dans les variables d'environnement

```
FRONTEND_URL=https://votre-app.vercel.app
```

### Le frontend se charge mais pas l'API

**Solution** : Vérifiez que les routes API sont bien dans `/api/*`

Dans votre code React, utilisez :
```typescript
const API_URL = import.meta.env.PROD 
  ? '/api' 
  : 'http://localhost:3001/api';
```

---

## 📊 Monitoring et limites

### Plan gratuit Vercel

- ✅ **Bande passante** : 100 GB/mois
- ✅ **Builds** : 6000 minutes/mois
- ✅ **Serverless Functions** : 100 GB-Heures
- ✅ **Postgres** : 256 MB de stockage, 60 heures de compute

### Voir l'utilisation

1. Dashboard Vercel → **Usage**
2. Storage → Votre DB → **Usage**

---

## 🎯 Checklist finale

- [ ] Code poussé sur GitHub
- [ ] Projet créé sur Vercel
- [ ] Base de données Postgres créée
- [ ] Variables d'environnement configurées
- [ ] Premier déploiement réussi
- [ ] Base de données initialisée
- [ ] API testée (`/api/health`)
- [ ] Frontend accessible
- [ ] Inscription/Connexion fonctionnelle

---

## 🆘 Besoin d'aide ?

- **Documentation Vercel** : [vercel.com/docs](https://vercel.com/docs)
- **Vercel Postgres** : [vercel.com/docs/storage/vercel-postgres](https://vercel.com/docs/storage/vercel-postgres)
- **Support Vercel** : [vercel.com/support](https://vercel.com/support)

---

## 🎉 Félicitations !

Votre application est maintenant déployée sur Vercel avec une base de données PostgreSQL ! 🚀

**URL de production** : `https://votre-app.vercel.app`

Partagez-la avec le monde ! 🌍
