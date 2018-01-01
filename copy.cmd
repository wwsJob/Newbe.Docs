cd %~dp0
%~d0
powershell -File .\copy.ps1

cd ../newbepro

echo sea

git commit --no-edit -a -m AutoCommitMessage

git push

echo qiniu

cd ../Newbe.Docs

start ../QSunSync-v2.1.0-x64/QSunSync.exe

pause
