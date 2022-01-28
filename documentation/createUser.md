# Create a User

# Dados
email
password
name
last name

## Fluxo Primario
1. Quando o usuario informar os seus dados, salvar no banco de dados e retornar um objeto: mensage: Create user with success statusCode: 201 

## Fluxo alternatio: Dados invalidos
1. se o email for de uma formato invalid e o tamanho dele tambem for maior que 255 retornar email invalido
2. se o password for de um tamanho maior que 30 e menor que 8 retorna que é um password invalido
3. o nome so pode conter letras.