# Verify login of user Use Case

## Dados
* email 
* password

## Fluxo primário
1. Obtendo os dados do usário para efutar o login, retornando como resposta um objeto contendo as propriedades message: 'Login successfully' status: true code: 2000, userId: 1

## Fluxo alternativo: login e senha incorretas
1. Retornar um objeto message: 'Incorrect login and password' status: false code: 4040

## Fluxo alternativo: senha ou email em formatos invalidos
1. se o email estiver no formato invalid retorna um objeto message: 'Incorrect email' status: false code: 4044
2. se a senha estiver no formato invalid retorna um objeto message: 'Incorrect password' status: false code: 4045