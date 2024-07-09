# ../script-limpa.sh

echo "Parando o container"
docker stop app_frontend

echo "Excluindo o container"
docker rm -f app_frontend

echo "Excluindo a imagem do container"
docker rmi image-app-frontend:latest

echo "Listando todos as imagens"
docker images

echo "Listando todos os containers"
docker ps -a

echo "Limpeza Concluída !!!"

# echo "Buildando... ..."
# npm run build

echo "Iniciando o Docker Compose"
docker-compose up -d --build
