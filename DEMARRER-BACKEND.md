# 🚀 Comment démarrer le backend

## Étapes pour démarrer le serveur backend

### 1. Vérifier que PostgreSQL est démarré

**Via Services Windows :**
- Appuyez sur `Win + R`
- Tapez `services.msc`
- Cherchez "postgresql" dans la liste
- Si arrêté, cliquez droit → Démarrer

**Via PowerShell :**
```powershell
Get-Service -Name "*postgresql*"
Start-Service -Name "postgresql-x64-XX"  # Remplacez XX par votre version
```

### 2. Vérifier la configuration

Ouvrez `server/.env` et vérifiez :
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_project_db
DB_USER=postgres
DB_PASSWORD=votre_mot_de_passe
```

### 3. Démarrer le backend

**Option 1 : Via PowerShell (recommandé)**
```powershell
cd server
npm run dev
```

**Option 2 : Via le script automatique**
```powershell
.\start-dev.ps1
```

### 4. Vérifier que le serveur fonctionne

Ouvrez un navigateur et allez sur :
```
http://localhost:3001/api/health
```

Vous devriez voir :
```json
{"status":"OK","message":"Server is running"}
```

## 🔍 Dépannage

### Erreur : "ECONNREFUSED" sur le port 5432
→ PostgreSQL n'est pas démarré. Voir étape 1.

### Erreur : "password authentication failed"
→ Le mot de passe dans `server/.env` est incorrect.

### Erreur : "database does not exist"
→ Créez la base de données :
```sql
CREATE DATABASE my_project_db;
```

### Le serveur démarre mais ne répond pas
→ Vérifier les logs dans le terminal pour voir les erreurs exactes.

## ✅ Indicateurs de succès

Quand le backend fonctionne correctement:
```
✅ Connected to PostgreSQL database
✅ Database schema initialized
🚀 Server running on http://localhost:3001
```

