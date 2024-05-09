import {
    Given,
    When,
    Then,
    Before,
    After,
} from 'cypress-cucumber-preprocessor/steps';

import { faker, fakerPT_BR } from '@faker-js/faker';
import PesquisaUsuarioPagina  from '../pages/pesquisaUsuario.page';
import CadastroPaginaUsuario  from '../pages/cadastroUsuario.page';
import ListaUsuarioPagina  from '../pages/listaUsuario.page';

const pesquisaUsuario = new PesquisaUsuarioPagina();
const paginaCadastroUsuario = new CadastroPaginaUsuario();
const paginaListaUsuario  = new ListaUsuarioPagina();


const nome = fakerPT_BR.person.fullName();
const email = faker.internet.email().toLowerCase();   
   

Given('que acessei a funcionalidade de pesquisa de usuario', function () {
    cy.visit('/users/novo');

   paginaCadastroUsuario.cadastrar(nome, email);
    cy.wait(5000);
    cy.visit('/');
      
});

When('informo um nome do usuario cadastrado',function (){
    pesquisaUsuario.digitarValorPesquisa(nome);
    
});
Then('as informacoes do usuario sao exibidas na lista', function(){
    pesquisaUsuario.compararNomeUsuario(nome); 
});

When('informo um email do usuario cadastrado',function (){
    pesquisaUsuario.digitarValorPesquisa(email);
});
Then('as informacoes do usuario sao exibidas na lista', function(){
    pesquisaUsuario.compararEmailUsuario(email); 
});

When('nao informo o nome do usuario cadastrado',function (){
    pesquisaUsuario.digitarValorPesquisa('wsda');
});
Then('a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida', function(){
    pesquisaUsuario.comparaMensagemUsurioInvalido(); 
});

When('nao informo o email do usuario cadastrado',function (){
    pesquisaUsuario.digitarValorPesquisa('@hotmart.com');
});
Then('a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida', function(){
    pesquisaUsuario.comparaMensagemUsurioInvalido(); 
});

When('informo o nome do usuario nao localizado',function (){
    pesquisaUsuario.digitarValorPesquisa('jamessuperbonde');
});
Then('a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida.', function(){
    pesquisaUsuario.comparaMensagemUsurioInvalido(); 
});

When('informo o email do usuario nao localizado',function (){
    pesquisaUsuario.digitarValorPesquisa('man@gamil.com');
});
Then('a mensagem Ops! Não existe nenhum usuário para ser exibido devera ser exibida.', function(){
    pesquisaUsuario.comparaMensagemUsurioInvalido(); 
});
