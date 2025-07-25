#!/bin/bash

# Abort on errors
set -e

# Função para obter o timestamp formatado
get_timestamp() {
    date +'%H:%M'
}

echo "🧹 Excluindo a pasta dist local..."
if [ -d dist ]; then
    rm -rf dist
fi

echo "🔍 Verificando se a branch gh-pages existe remotamente..."
if git ls-remote --exit-code --heads origin gh-pages >/dev/null 2>&1; then
    echo "🚮 Apagando branch remota gh-pages..."
    git push origin --delete gh-pages || true
    echo "✅ Branch gh-pages apagada!"
fi

sleep 5

echo "🧽 Limpando o cache do Git..."
git gc --prune=now
git remote prune origin

echo "⚙️  Criando nova build na pasta dist..."
npm run build

echo "💾 Commitando alterações no branch main..."
git add .
TIMESTAMP=$(get_timestamp)
git commit -m "Nova pasta dist $TIMESTAMP"
git push origin main

echo "⏳ Aguardando 10 segundos para garantir atualização do GitHub..."
sleep 10

echo "🚀 Enviando conteúdo da pasta dist para a branch gh-pages (forçado)..."
git push origin $(git subtree split --prefix dist main):gh-pages --force

echo "⏳ Aguardando 15 segundos para publicação no GitHub Pages..."
sleep 15

echo "✅ Deploy finalizado com sucesso!"
echo "🌐 Acesse em: https://drivanreis.github.io/galeria-de-fotos-frontend/"
