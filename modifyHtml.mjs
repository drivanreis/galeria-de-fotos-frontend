import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtém o diretório do módulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'dist', 'index.html');

// Lê o conteúdo do arquivo HTML
fs.readFile(filePath, 'utf8')
  .then(data => {
    // Substitui o idioma na tag <html>
    const modifiedHtml = data.replace(/<html>/, '<html lang="pt-br">');
    
    // Salva o arquivo HTML modificado
    return fs.writeFile(filePath, modifiedHtml, 'utf8');
  })
  .then(() => console.log('HTML modificado com sucesso!'))
  .catch(err => console.error('Erro ao modificar o HTML:', err));
