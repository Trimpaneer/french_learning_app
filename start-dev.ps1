# Script PowerShell pour démarrer le backend et le frontend
# Utilisez: .\start-dev.ps1

Write-Host "🚀 Démarrage de l'environnement de développement..." -ForegroundColor Cyan

# Vérifier si le fichier .env existe dans server
if (-not (Test-Path "server\.env")) {
    Write-Host "⚠️  Le fichier server\.env n'existe pas. Création..." -ForegroundColor Yellow
    Set-Location server
    if (Test-Path "setup-env.ps1") {
        .\setup-env.ps1
    }
    Set-Location ..
}

# Démarrer le backend dans un nouveau terminal
Write-Host "📦 Démarrage du backend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm run dev"

# Attendre un peu pour que le backend démarre
Start-Sleep -Seconds 3

# Démarrer le frontend
Write-Host "🎨 Démarrage du frontend..." -ForegroundColor Green
npm run dev

