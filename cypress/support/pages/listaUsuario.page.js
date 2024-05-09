import { faker, fakerPT_BR } from '@faker-js/faker';
export default class ListaUsuarioPagina{

    
  PaginaHome = '#root > div.sc-aXZVg.iYVcAu > div > a:nth-child(1)'
    
    linkNovo = '[href="/users/novo"]'
    
    campoPesquisarUsuario = 'input.sc-gsFSXq.mUpIH'
    listaUsuario = '#listaUsuarios' //'sc-bXCLTC.jykigL'//
    mensagemListaVazia ='#root > div.sc-jsJBEP.dwkAfe > div > div > h3'
    
    linkAnterior = '#paginacaoVoltar'
    linkProximo = '#paginacaoProximo'
    
    frameUsuario = '#userData'

    labelPaginacaoAtual = '#paginacaoAtual';

    botaoverdetalhes = '#userDataDetalhe';
    botaoDeletarUsuario =  '[data-test="userDataDelete"]';

    botaoConfirmarDelecao = '#root > div.sc-eBMEME.kIxLSF > div > div > div > button.sc-lcIPJg.eIYdvr';
    
    clicarPaginaHome(){
        cy.get(this.PaginaHome).click();
      }
    
    clicarLinkNovo(){
        cy.get(this.linkNovo).click();
      }
    
    buscaListaUsuario(){
      return cy.get(this.listaUsuario)
      }
    
    buscaListaVazia(){
      cy.intercept('GET', 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users', []).
      as('lista')
         }
    
    validarMensagemListaVazia(){
      cy.contains('Ops! Não existe nenhum usuário para ser exibido.').should('be.visible')
    }
    
    validarOpcaoCadastrarNovoUsuarioListaVazia(){
      cy.contains("Cadastre um novo usuário").should("be.visible");
    }

    validarLinksNavegacaoDesabilitados(){
      cy.get(this.linkAnterior).should('be.disabled');
      cy.get(this.linkProximo).should('be.disabled');
    }

    clicarAnterior(){
      cy.get(this.linkAnterior).click();
    }
    
    clicarProximo(){
      cy.get(this.linkProximo).click();
    }
    
    buscaBotaoVoltar(){
      return (cy.get(this.linkAnterior ))
    }
    
    digitarValorPesquisa(email) {
      cy.get(this.campoPesquisarUsuario).type(email);
    }
    
    criaListacom20Usuario(){
      cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        fixture: 'listaComTresPaginas.json',
      }).as('getUsers');
    }

    validarBotaoAnteriorHabilitado(){
      cy.get(this.linkAnterior).should('be.enabled');
    }
     
    validarBotaoProximoDesabiliatado(){
      cy.get(this.linkProximo).should('not.exist');
    }

    validarBotaoAnteriorDesabiliatado(){
      cy.get(this.linkAnterior).should('not.exist');
    }

    validarBotaoProximoHabilitado(){
      cy.get(this.linkProximo).should('be.enabled');
    }

    criaListacom6Usuarios(){
      cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        fixture: 'listaComSeteUsuarios.json',
      }).as('getUsers');
    }
    
    validaPaginacaoLista6Usuarios(){
      cy.get(this.labelPaginacaoAtual)
      .contains('1 de 2')
      .and('be.visible');
    }

    criaListacom5Usuarios(){
      cy.intercept('GET', '/api/v1/users', {
        statusCode: 200,
        fixture: 'listaUsuario.json',
      }).as('getUsers');

    }
    validarlinksnavegacao5Usuarios(){
      cy.wait('@getUsers');
      cy.get(this.linkProximo)
        .should('be.disabled')
        .and('be.visible');
      cy.get(this.linkAnterior)
        .should('be.disabled')
        .and('be.visible');
      cy.get(this.labelPaginacaoAtual)
        .contains('1 de 1')
        .and('be.visible');
    }

  criarUsuario(){
    cy.request(
      'POST',
      'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
      }
  )};  

  verificarFrameUsuario(){
    cy.get(this.frameUsuario).should('be.visible');
}
verificarBotaoVerDetalhes(){
  cy.get(this.botaoverdetalhes).should('be.visible');
}
verificarbotaoDeletarUsuario(){
  cy.get(this.botaoDeletarUsuario).should('be.visible');
}
deletarUsuario(){
  cy.get(this.botaoDeletarUsuario).click();
  cy.get(this.botaoConfirmarDelecao).click();
  cy.on('window:alert', mensagem =>{
    expect(mensagem).to.equal('Usuário removido!')
}) 
}
}