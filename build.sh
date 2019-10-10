npm i electron-packager -D
cp package.json ./dist/
cd ./dist/
npx electron-packager . --icon=injection.ico --overwrite