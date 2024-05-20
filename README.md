# Sistema de Cadastro de Pessoas

## Sobre a Avaliação
Este projeto faz parte da avaliação referente à sprint 1 do Programa de Bolsas Compass UOL / AWS - MAIO-A/2024. Essa avaliação tem como objetivo avaliar o conhecimento dos bolsistas acerca de JavaScript, Git e GitHub e também habilidades relacionadas à organização.

## Descrição do Projeto
O projeto é um sistema de cadastro de pessoas desenvolvido em JavaScript. O sistema permite criar, listar, editar e remover cadastros de pessoas, armazenando os dados no localStorage do navegador.

## Desenvolvimento do Projeto

1. **Tela de Cadastro:** Inicialmente, foi criada a tela de cadastro, onde um formulário simples foi desenvolvido e as pessoas começaram a ser armazenadas no Local Storage.

2. **Tela de Listagem:** Em seguida, foi criada a tela de listagem, utilizando uma tabela com linhas selecionáveis para facilitar as operações futuras.

3. **Remoção de Cadastro:** Após a criação da tela de listagem, foi implementada a funcionalidade de remoção de uma pessoa cadastrada, utilizando o CPF como identificador. O usuário era solicitado a confirmar o CPF da pessoa a ser removida.

4. **Atualização de Cadastro:** Posteriormente, foi desenvolvida a função de atualização de cadastro. A seleção de linhas na tabela de listagem permitia a edição dos dados da pessoa selecionada.

5. **Tela de Edição:** A tela de edição foi então desenvolvida para permitir que o usuário preenchesse e editasse os dados da pessoa selecionada.

6. **Salvamento de Alterações:** Após a edição dos dados, as alterações foram salvas no Local Storage, substituindo os dados originais da pessoa.

7. **Melhorias e Tratamento de Erros:** Por fim, foram implementadas melhorias adicionais no sistema, juntamente com tratamentos de erro para garantir uma experiência mais robusta e confiável para o usuário.

## Estrutura do Projeto

- **HTML:** Estrutura do DOM com elementos para cadastro, listagem e edição de pessoas.
- **CSS:** Estilização básica para visualização das telas.
- **JavaScript:** Lógica para manipulação do DOM, interação com localStorage e navegação entre telas.

## Funcionalidades

1. **Cadastro de Pessoas:** Preenchimento de um formulário com os dados da pessoa.
2. **Listagem de Pessoas:** Exibição de uma tabela com todas as pessoas cadastradas.
3. **Edição de Cadastro:** Atualização dos dados de uma pessoa existente.
4. **Remoção de Cadastro:** Exclusão de um cadastro pelo CPF.

## Como Utilizar o Sistema

### Navegação
- **Tela de Cadastro:** Clique em "Cadastrar Pessoa" no cabeçalho da tela para acessar o formulário de cadastro.
- **Tela de Listagem:** Clique em "Ver Pessoas Cadastradas" no cabeçalho da tela para ver todas as pessoas cadastradas.
- **Tela de Edição:** Selecione uma linha na tabela de pessoas cadastradas e clique no botão "Editar" para atualizar os dados.

### Cadastro de Pessoa
1. Preencha todos os campos do formulário: Nome, CPF, Data de Nascimento, Telefone, e Email.
2. Clique no botão "Cadastrar".
3. Se todos os campos estiverem preenchidos corretamente e o CPF não estiver duplicado, a pessoa será cadastrada.

### Edição de Cadastro
1. Vá para a tela de listagem e selecione a linha da pessoa que deseja editar.
2. Clique no botão "Editar".
3. Atualize os campos desejados no formulário de edição.
4. Clique no botão "Salvar Alterações" para atualizar os dados.

### Remoção de Cadastro
1. Na tela de listagem, clique no botão "Remover".
2. Insira o CPF da pessoa que deseja remover.
3. Confirme a remoção.

## Estrutura do Código

### Manipulação do DOM
```javascript
const telaCadastro = document.getElementById('tela-cadastro');
const telaListagem = document.getElementById('tela-listagem');
const telaEditarCadastro = document.getElementById('tela-edicao');
const formCadastro = document.getElementById('form-cadastro');
const listaPessoas = document.getElementById('lista-pessoas');
const navCadastro = document.getElementById('nav-cadastro');
const navListagem = document.getElementById('nav-listagem');
const table = document.getElementById('tabela-pessoas');
const formEdicao = document.getElementById('form-edicao'); 
```

## Funções Principais

- **criarPessoa:** Cria um objeto pessoa com os dados fornecidos.
- **salvarPessoa:** Armazena a pessoa no localStorage.
- **verificarCPF:** Verifica se o CPF já está cadastrado.
- **recuperarPessoa:** Recupera os dados de uma pessoa pelo CPF.
- **getTodasAsPessoas:** Retorna todas as pessoas cadastradas.
- **cadastrar:** Valida os dados e cadastra uma nova pessoa.
- **validarCampos:** Verifica se todos os campos estão preenchidos.
- **formatarCPF:** Formata o CPF para o padrão correto.
- **removerCadastro:** Remove uma pessoa pelo CPF.
- **editarCadastro:** Preenche o formulário de edição com os dados da pessoa selecionada.
- **salvarAlteracoes:** Salva as alterações feitas na edição.
- **carregarListaPessoas:** Carrega a lista de pessoas na tabela.

## Exibição de Telas

- **mostrarTelaCadastro:** Exibe a tela de cadastro.
- **mostrarTelaListagem:** Exibe a tela de listagem.
- **mostrarTelaEditarCadastro:** Exibe a tela de edição.

## Eventos

- **Clique em Linhas da Tabela:** Seleciona uma linha da tabela de listagem.
- **Navegação:** Alterna entre as telas de cadastro e listagem.

## Dificuldades Conhecidas

- **Validação de campos:** Não permitir que nenhum campo fique vazio ao enviar formulários.
- **Validação de CPF:** Garantir que o CPF esteja no formato correto e seja único.
- **Sincronização de Dados:** Atualizar corretamente a interface após operações de CRUD.
- **Interatividade do Formulário de Edição:** Manter a seleção correta na tabela e no formulário de edição.

## Como Executar

1. Abra o arquivo `index.html` em um navegador.
2. Use a interface para navegar entre as telas e realizar operações de cadastro, listagem, edição e remoção de pessoas.

Espero que este sistema de cadastro seja útil e intuitivo. Em caso de dúvidas ou sugestões, sinta-se à vontade para contribuir com melhorias no código.

**Autor:** Ester Pequeno Trevisan
