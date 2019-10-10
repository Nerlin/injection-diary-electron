@echo off
setlocal

call npm i electron-packager -D
copy "package.json" "./dist/"
cd ./dist/
call npx electron-packager . --icon=injection.ico --overwrite