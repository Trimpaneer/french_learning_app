# 🔧 Dépannage - Erreur de connexion au backend

## ✅ Vérifications rapides

### 1. Le backend est-il démarré ?

Ouvrez un navigateur et allez sur :
```
http://localhost:3001/api/health
```

**Si vous voyez** : `{"status":"OK","message":"Server is running"}`
→ ✅ Le backend fonctionne !

**Si vous ne voyez rien ou une erreur** :
→ ❌ Le backend n'est pas démarré. Voir ci-dessous.

### 2. Démarrer le backend

**Terminal 1 - Backend :**
```powershell
cd server
npm run dev
```

Vous devriez voir :
```
✅ Connected to PostgreSQL database
✅ Database schema initialized
🚀 Server running on http://localhost:3001
```

### 3. Le frontend est-il démarré ?

**Terminal 2 - Frontend :**
```powershell
npm run dev
```

Vous devriez voir :
```
VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### 4. Vérifier la configuration

**Fichier `server/.env` doit contenir :**
```env
PORT=3001
FRONTEND_URL=http://localhost:5173
DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_project_db
DB_USER=postgres
DB_PASSWORD=votre_mot_de_passe
```

## 🐛 Problèmes courants

### Problème : "Cannot connect to server"

**Solution 1 :** Vérifiez que les deux serveurs sont démarrés
- Backend sur le port 3001
- Frontend sur le port 5173

**Solution 2 :** Vérifiez PostgreSQL
- PostgreSQL doit être démarré
- La base de données `my_project_db` doit exister
- Le mot de passe dans `.env` doit être correct

**Solution 3 :** Redémarrez les serveurs
1. Arrêtez tous les processus Node.js
2. Redémarrez le backend : `cd server && npm run dev`
3. Redémarrez le frontend : `npm run dev`

### Problème : Erreur CORS

Si vous voyez une erreur CORS dans la console du navigateur :
- Vérifiez que `FRONTEND_URL=http://localhost:5173` est dans `server/.env`
- Redémarrez le backend après modification

### Problème : Le backend démarre mais plante

Vérifiez les logs dans le terminal du backend. Erreurs courantes :
- `ECONNREFUSED` → PostgreSQL n'est pas démarré
- `password authentication failed` → Mauvais mot de passe
- `database does not exist` → Créez la base de données

## 🚀 Solution rapide

**Utilisez le script de démarrage automatique :**
```powershell
.\start-dev.ps1
```

Ce script démarre automatiquement le backend et le frontend.

## 📝 Vérification finale

1. ✅ Backend répond sur http://localhost:3001/api/health
2. ✅ Frontend accessible sur http://localhost:5173
3. ✅ PostgreSQL est démarré
4. ✅ Base de données `my_project_db` existe
5. ✅ Fichier `server/.env` est configuré

Si tout est ✅, l'application devrait fonctionner !

