# Angular
Estudo realizados de Angular

## Iniciando com Angluar

Instalando o Angular globalmente na máquina (versão 10.1.6, é a versão utilizada nas aulas), e para este primeiro projeto.
```
npm install -g @angular/cli@10.1.6
```

Criando o Projeto (primeiro projeto: bytebank)
```
ng new nome-do-projeto
```

Entrando dentro da pasta
```
cd nome-do-projeto
```

Iniciando o app
```
ng serve
```

```
ng serve --open
```

## Modo de Produção

Instalar o http-server globalmente
```
npm i -g http-server
```

Criar o modo de produção.

Esse comando cria a pasta '**dist**' e nela existem duas novas versões bem otimizadas sendo uma para navegadores mais atuais e outra para navegadores antigos.
```
ng build --prod
```


Para abrir o modo em produção, entrar dentro da pasta do arquivo que está na pasta **dist** e utilizar o comando:
```
http-server
```