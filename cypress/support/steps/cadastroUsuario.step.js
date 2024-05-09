import {
    Given,
    When,
    Then,
    Before,
    After,
} from 'cypress-cucumber-preprocessor/steps';

import { faker } from '@faker-js/faker';
import CadastroPaginaUsuario  from '../pages/cadastroUsuario.page';
import ListaUsuarioPagina  from '../pages/listaUsuario.page';

const paginaCadastroUsuario = new CadastroPaginaUsuario();
const paginaListaUsuario  = new ListaUsuarioPagina();


Given('que acessei a funcionalidade de cadastro', function () {
    cy.visit('/users/novo');
   
});

 When('informo um novo nome', function () {
    var nome = faker.person.fullName();
    paginaCadastroUsuario.digitarNome(nome)


});
When('informo um novo email', function () {
    var email = faker.internet.email().toLowerCase();
    cy.wrap(email).as('emailFaker');
    paginaCadastroUsuario.digitarEmail(email)
});
When('confirmo a operacao', function () {
    //cy.intercept('POST', 'api/v1/users').as('postUsuario');
    paginaCadastroUsuario.clicarBotaoCadastrar();
});
Then('a mensagem Usuario salvo com sucesso! sera exibida', function () {
    paginaCadastroUsuario.mensagemUsuarioSalvo();
});

 Then('o usuario sera exibido na lista', function (){
    paginaCadastroUsuario.clicarLinkVoltar();
        cy.get('@emailFaker').then((email) => {
         paginaListaUsuario.digitarValorPesquisa(email);
         var emailslice = email.slice(0, 21)
         paginaListaUsuario.buscaListaUsuario().should('contain', emailslice);   
         paginaListaUsuario.deletarUsuario();          
        });  
 
 });

When('nao informo um novo nome', function (){
   });

Then('a mensagem O campo nome é obrigatório devera ser exibida', function(){
    paginaCadastroUsuario.validarmensagemNomeObrigatorio();
});
Then ('o usuario nao sera cadastrado', function(){
});

When('informo um novo nome com menos de 3 caracteres', function (){
    paginaCadastroUsuario.digitarNome('Mai')
});

Then('a mensagem Informe pelo menos 4 letras para o nome devera ser exibida', function(){
    paginaCadastroUsuario.validarmensagemNomeCompleto();
});

When('informo um novo nome com mais de 100 caracteres', function(){
    paginaCadastroUsuario.digitarNome('Joaquim Jose da Silva Xavirer Costa Brandao Bueno Cavalcante Teixeira Santos Sobrinho Dantes Costa Neto')
    });
Then('a mensagem Informe no máximo 100 caracteres para o nome devera ser exibida', function(){
    paginaCadastroUsuario.validarmensagemNomeMais100Caracteres();
});

When('nao informo um novo email', function () {
});
Then('a mensagem O campo e-mail é obrigatório devera ser exibida', function(){
    paginaCadastroUsuario.validarmensagemEmailObrigatorio();
});

When('informo um novo email com formato invalido', function () {
    paginaCadastroUsuario.digitarEmail('teste@testcom')
});
Then('a mensagem Formato de e-mail invalido devera ser exibida', function(){
    paginaCadastroUsuario.validarmensagemEmailInvalido();
});

When('informo um novo email com mais de 60 caracteres', function () {
    paginaCadastroUsuario.digitarEmail('emailcommaisde60caracteresmdmdmdmdmdmdmdmdmdmdmdmd@raro.com.br')
});
Then('a mensagem Informe no máximo 60 caracteres para o e-mail devera ser exibida', function(){
    paginaCadastroUsuario.validarmensagemEmailMais60Caracteres();
});

When('informo um email ja cadastrado', function () {
     
    cy.intercept('POST','rarocrud-80bf38b38f1f.herokuapp.com/api/v1',{
        statusCode:422,
        failOnStatusCode: false
      }).as('postError')

      var nome3 = faker.person.fullName();
      var email3 = 'maiara2@raro.com.br';
    
    cy.visit('users/novo')
      paginaCadastroUsuario.cadastrar(nome3,email3); 
      paginaCadastroUsuario.clicarbotaoCancelarMensagemAlerta()
           
    }) 

Then('a mensagem Este e-mail já é utilizado por outro usuário devera ser exibida', function(){
    paginaCadastroUsuario.validarmensagemEmailJaExistente();
    paginaCadastroUsuario.clicarbotaoCancelarMensagemAlerta(); 
});


