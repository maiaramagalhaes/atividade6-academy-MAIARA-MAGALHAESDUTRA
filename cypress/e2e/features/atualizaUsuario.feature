  #language: pt
 Funcionalidade: Atualiza usuario

   Contexto: Usuário deve ter acessado a funcionalidade de cadastro
     Dado que acessei a funcionalidade de atualizar usuario


Cenario: atualizar o usuario com sucesso, informando novo nome
    Quando informo o nome do usuario cadastrado
    E clico no botao ver detalhes 
    E clico no botao editar
    E digito o novo nome 
    E clico no botao salvar
    Entao o nome do usuario deve ser atualizado
    E a mensagem Informações atualizadas com sucesso! devera ser exibida

Cenario: atualizar o usuario com sucesso, informando novo email
    Quando informo o email do usuario cadastrado
    E clico no botao ver detalhes 
    E clico no botao editar
    E digito o novo email
    E clico no botao salvar
    Entao o email do usuario deve ser atualizado
    E a mensagem Informações atualizadas com sucesso! devera ser exibida   

Cenario: atualizar o usuario sem sucesso, informando nome com menos de 3 caracteres
    Quando informo o nome do usuario cadastrado
    E clico no botao ver detalhes 
    E clico no botao editar
    E atualizo o nome do usuario com um nome com menos de 3 caracters
    E clico no botao salvar
    Entao a mensagem  Informe pelo menos 4 letras para o nome devera ser exibida  
   

Cenario: atualizar o usuario sem sucesso, informando nome com mais de 100 caracteres
     Quando informo o nome do usuario cadastrado
     E clico no botao ver detalhes 
     E clico no botao editar
     E atualizo o nome do usuario com um nome com mais de 100 caracters
     E clico no botao salvar
     Entao a mensagem Informe no máximo 100 caracteres para o nome devera ser exibida  
 


 Cenario: atualizar o usuario sem sucesso, informando email com formato invalido
     Quando informo o email do usuario cadastrado
     E clico no botao ver detalhes 
     E clico no botao editar
     E atualizo o email do usuario com um email invalido
     E clico no botao salvar
     Entao a mensagem Formato de e-mail inválido devera ser exibida  


Cenario: atualizar o usuario sem sucesso, informando email ja utilizado
    Quando informo o email do usuario cadastrado
    E clico no botao ver detalhes 
    E clico no botao editar
    E atualizo o email do usuario com um email ja cadastrato
    E clico no botao salvar
    Entao a mensagem E-mail already in use devera ser exibida  

Cenario: atualizar o usuario sem sucesso, informando email com mais de 60 caracteres
    Quando informo o email do usuario cadastrado
    E clico no botao ver detalhes 
    E clico no botao editar
    E atualizo o email do usuario com um email com mais de 60 caracteres
    E clico no botao salvar
    Entao a mensagem Informe no máximo 60 caracteres para o e-mail devera ser exibida  
     

Cenario: atualizar o usuario sem sucesso, informando usuario nao cadastrado
    Quando informo o nome do usuario nao cadastrado
    Entao a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida
    
    



