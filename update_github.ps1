Write-Host "Updating GitHub repository..." -ForegroundColor Green

# Check if git is available
try {
    git --version | Out-Null
    Write-Host "Git is available" -ForegroundColor Green
} catch {
    Write-Host "Git is not available or not in PATH" -ForegroundColor Red
    exit 1
}

# Add all changes
Write-Host "Adding changes..." -ForegroundColor Yellow
git add .

# Check status
Write-Host "Checking status..." -ForegroundColor Yellow
git status

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Update project: Restore configuration files and enhance WPC decking page"

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "Update complete!" -ForegroundColor Green
