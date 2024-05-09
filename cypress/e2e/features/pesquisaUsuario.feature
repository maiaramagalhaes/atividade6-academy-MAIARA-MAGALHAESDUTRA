# language: pt
Funcionalidade: Pesquisa de usuario

Contexto: Usuário deve ter acessado a funcionalidade de pesquisa
  Dado que acessei a funcionalidade de pesquisa de usuario

 Cenario: pesquisa de usuario com sucesso, informando nome
    Quando informo um nome do usuario cadastrado
    Entao as informacoes do usuario sao exibidas na lista

Cenario: pesquisa de usuario com sucesso, informando email
    Quando informo um email do usuario cadastrado
    Entao as informacoes do usuario sao exibidas na lista    

Cenario: pesquisa de usuario sem sucesso, sem informar o nome
    Quando nao informo o nome do usuario cadastrado
    Entao a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida
      

Cenario: pesquisa de usuario sem sucesso, sem informar email
    Quando nao informo o email do usuario cadastrado
    Entao a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida     

Cenario: pesquisa de usuario sem sucesso, usuario nao localizado
    Quando informo o nome do usuario nao localizado
    Entao  a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida.

Cenario: pesquisa de usuario por email sem sucesso, usuario nao localizado
    Quando informo o email do usuario nao localizado
    Entao a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida. 