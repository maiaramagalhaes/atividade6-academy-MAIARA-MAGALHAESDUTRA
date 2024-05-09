import {
    Given,
    When,
    Then, 
    Before,
    After,
} from 'cypress-cucumber-preprocessor/steps';

import { faker, fakerPT_BR } from '@faker-js/faker';
import AtualizaUsuarioPagina  from '../pages/atualizaUsuario.page';
import CadastroPaginaUsuario  from '../pages/cadastroUsuario.page';
import ListaUsuarioPagina  from '../pages/listaUsuario.page';
import PesquisaUsuarioPagina  from '../pages/pesquisaUsuario.page';

const atualizaUsuarioPagina = new AtualizaUsuarioPagina();
const paginaCadastroUsuario = new CadastroPaginaUsuario();
const paginaListaUsuario  = new ListaUsuarioPagina();
const pesquisaUsuario = new PesquisaUsuarioPagina();

const nome = fakerPT_BR.person.fullName();
const email = faker.internet.email().toLowerCase();

Given('que acessei a funcionalidade de atualizar usuario', function () {
    cy.visit('/users/novo');
    
    cy.wrap(nome).as('nomeFaker');
    cy.wrap(email).as('emailFaker');

    paginaCadastroUsuario.cadastrar(nome, email);

    cy.wait(5000);
    cy.visit('/');
});
When('informo o nome do usuario cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa(nome);
});

When('clico no botao ver detalhes', function (){
     atualizaUsuarioPagina.visualizarDetalhesUsuario();
});
When('clico no botao editar', function (){
    atualizaUsuarioPagina.clicarBotaoEditarCancelar();
});
When('digito o novo nome', function (){
    atualizaUsuarioPagina.digitarNovoNome('Nome atualizado'); 
});

When('clico no botao salvar', function (){
    atualizaUsuarioPagina.clicarBotaoSalvarUsuario(); 
});
Then('o nome do usuario deve ser atualizado', function (){
});
When('a mensagem Informações atualizadas com sucesso! devera ser exibida', function(){
    atualizaUsuarioPagina.mensagemUsuarioAtualizado();
});

When('informo o email do usuario cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa(email);
});
When('clico no botao ver detalhes', function (){
    atualizaUsuarioPagina.visualizarDetalhesUsuario();
});
When('clico no botao editar', function (){
   atualizaUsuarioPagina.clicarBotaoEditarCancelar();
});
When('digito o novo email', function (){
    atualizaUsuarioPagina.digitarNovoEmail('marcuslucindro@email.com.br');
});  
When('clico no botao salvar', function (){
   atualizaUsuarioPagina.clicarBotaoSalvarUsuario(); 
});
Then('o email do usuario deve ser atualizado', function (){
});
When('a mensagem Informações atualizadas com sucesso! devera ser exibida', function(){
    atualizaUsuarioPagina.mensagemUsuarioAtualizado();
});

When('informo o nome do usuario cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa(nome);
});
When('clico no botao ver detalhes', function (){
    atualizaUsuarioPagina.visualizarDetalhesUsuario();
});
When('clico no botao editar', function (){
   atualizaUsuarioPagina.clicarBotaoEditarCancelar();
});
When('atualizo o nome do usuario com um nome com menos de 3 caracters',function(){
    atualizaUsuarioPagina.digitarNovoNome('Mia');
});

When('clico no botao salvar', function (){
   atualizaUsuarioPagina.clicarBotaoSalvarUsuario(); 
});
Then('a mensagem  Informe pelo menos 4 letras para o nome devera ser exibida', function (){
    paginaCadastroUsuario.validarmensagemNomeCompleto(); 
});


When('informo o email do usuario cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa(email);
});
When('clico no botao ver detalhes', function (){
    atualizaUsuarioPagina.visualizarDetalhesUsuario();
});
When('clico no botao editar', function (){
   atualizaUsuarioPagina.clicarBotaoEditarCancelar();
});
When('atualizo o nome do usuario com um nome com mais de 100 caracters',function(){
    atualizaUsuarioPagina.digitarNovoNome('Joaquim Jose da Silva Xavirer Costa Brandao Bueno Cavalcante Teixeira Santos Sobrinho Dantes Costa Neto');
});

When('clico no botao salvar', function (){
   atualizaUsuarioPagina.clicarBotaoSalvarUsuario(); 
});
Then('a mensagem Informe no máximo 100 caracteres para o nome devera ser exibida', function (){
    paginaCadastroUsuario.validarmensagemNomeMais100Caracteres();
});



When('informo o email do usuario cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa(email);
});
When('clico no botao ver detalhes', function (){
    atualizaUsuarioPagina.visualizarDetalhesUsuario();
});
When('clico no botao editar', function (){
   atualizaUsuarioPagina.clicarBotaoEditarCancelar();
});
When('atualizo o email do usuario com um email invalido',function(){
    atualizaUsuarioPagina.digitarNovoEmail('email@yahoocom');
});

When('clico no botao salvar', function (){
   atualizaUsuarioPagina.clicarBotaoSalvarUsuario(); 
});
Then('a mensagem Formato de e-mail inválido devera ser exibida', function (){
    paginaCadastroUsuario.validarmensagemEmailInvalido();
});



When('informo o email do usuario cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa(email);
});
When('clico no botao ver detalhes', function (){
    atualizaUsuarioPagina.visualizarDetalhesUsuario();
});
When('clico no botao editar', function (){
   atualizaUsuarioPagina.clicarBotaoEditarCancelar();
});
When('atualizo o email do usuario com um email ja cadastrato',function(){
    atualizaUsuarioPagina.digitarNovoEmail(email);
});

When('clico no botao salvar', function (){
   atualizaUsuarioPagina.clicarBotaoSalvarUsuario(); 
});
Then('a mensagem E-mail already in use devera ser exibida', function (){
    paginaCadastroUsuario.validarmensagemEmailJaExistente(); 
    //paginaCadastroUsuario.clicarbotaoCancelarMensagemAlerta();
});



When('informo o email do usuario cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa(email);
});
When('clico no botao ver detalhes', function (){
    atualizaUsuarioPagina.visualizarDetalhesUsuario();
});
When('clico no botao editar', function (){
   atualizaUsuarioPagina.clicarBotaoEditarCancelar();
});
When('atualizo o email do usuario com um email com mais de 60 caracteres',function(){
    atualizaUsuarioPagina.digitarNovoEmail('emailcommaisde60caracteresmdmdmdmdmdmdmdmdmdmdmdmd@raro.com.br');
});

When('clico no botao salvar', function (){
   atualizaUsuarioPagina.clicarBotaoSalvarUsuario(); 
});
Then('a mensagem Informe no máximo 60 caracteres para o e-mail devera ser exibida ', function (){
    paginaCadastroUsuario.validarmensagemEmailMais60Caracteres();
});

When('informo o nome do usuario nao cadastrado', function (){
    pesquisaUsuario.digitarValorPesquisa('Joao Canabrava');
});

Then('a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida', function (){
    pesquisaUsuario.comparaMensagemUsurioInvalido();
});

