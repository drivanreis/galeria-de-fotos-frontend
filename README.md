Projeto: Galeria de Fotos Fullstack
Objetivo
O objetivo deste projeto é revisar e consolidar tudo o que aprendi na Trybe, além de explorar novos recursos e tecnologias.

Estrutura do Projeto
Para manter um fluxo de desenvolvimento saudável e organizado, o projeto foi dividido em dois repositórios:

Galeria de Fotos Frontend: Desenvolvido em React + Vite com TypeScript.
Galeria de Fotos Backend: Implementado com Node.js e Python.
Este repositório que você está visualizando agora é o Galeria de Fotos Frontend.

Desafios e Soluções
Implementação Local
Inicialmente, o desenvolvimento local foi simples, sem a necessidade de um backend robusto. Os arquivos eram gravados diretamente na raiz do projeto. Porém, ao avançar para a fase de contenização, surgiu um problema: o container crescia à medida que mais uploads eram feitos, o que não é ideal.

Tentativa de Contenização
Minha primeira abordagem para resolver isso foi dividir a aplicação em dois containers: um para o frontend e outro para armazenamento (storage). A ideia era utilizar uma imagem simples do Linux para o container de storage, permitindo o compartilhamento de uma pasta na rede, enquanto o container do frontend acessaria essa pasta como uma unidade de armazenamento. No entanto, mesmo após configurar Dockerfile, docker-compose e scripts pós-execução, não consegui fazer essa solução funcionar corretamente.

Solução Alternativa
Diante das dificuldades, decidi pular a fase de contenização (Etapa "B") e avançar diretamente para a implementação na nuvem (Etapa "C"). Graças a uma boa estruturação do projeto, foi fácil adaptar o código para o ambiente de nuvem, permitindo que a aplicação frontend fosse hospedada no GitHub Pages.

Aprendizados
Durante o desenvolvimento, aprendi e pratiquei várias tecnologias e conceitos, incluindo:

Utilização da biblioteca Axios para comunicação com o backend.
Implementação de HOFs (High-Order Functions) e hooks em React.
Conclusão
Embora tenha encontrado obstáculos ao longo do caminho, o projeto foi uma excelente oportunidade para consolidar conhecimentos e explorar novas tecnologias. Continuarei buscando soluções para tornar a aplicação completa e gratuita para os usuários.