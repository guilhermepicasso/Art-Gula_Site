# Projeto da aula de Desenv. WEB

Repositório destinado a construção do site para a aula de Desenvolvimento WEB do 4º semestre do curso de TADS.

## Aos desenvolvedores
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
### SOBRE O PROJETO
Bibliotecas e arquivos pesados como a pasta nodemon_modules devem ficar em um arquivo **.gitignore**, mas lembre-se, sempre que for clonar o repositório para uma máquina diferente, terá que importar novamente as bibliotecas e arquivos pois não ficam salvos no gitHub.