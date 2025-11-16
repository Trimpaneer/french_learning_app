# 📊 Comment créer la base de données PostgreSQL

## Option 1 : Via pgAdmin (Interface graphique - Recommandé)

1. **Ouvrez pgAdmin** (généralement dans le menu Démarrer après l'installation de PostgreSQL)

2. **Connectez-vous au serveur** :
   - Cliquez sur "Servers" dans le panneau de gauche
   - Entrez votre mot de passe PostgreSQL si demandé
   - Le serveur devrait être "PostgreSQL XX" (XX = version)

3. **Créez la base de données** :
   - Clic droit sur "Databases" → "Create" → "Database..."
   - Dans l'onglet "General" :
     - **Name** : `my_project_db`
   - Cliquez sur "Save"

4. **C'est tout !** La base de données est créée.

## Option 2 : Via psql (Ligne de commande)

1. **Ouvrez PowerShell ou CMD**

2. **Connectez-vous à PostgreSQL** :
   ```powershell
   psql -U postgres
   ```
   (Entrez votre mot de passe PostgreSQL)

3. **Créez la base de données** :
   ```sql
   CREATE DATABASE my_project_db;
   ```

4. **Vérifiez qu'elle existe** :
   ```sql
   \l
   ```
   (Vous devriez voir `my_project_db` dans la liste)

5. **Quittez psql** :
   ```sql
   \q
   ```

## Option 3 : Via SQL directement dans pgAdmin

1. Ouvrez pgAdmin
2. Connectez-vous au serveur
3. Clic droit sur votre serveur → "Query Tool"
4. Collez ce code SQL :
   ```sql
   CREATE DATABASE my_project_db;
   ```
5. Cliquez sur le bouton "Execute" (▶) ou appuyez sur F5

## ⚠️ Important après la création

Une fois la base de données créée :

1. **Vérifiez votre fichier `server/.env`** :
   ```
   DB_NAME=my_project_db
   DB_USER=postgres
   DB_PASSWORD=votre_mot_de_passe
   ```

2. **Redémarrez le serveur backend** :
   ```powershell
   cd server
   npm run dev
   ```

Le serveur créera automatiquement la table `users` au premier démarrage ! ✅

## 🔍 Vérification

Pour vérifier que tout fonctionne, le serveur devrait afficher :
```
✅ Connected to PostgreSQL database
✅ Database schema initialized
🚀 Server running on http://localhost:3001
```

