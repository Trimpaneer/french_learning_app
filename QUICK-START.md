# 🚀 Guide de démarrage rapide

## Étapes rapides pour démarrer le projet

### 1. Prérequis
- ✅ Node.js installé
- ✅ PostgreSQL installé et en cours d'exécution
- ✅ Base de données créée : `CREATE DATABASE my_project_db;`

### 2. Installation (une seule fois)

```powershell
# Installer toutes les dépendances
npm run install:all
```

Ou manuellement :
```powershell
npm install
cd server
npm install
cd ..
```

### 3. Configuration

**Créer le fichier .env du backend** :
```powershell
cd server
.\setup-env.ps1
```

**Modifier le fichier `server/.env`** :
- Ouvrez `server/.env`
- Modifiez `DB_PASSWORD=` avec votre mot de passe PostgreSQL
- (Optionnel) Modifiez `JWT_SECRET=` avec une clé secrète personnalisée

### 4. Démarrer le projet

**Option simple (tout en un)** :
```powershell
.\start-dev.ps1
```

**Option manuelle (2 terminaux)** :

Terminal 1 - Backend :
```powershell
cd server
npm run dev
```

Terminal 2 - Frontend :
```powershell
npm run dev
```

### 5. Accéder à l'application

- Frontend : http://localhost:5173
- Backend API : http://localhost:3001/api
- Health check : http://localhost:3001/api/health

### 6. Tester l'authentification

1. Allez sur http://localhost:5173
2. Cliquez sur "Inscription"
3. Créez un compte avec email et mot de passe
4. Vous serez automatiquement connecté
5. Testez la déconnexion et la reconnexion

## ⚠️ Dépannage

### Erreur de connexion à la base de données
- Vérifiez que PostgreSQL est en cours d'exécution
- Vérifiez les informations dans `server/.env`
- Vérifiez que la base de données `my_project_db` existe

### Le backend ne démarre pas
- Vérifiez que le port 3001 n'est pas déjà utilisé
- Vérifiez que toutes les dépendances sont installées : `cd server && npm install`

### Le frontend ne peut pas se connecter au backend
- Vérifiez que le backend est en cours d'exécution
- Vérifiez la configuration CORS dans `server/src/index.ts`

