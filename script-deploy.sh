#!/bin/bash

# Abort on errors
set -e

# Função para obter o timestamp formatado
get_timestamp() {
    date +'%H:%M'
}

echo "Excluindo a pasta dist local"
if [ -d dist ]; then
    rm -rf dist
fi

echo "Verifica se a branch gh-pages existe"
if git rev-parse --verify gh-pages >/dev/null 2>&1; then
    echo "Apagando branch..."
    git push origin --delete gh-pages || true
    echo "Branch apagada!"
fi

echo "Limpa o cache do git"
git gc --prune=now
git remote prune origin

echo "Criar a pasta dist local"
npm run build

echo "Adiciona e faz commit da nova pasta dist remota no repositorio"
git add .
TIMESTAMP=$(get_timestamp)
git commit -m "Nova pasta dist $TIMESTAMP"
git push origin main

echo "Aguardando 500 segundos..."
sleep 500

echo "Copia o conteudo da pasta dist para a branch gh-pages"
git subtree push --prefix dist origin gh-pages
