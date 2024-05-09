   #language: pt
Funcionalidade: Cadastro de usuario

Contexto: Usuário deve ter acessado a funcionalidade de cadastro
  Dado que acessei a funcionalidade de cadastro

Cenario: cadastro de usuario com sucesso
    Quando informo um novo nome
    E informo um novo email
    E confirmo a operacao
    Entao a mensagem Usuario salvo com sucesso! sera exibida
    Entao o usuario sera exibido na lista

Cenario: cadastro de usuario sem sucesso, sem informar um nome
     Quando nao informo um novo nome
     E informo um novo email
     E confirmo a operacao
     Entao a mensagem O campo nome é obrigatório devera ser exibida 
     E o usuario nao sera cadastrado

Cenario: cadastro de usuario sem sucesso, nome com menos de 3 caracteres
    Quando informo um novo nome com menos de 3 caracteres
    E informo um novo email
    Entao a mensagem Informe pelo menos 4 letras para o nome devera ser exibida
    E o usuario nao sera cadastrado  

Cenario: cadastro de usuario sem sucesso, nome com mais de 100 caracteres
    Quando informo um novo nome com mais de 100 caracteres
    E informo um novo email
    Entao a mensagem Informe no máximo 100 caracteres para o nome devera ser exibida
    
Cenario: cadastro de usuario sem sucesso, sem informar um email
     Quando informo um novo nome
     E nao informo um novo email
     E confirmo a operacao
     Entao a mensagem O campo e-mail é obrigatório devera ser exibida 
     

Cenario: cadastro de usuario sem sucesso, email formato invalido
     Quando informo um novo nome
     E informo um novo email com formato invalido
     E confirmo a operacao
     Entao a mensagem Formato de e-mail invalido devera ser exibida 
     

Cenario: cadastro de usuario sem sucesso, email com mais de 60 caracteres
     Quando informo um novo nome
     E informo um novo email com mais de 60 caracteres
     E confirmo a operacao
     Entao a mensagem Informe no máximo 60 caracteres para o e-mail devera ser exibida
     

Cenario: cadastro de usuario sem sucesso, email ja utilizado
     Quando informo um novo nome
     E informo um email ja cadastrado
     E confirmo a operacao
     Entao a mensagem Este e-mail já é utilizado por outro usuário devera ser exibida
         