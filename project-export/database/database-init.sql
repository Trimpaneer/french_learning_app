-- Script d'initialisation de la base de données
-- Exécutez ce script si vous voulez créer la base de données manuellement

-- Créer la base de données (à exécuter en tant que superutilisateur PostgreSQL)
-- CREATE DATABASE my_project_db;

-- Se connecter à la base de données
-- \c my_project_db;

-- La table users sera créée automatiquement par l'application au démarrage
-- Mais voici le schéma pour référence :

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Créer un index sur l'email pour des recherches plus rapides
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

