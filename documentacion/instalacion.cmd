@echo off

cd ./datos-instalacion

docker compose up -d mysql

echo Espere por favor...
timeout 5 /nobreak

docker compose up -d