#!/bin/bash
# Script bash pour démarrer le backend et le frontend
# Utilisez: ./start-dev.sh

echo "🚀 Démarrage de l'environnement de développement..."

# Vérifier si le fichier .env existe dans server
if [ ! -f server/.env ]; then
    echo "⚠️  Le fichier server/.env n'existe pas. Création..."
    cd server
    if [ -f setup-env.sh ]; then
        chmod +x setup-env.sh
        ./setup-env.sh
    fi
    cd ..
fi

# Démarrer le backend en arrière-plan
echo "📦 Démarrage du backend..."
cd server
npm run dev &
BACKEND_PID=$!
cd ..

# Attendre un peu pour que le backend démarre
sleep 3

# Démarrer le frontend
echo "🎨 Démarrage du frontend..."
npm run dev

# Nettoyer les processus à la sortie
trap "kill $BACKEND_PID" EXIT

