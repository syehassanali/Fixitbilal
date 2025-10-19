@echo off
echo Updating GitHub repository...
git add .
git status
git commit -m "Update project: Restore configuration files and enhance WPC decking page"
git push origin main
echo Update complete!
pause
