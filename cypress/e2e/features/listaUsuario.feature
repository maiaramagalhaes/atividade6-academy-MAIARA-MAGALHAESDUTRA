 # language: pt
Funcionalidade: Lista de usuario

Contexto: Usuário deve ter acessado a funcionalidade de lista de usuario
  Dado que acessei a tela inicial


 Cenario: consulta de lista usuario, sem usuarios cadastrados, cadastrar novo usuario
     Quando nao possuo usuarios cadastrados 
     Entao deve ser possivel visualizar a mensagem Ops! Não existe nenhum usuário para ser exibido
     E a opcao cadastrar um novo usuario deve ser exibida
  

 Cenario: consulta de lista usuario, exibir paginacao mais de 20 usuarios
     Quando possuo 20 usuarios cadatrados
     E vejo o botao Proxima pagina habilitado
     E clico no botao proximo pagina
     Entao o botao pagina anterior deve estar habilitado
     E consigo clicar no botao pagina anterior

 Cenario: consulta de lista usuario, exibir paginacao mais de 6 usuarios
    Quando possuo 6 usuarios cadatrados
    Entao vejo o botao Proxima pagina habilitado
    E vejo o label de paginacao contendo duas paginas 

Cenario: consulta de lista usuario, exibir paginacao 5 usuarios
    Quando possuo 5 usuarios cadatrados
    Entao vejo os botoes de navegacao desabilitados
    
Cenario: consulta de lista usuario, sem usuarios cadastrados
    Quando nao possuo usuarios cadastrados 
    Entao os botoes de navegacao estao desabilitados
   
Cenario: consulta de lista usuario, exibir opcoes para exibir detalhes
    Quando possuo usuarios cadatrados
    Entao vejo o quadrado com informacoes do usuario
    E vejo o botao Ver Detalhes 
    

Cenario: consulta de lista usuario, exibir opcoes para excluir usuario
    Quando possuo usuarios cadatrados
    Entao vejo o quadrado com informacoes do usuario
    E vejo o botao deletar