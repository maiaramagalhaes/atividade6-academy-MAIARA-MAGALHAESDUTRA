export default class AtualizaUsuarioPage{
    linkVoltar = '[href="/users"]';
    linkPaginaHome = '[href="/"]';

    campoPesquisarUsuario = 'input.sc-gsFSXq.mUpIH'
    botaoLimparPesquisa = 'svg.sc-KAyceB.cFrQvb.path#root > div.sc-aXZVg.iYVcAu > div > div > div:nth-child(3) > svg > path'
    botaoProximaPagina = '#paginacaoProximo'
    botaoPaginaAnterior = '#paginacaoVoltar'
   
  
    textoNomeUsuario = '#userData > div.sc-dAbbOL.lcgSvJ > p:nth-child(1)'
    textoEmailUsuario = '#userData > div.sc-dAbbOL.lcgSvJ > p:nth-child(2)'

    mensagemUsuarioInvalido ='#root > div.sc-jsJBEP.dwkAfe > div > div > h3'
    linkCadatroNovoUsuario = '#root > div.sc-jsJBEP.dwkAfe > div > div > a > p'

    botaoCancelarMensagemAlerta = 'button.sc-lcIPJg.ifkIA-D'
    botaoConfirmarMensagemAlerta = 'button.sc-lcIPJg.eIYdvr'
    
    

    botaoExcluirUsuario = 'userDataDelete'
    botaoVerDetalhes = '.sc-hzhJZQ.cShbuI'
    botaoEditarCancelarUsuario = '#root > div.sc-eldPxv.gkYUqH > div > form > div.sc-dhKdcB.lmheQr > button:nth-child(1) > div' 
    botaoSalvarUsuario = '#root > div.sc-eldPxv.gkYUqH > div > form > div.sc-dhKdcB.lmheQr > button:nth-child(2) > div'
    idUsuario = '.sc-dLMFU.Mcjyi' 

    nomeAtualizado = '#userName'
    emailAtualizado = '#userEmail'


digitarValorPesquisa(texto) {
        cy.get(this.campoPesquisarUsuario).type(texto);
      }
    
limparValorPesquisa() {
        cy.get(this.botaoLimparPesquisa).click();
      } 

visualizarDetalhesUsuario(){
        //cy.get(this.quadradoUsuario).click();
        cy.get(this.botaoVerDetalhes).click();
      }      

compararEmailUsuario(email) {
      
        cy.get(this.textoEmailUsuario).invoke('text').should('contain', email)  
      
    }
comparaMensagemUsurioInvalido(){
      cy.get(this.mensagemUsuarioInvalido).invoke('text').should('equal', 'Ops! Não existe nenhum usuário para ser exibido.');  
    } 
comparaLinkCadastrarNovoUSuario(){
      cy.get(this.linkCadatroNovoUsuario).invoke('text').should('equal', 'Cadastre um novo usuário');
     }

excluirUsuario(){
    cy.get(this.botaoExcluirUsuario).click();    
}     

clicarBotaoEditarCancelar(){
    cy.get(this.botaoEditarCancelarUsuario).click();
}      

clicarBotaoSalvarUsuario(){
    cy.get(this.botaoSalvarUsuario).click();
}  

mensagemUsuarioAtualizado() {
    //cy.contains("informações atualizadas com sucesso!").should("be.visible");  
    cy.on('window:alert', mensagem =>{
        expect(mensagem).to.equal('informações atualizadas com sucesso')
    }) 
 }   

 digitarNovoNome(nome){
    cy.get(this.nomeAtualizado).clear();
    cy.get(this.nomeAtualizado).type(nome)
 }

 digitarNovoEmail(email){
    cy.get(this.emailAtualizado).clear();
    cy.get(this.emailAtualizado).type(email)
 }
}