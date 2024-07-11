# ../script-deploy.sh

# Abort on errors
set -e

# Função para obter o timestamp formatado
get_timestamp() {
    echo "$(date +'%H:%M')"
}

echo "Apaga a branch remota gh-pages"
#git push origin --delete gh-pages

echo "Excluindo a pasta dist local"
rm -rf dist

echo "Apaga a pasta dist remota do repositorio"
#git rm -r dist

echo "Limpa o cache do git"
git gc --prune=now
git remote prune origin

echo "Criar a pasta dist local"
npm run build

echo "Cria a nova pasta dist remota no repositorio"
git add .
git commit -m "Nova pasta dist $(get_timestamp())"

echo "Aguardando 500 segundos..."
sleep 500

echo "Copia o conteudo da pasta dist para a branch gh-pages"
git subtree push --prefix dist origin gh-pages

