# Site Art&Gula

## Descrição
**Art&Gula** é um site desenvolvido para uma aconchegante doceria e cafeteria localizada no charmoso bairro de Moema, em São Paulo. A Art&Gula é especializada em bolos, docinhos, salgados, doces personalizados e tematizados. O site funciona como uma vitrine online, além de oferecer uma tela de login funcional e uma área de administração para gerenciar o conteúdo.

## Funcionalidades
- **Landing Page:**
  - Exibição de produtos e serviços oferecidos pela Art&Gula.
  - Galeria de imagens do estabelecimento e dos produtos.
  - Informações de contato e localização.

- **Tela de Login:**
  - Autenticação de usuários.

- **Área de Administração:**
  - Acesso restrito apenas para administradores.
  - Gerenciamento de cardápios, produtos, eventos e imagens do estabelecimento.
  - Criação, leitura, atualização e exclusão (CRUD) de cardápios,produtos,imagens e eventos.

## Tecnologias Utilizadas
- **Frontend:**
  - **React.js:** Biblioteca JavaScript para construção da interface do usuário.
  - **Javascript:** Principal linguagem do projeto.
  - **HTML/SASS:** Documentação base das paginas e estilização.
  - **Axios:** Biblioteca para realizar requisições HTTP.

- **Backend:**
  - **Node.js:** Ambiente de execução para JavaScript no servidor.
  - **Express.js:** Framework para Node.js.
  - **MySQL:** Banco de dados relacional.
  - **Multer** Ferramenta para criação de pastas Storage e armazenamento de imagem.

# Aos desenvolvedores
Quando fazer o clone deste repositório crie uma branch para realizar seus trabalhos e faça as alterações nela. Para isso siga as instruções:

```
git checkout -b Nome_da_Branch
```
Você já estará na branch que criou e pode realizar as alterações que deseja.

Quando terminar poderá subir suas alterações para o gitHub com os seguintes comandos:

```
git add .
git commit -m "Frase que deseja salvar o commit"
git push origin Nome_da_Branch
```
Depois envie suas alterações para a branch main
- Volte para a branch main
```
git checkout main
```
- Envie suas alterações
```
git merge nome-da-sua-branch
```
- Por fim salve no repositório do gitHub
```
git add .
git commit -m "Frase que deseja salvar o commit"
git push
```

**Você também pode fazer isso diretamente pelo gitHub através de um PullRequest
### IMPORTANTE
Sempre que for iniciar um trabalho na sua branch garanta que ela esteja atualizada usando o mesmo comando de merge mas agora puchando as alterações da main para sua branch

- Antes de trazer as alterações da branch principal para a sua branch de desenvolvimento, é uma boa prática garantir que você tenha as últimas alterações da branch principal.
```
git checkout main
git pull origin main
```
- Depois vá para sua branch
```
git checkout Nome_da_Branch
```
- Busque novas alterações
```
git merge nain
```
Bibliotecas e arquivos pesados como a pasta nodemon_modules devem ficar em um arquivo **.gitignore**, mas lembre-se, sempre que for clonar o repositório para uma máquina diferente, terá que importar novamente as bibliotecas e arquivos pois não ficam salvos no gitHub.
