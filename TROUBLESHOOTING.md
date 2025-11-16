# 🔧 Dépannage - Erreur de connexion PostgreSQL

## Problème : `ECONNREFUSED` sur le port 5432

Cette erreur signifie que PostgreSQL n'est pas accessible. Voici les étapes pour résoudre le problème :

### 1. Vérifier que PostgreSQL est installé et démarré

**Sur Windows :**
```powershell
# Vérifier si le service PostgreSQL est en cours d'exécution
Get-Service -Name "*postgresql*"

# Si le service existe mais n'est pas démarré :
Start-Service -Name "postgresql-x64-XX"  # Remplacez XX par votre version
```

**Alternative :**
- Ouvrez "Services" (Win + R, tapez `services.msc`)
- Cherchez "postgresql" dans la liste
- Si arrêté, cliquez droit → Démarrer

### 2. Configurer le mot de passe PostgreSQL

1. Ouvrez le fichier `server/.env`
2. Modifiez la ligne `DB_PASSWORD=` avec votre mot de passe PostgreSQL
3. Si vous ne connaissez pas le mot de passe :
   - Par défaut, PostgreSQL utilise souvent le mot de passe que vous avez défini lors de l'installation
   - Ou utilisez `postgres` comme mot de passe par défaut

### 3. Créer la base de données

Ouvrez pgAdmin ou psql et exécutez :
```sql
CREATE DATABASE my_project_db;
```

**Ou via la ligne de commande :**
```powershell
# Se connecter à PostgreSQL
psql -U postgres

# Dans psql, exécutez :
CREATE DATABASE my_project_db;
\q
```

### 4. Vérifier la connexion

Testez la connexion avec :
```powershell
psql -U postgres -d my_project_db -h localhost
```

### 5. Redémarrer le serveur backend

Une fois PostgreSQL configuré :
```powershell
cd server
npm run dev
```

## Solutions alternatives

### Si PostgreSQL n'est pas installé :

1. Téléchargez PostgreSQL depuis : https://www.postgresql.org/download/windows/
2. Installez-le avec les options par défaut
3. Notez le mot de passe que vous définissez pour l'utilisateur `postgres`
4. Mettez à jour `server/.env` avec ce mot de passe

### Si vous préférez utiliser Docker :

Créez un fichier `docker-compose.yml` à la racine :
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: my_project_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Puis démarrez avec :
```powershell
docker-compose up -d
```

Et modifiez `server/.env` :
```
DB_PASSWORD=postgres
```

