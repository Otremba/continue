Esse desenvolvimento salvará vidas.

1- Cadastro de psicológos
2- Cadastro de dependentes
3- Home com localização de clínicas que oferecem tratamentos de graça ou com valor baixo
4- Notificações diárias com mensagens motivadoras
5- Área motivem alguem (Publicações de usuários)


# Cont;nue

Aplicativo para Android e iOS utilizando o framework React-Native.

## Instalando dependências

Tendo o projeto na sua máquina e o ambiente configurado, você deve instalar as dependências do projeto.
A essa altura, consideramos que você tenha o **Node** instalado. O Node já vem com o NPM, que permitirá
que você rode o comando para instalar todas as dependências do projeto. O comando abaixo deve ser executado
em um terminal aberto dentro da pasta do projeto:

```
npm install
```

## Rodando o aplicativo

Após instalar o aplicativo, você deverá iniciar o servidor local, que irá transpilar o JavaScript para
código nativo enquanto você desenvolve. Utilize o comando abaixo para isso:

```
npm start
```

Obs. No MacOS não é necessário rodar esse comando manualmente. Sempre que o app é instalado, um novo
terminal é aberto executando automaticamente o npm start.

## Instalando o aplicativo

Após instalar as dependências, você deve reinstalar (ou instalar) o aplicativo no seu emulador ou device
real. Utilize um dos comandos abaixo para isso, de acordo com o SO do celular alvo. O comando deve ser
executado em um terminal aberto dentro da pasta do projeto:

```
react-native run-android
```

ou

```
react-native run-ios
```

Obs. Sempre que instalar uma dependência nova, reinstale o aplicativo.

## Versionamento

O **versionamento do aplicativo** é um **nome** dado para a versão da loja. Este **nome** é formado por
3 números separados por pontos. Vamos utilizar o número abaixo como exemplo:

```
1.0.2
```

Nesse projeto, esses números tem o seguinte significado:

O **primeiro número** _(1)_ é chamado de **MAJOR**, e só deve ser incrementado quando uma mudança muito
grande, (que impacta o jeito do usuário utilizar o aplicativo) acontecer. Quando este número é incrementado,
todos os outros devem ser **zerados**.

O **segundo número** _(0)_ é chamado de **MINOR**. Este deve ser incrementado quando uma nova implementação
for realizada. Quando este número é incrementado, o número **PATCH** (a seguir) deve ser **zerado**.

O **terceiro número** _(2)_ é chamado de **PATCH**. Este deve ser incrementado sempre que houver correção
de bugs ou incrementos em implementações anteriores.

Atualmente este versionamento está sendo feito manualmente por julgamento do desenvolvedor. Para alterar
a versão, basta ir até o arquivo **package.json** e alterar o atributo **version**, como no exemplo
a seguir:

```
{
  "name": "continue_app",
  "version": "1.2.0",
  "private": true,
  "scripts": {
    ...
  },
  "dependencies": {
    ...
  }
```

Isso automaticamente mudará a versão no rodapé do aplicativo e na loja.

## Construído com

- [React-Native](http://facebook.github.io/react-native/) - Framework utilizado como base da aplicação.
