import {
    Given,
    When,
    Then, 
    Before,
    After,
} from 'cypress-cucumber-preprocessor/steps';

import { faker, fakerPT_BR } from '@faker-js/faker';
import ListaUsuarioPagina  from '../pages/listaUsuario.page';
import PesquisaUsuarioPagina from '../pages/pesquisaUsuario.page'

const listaUsuarioPage = new ListaUsuarioPagina();
const pesquisaUsuarioPage = new PesquisaUsuarioPagina();

Given('que acessei a tela inicial', function () {
    cy.visit('/');
   
});

When('nao possuo usuarios cadastrados', function(){
    listaUsuarioPage.buscaListaVazia();
});
Then('deve ser possivel visualizar a mensagem Ops! Não existe nenhum usuário para ser exibido', function(){
    listaUsuarioPage.validarMensagemListaVazia();
});
Then('a opcao cadastrar um novo usuario deve ser exibida', function(){
    listaUsuarioPage.validarOpcaoCadastrarNovoUsuarioListaVazia();
});



When('possuo 20 usuarios cadatrados', function(){
    listaUsuarioPage.criaListacom20Usuario();
});
When('vejo o botao Proxima pagina habilitado', function (){

    listaUsuarioPage.validarBotaoProximoHabilitado();

});
When('clico no botao proximo pagina', function (){
    listaUsuarioPage.clicarProximo();
});

Then('o botao pagina anterior deve estar habilitado', function (){
    listaUsuarioPage.validarBotaoAnteriorHabilitado();
});
Then('consigo clicar no botao pagina anterior', function (){
    listaUsuarioPage.clicarAnterior();
});



When('possuo 6 usuarios cadatrados', function(){
    listaUsuarioPage.criaListacom6Usuarios();
});
Then('vejo o botao Proxima pagina habilitado', function (){
    listaUsuarioPage.validarBotaoProximoHabilitado();

});
Then('clico no botao proximo pagina', function (){
    listaUsuarioPage.clicarProximo();
});
Then('vejo o label de paginacao contendo duas paginas', function (){
    listaUsuarioPage.validaPaginacaoLista6Usuarios();
});

When('possuo 5 usuarios cadatrados', function(){
    listaUsuarioPage.criaListacom5Usuarios();
});
Then('vejo os botoes de navegacao desabilitados', function (){
    listaUsuarioPage.validarlinksnavegacao5Usuarios();

});

When('nao possuo usuarios cadastrados', function(){
    listaUsuarioPage.buscaListaVazia();
});
Then('os botoes de navegacao estao desabilitados', function(){
    listaUsuarioPage.validarBotaoProximoDesabiliatado();
    listaUsuarioPage.validarBotaoAnteriorDesabiliatado();
});

When('possuo usuarios cadatrados', function(){
   listaUsuarioPage.criarUsuario();
});
Then('vejo o quadrado com informacoes do usuario', function (){
   listaUsuarioPage.verificarFrameUsuario(); 
});
Then('vejo o botao Ver Detalhes', function(){
    listaUsuarioPage.verificarBotaoVerDetalhes();
});

When('possuo usuarios cadatrados', function(){
    listaUsuarioPage.criarUsuario();
 });
 Then('vejo o quadrado com informacoes do usuario', function (){
    listaUsuarioPage.verificarFrameUsuario(); 
 });
 Then('vejo o botao deletar', function(){
     listaUsuarioPage.verificarbotaoDeletarUsuario();
 });
 