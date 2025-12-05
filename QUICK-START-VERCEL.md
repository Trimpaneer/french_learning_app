# 🚀 Quick Start - Déploiement Vercel

Ce guide rapide vous permet de déployer votre application en quelques minutes.

## ✅ Checklist rapide

### 1️⃣ Préparer le code

```powershell
# Vérifier que tout fonctionne localement
npm run dev

# Ajouter tous les fichiers
git add .
git commit -m "Ready for Vercel deployment"
```

### 2️⃣ Pousser sur GitHub

```powershell
# Créer un repo sur github.com, puis :
git remote add origin https://github.com/YOUR_USERNAME/french-learning-app.git
git branch -M main
git push -u origin main
```

### 3️⃣ Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez **"New Project"**
4. Sélectionnez votre repository
5. Cliquez **"Deploy"**

### 4️⃣ Ajouter la base de données

1. Dans votre projet Vercel → **Storage**
2. **"Create Database"** → **Postgres**
3. Choisissez une région proche
4. Cliquez **"Create"**

### 5️⃣ Configurer les variables

Dans **Settings** → **Environment Variables**, ajoutez :

```
JWT_SECRET=votre_secret_jwt_production_2024
JWT_EXPIRES_IN=7d
```

### 6️⃣ Redéployer

1. **Deployments** → **...** → **Redeploy**
2. Attendez que le déploiement se termine

### 7️⃣ Initialiser la base de données

1. **Storage** → Votre Postgres → **Query**
2. Copiez le SQL depuis `DEPLOIEMENT-VERCEL.md` (Étape 6)
3. **Run Query**

### 8️⃣ Tester

```
https://votre-app.vercel.app/api/health
```

Devrait retourner : `{"status":"OK","message":"Server is running"}`

---

## 🎉 C'est tout !

Votre application est en ligne ! 

**Pour plus de détails**, consultez [DEPLOIEMENT-VERCEL.md](./DEPLOIEMENT-VERCEL.md)

---

## 🔄 Déploiements futurs

```powershell
git add .
git commit -m "Update feature"
git push
```

Vercel déploie automatiquement ! ✨
