# ✅ Checklist de Déploiement Vercel

Utilisez cette checklist pour vous assurer que tout est prêt pour le déploiement.

## 📋 Avant le déploiement

### Configuration locale
- [ ] PostgreSQL installé et démarré
- [ ] Base de données `my_project_db` créée
- [ ] Fichier `server/.env` configuré avec vos informations
- [ ] Application fonctionne en local (`npm run dev` + `npm run dev:server`)
- [ ] Tests d'inscription/connexion réussis en local

### Préparation Git
- [ ] Git initialisé (`git init`)
- [ ] Fichier `.gitignore` présent
- [ ] Fichier `server/.env` **NON** commité (doit être dans .gitignore)
- [ ] Tous les fichiers ajoutés (`git add .`)
- [ ] Premier commit créé (`git commit -m "Initial commit"`)

### GitHub
- [ ] Repository créé sur GitHub
- [ ] Remote ajouté (`git remote add origin ...`)
- [ ] Code poussé sur GitHub (`git push -u origin main`)

## 🚀 Déploiement Vercel

### Compte et projet
- [ ] Compte Vercel créé sur [vercel.com](https://vercel.com)
- [ ] GitHub connecté à Vercel
- [ ] Nouveau projet créé depuis le repository GitHub
- [ ] Framework détecté automatiquement (Vite)

### Base de données
- [ ] Vercel Postgres créé (Storage → Create Database → Postgres)
- [ ] Région sélectionnée (proche de vous)
- [ ] Variables d'environnement auto-générées vérifiées :
  - [ ] `POSTGRES_URL`
  - [ ] `POSTGRES_USER`
  - [ ] `POSTGRES_HOST`
  - [ ] `POSTGRES_PASSWORD`
  - [ ] `POSTGRES_DATABASE`

### Variables d'environnement
Dans Settings → Environment Variables :
- [ ] `JWT_SECRET` ajouté (valeur sécurisée pour production)
- [ ] `JWT_EXPIRES_IN` ajouté (ex: `7d`)
- [ ] `FRONTEND_URL` ajouté (sera `https://votre-app.vercel.app`)

### Premier déploiement
- [ ] Bouton "Deploy" cliqué
- [ ] Build réussi (pas d'erreurs)
- [ ] Déploiement terminé
- [ ] URL de production notée : `https://________________.vercel.app`

## 🗄️ Initialisation de la base de données

### Via l'interface Vercel
- [ ] Storage → Votre Postgres → Query ouvert
- [ ] SQL d'initialisation copié depuis `DEPLOIEMENT-VERCEL.md` (Étape 6)
- [ ] Query exécutée avec succès
- [ ] Tables créées vérifiées :
  - [ ] `users`
  - [ ] `tutorial_completions`
  - [ ] `exercise_completions`

## 🧪 Tests post-déploiement

### Backend API
- [ ] Health check : `https://votre-app.vercel.app/api/health`
  - Retourne : `{"status":"OK","message":"Server is running"}`
- [ ] API root : `https://votre-app.vercel.app/api`
  - Retourne : Liste des endpoints

### Frontend
- [ ] Page d'accueil charge : `https://votre-app.vercel.app`
- [ ] Pas d'erreurs dans la console du navigateur
- [ ] Styles CSS chargés correctement

### Fonctionnalités
- [ ] Inscription d'un nouvel utilisateur fonctionne
- [ ] Connexion avec le compte créé fonctionne
- [ ] Token JWT reçu et stocké
- [ ] Données utilisateur affichées
- [ ] Déconnexion fonctionne

### Progression (si applicable)
- [ ] Marquer un tutoriel comme terminé fonctionne
- [ ] Marquer un exercice comme terminé fonctionne
- [ ] Statistiques utilisateur affichées correctement

## 🔄 Configuration des déploiements automatiques

- [ ] Déploiement automatique activé (par défaut sur Vercel)
- [ ] Test : Faire un petit changement, commit, push
- [ ] Vérifier que Vercel déploie automatiquement
- [ ] Nouveau déploiement visible dans l'onglet "Deployments"

## 📊 Monitoring

### Vérifications régulières
- [ ] Onglet "Analytics" consulté
- [ ] Onglet "Functions" pour les logs API
- [ ] Onglet "Usage" pour surveiller les limites du plan gratuit

### Limites du plan gratuit
- [ ] Bande passante : 100 GB/mois
- [ ] Builds : 6000 minutes/mois
- [ ] Serverless Functions : 100 GB-Heures
- [ ] Postgres : 256 MB stockage, 60h compute

## 🔐 Sécurité

- [ ] `JWT_SECRET` différent de celui en développement
- [ ] `JWT_SECRET` complexe et sécurisé (min 32 caractères)
- [ ] Fichier `.env` local **jamais** commité sur Git
- [ ] Variables sensibles uniquement dans Vercel Dashboard

## 📝 Documentation

- [ ] URL de production ajoutée au README
- [ ] Instructions de déploiement partagées avec l'équipe
- [ ] Accès Vercel partagé si nécessaire (Settings → Team)

## 🎉 Déploiement réussi !

Si tous les points sont cochés, félicitations ! 🚀

Votre application est en production sur :
**`https://________________.vercel.app`**

---

## 🐛 En cas de problème

Consultez :
- [DEPLOIEMENT-VERCEL.md](./DEPLOIEMENT-VERCEL.md) - Section Dépannage
- Vercel Dashboard → Functions → Logs
- Vercel Dashboard → Deployments → Build Logs

## 📞 Support

- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support Vercel : [vercel.com/support](https://vercel.com/support)
