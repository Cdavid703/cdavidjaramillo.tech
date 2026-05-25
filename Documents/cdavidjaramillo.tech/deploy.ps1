$npm    = "C:\Users\USER\AppData\Local\node-portable\npm.cmd"
$key    = "$env:USERPROFILE\.ssh\id_ed25519"
$vps    = "root@177.7.52.161"
$remote = "/var/www/cdavidjaramillo.tech"

Write-Host "`n[1/4] Building..." -ForegroundColor Cyan
& $npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed." -ForegroundColor Red; exit 1 }

Write-Host "`n[2/4] Pushing to GitHub..." -ForegroundColor Cyan
git push origin master
if ($LASTEXITCODE -ne 0) { Write-Host "Push failed." -ForegroundColor Red; exit 1 }

Write-Host "`n[3/4] Uploading to VPS..." -ForegroundColor Cyan
scp -i $key -r out/. "${vps}:${remote}/"
if ($LASTEXITCODE -ne 0) { Write-Host "SCP failed." -ForegroundColor Red; exit 1 }

Write-Host "`n[4/4] Fixing permissions..." -ForegroundColor Cyan
ssh -i $key $vps "chmod -R 755 $remote"

Write-Host "`nDone! Live at https://cdavidjaramillo.tech" -ForegroundColor Green
