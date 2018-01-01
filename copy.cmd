cd %~dp0
%~d0
powershell -File .\copy.ps1

cd ../newbepro

echo sea

git add -A
git commit -a -m AutoCommitMessage

git push

echo qiniu

cd ../Newbe.Docs

start ../QSunSync-v2.1.0-x64/QSunSync.exe

pause
