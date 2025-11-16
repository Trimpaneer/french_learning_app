#!/bin/bash
# Script bash pour créer le fichier .env
# Exécutez ce script si le fichier .env n'existe pas

if [ ! -f .env ]; then
    cat > .env << EOF
# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=my_project_db
DB_USER=postgres
DB_PASSWORD=

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
JWT_EXPIRES_IN=7d
EOF
    echo "✅ Fichier .env créé avec succès!"
    echo "⚠️  N'oubliez pas de modifier DB_PASSWORD avec votre mot de passe PostgreSQL"
else
    echo "⚠️  Le fichier .env existe déjà"
fi

