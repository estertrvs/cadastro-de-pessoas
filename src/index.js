// elementos DOM (Document Object Model)
const telaCadastro = document.getElementById('tela-cadastro');
const telaListagem = document.getElementById('tela-listagem');
const telaEditarCadastro = document.getElementById('tela-edicao')
const formCadastro = document.getElementById('form-cadastro');
const listaPessoas = document.getElementById('lista-pessoas');
const navCadastro = document.getElementById('nav-cadastro');
const navListagem = document.getElementById('nav-listagem');
const table = document.getElementById('tabela-pessoas');
const formEdicao = document.getElementById('form-edicao');

// função factory para criar uma pessoa
function criarPessoa(nome, cpf, dataNascimento, telefone, email) {
    let pessoa = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        telefone: telefone,
        email: email
    }
    return pessoa;
}

// função para salvar uma pessoa no local storage
function salvarPessoa(pessoa) {
    localStorage.setItem(pessoa.cpf, JSON.stringify(pessoa));
}

// função para verificar se um cpf já está cadastrado
function verificarCPF(cpf) {
    let todasAsPessoas = getTodasAsPessoas();
    return todasAsPessoas.some(pessoa => pessoa.cpf === cpf);
}

// função para retornar a pessoa que possui um determinado cpf
function recuperarPessoa(cpfProcurado){
    return getTodasAsPessoas().find(pessoa => pessoa.cpf === cpfProcurado);
}

// função que retorna o array de todas as pessoas cadastradas
function getTodasAsPessoas(){
    let todasAsPessoas = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        todasAsPessoas.push(JSON.parse(localStorage.getItem(key)));
    }
    return todasAsPessoas;
}

// função que verifica os valores do formulário para criar uma nova pessoa e armazenar
function cadastrar(){
    let nome = formCadastro.nome.value;
    let cpf = formCadastro.cpf.value;
    let dataNascimento = formCadastro.dataNascimento.value;
    let telefone = formCadastro.telefone.value;
    let email = formCadastro.email.value;
    
    if (verificarCPF(cpf)){
        alert('CPF já cadastrado!');
    } else if (!(validarCampos(nome, cpf, dataNascimento, telefone, email))){
        alert('Por favor, preencha todos os campos!');
    } else if(cpf.length < 14){
        alert('O CPF deve conter 14 caracteres, incluindo pontos e hífen.');
    } else {
        // criar nova pessoa
        let pessoa = criarPessoa(nome, cpf, dataNascimento, telefone, email);
        // armazenar no local storage   
        salvarPessoa(pessoa);
        alert('Pessoa cadastrada com sucesso!');
        formCadastro.reset();
    }
}

// função que verifica se existe algum campo vazio
function validarCampos(nome, cpf, dataNascimento, telefone, email){
    return nome && cpf && dataNascimento && telefone && email;
}

// função para formatar o campo CPF
function formatarCPF(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    input.value = value;
    return value
}

// função para remover um cadastro
function removerCadastro(){
    let cpf = prompt('Digite o CPF que deseja remover:');
    if (cpf !== null) {
        let input = { value: cpf };
        cpf = formatarCPF(input);
        localStorage.removeItem(cpf);
    }
    mostrarTelaListagem();
}

// função para formatar o formulário de editar cadastro
function editarCadastro(){
    const formContainer = document.getElementById('formEdicao');
    adicionarAtributosNaTabela();
    const selectedRow = table.querySelector('tr.selected');
    if (selectedRow) {
        const { nome, cpf, nascimento, telefone, email } = selectedRow.dataset;

        // Preencher o formulário com os dados da linha selecionada
        formEdicao.nome.value = nome;
        formEdicao.cpf.value = cpf;
        formEdicao.dataNascimento.value = nascimento;
        formEdicao.telefone.value = telefone;
        formEdicao.email.value = email;

        // Mostrar o formulário
        formEdicao.style.display = 'block';
    } else {
        alert('Por favor, selecione uma linha para editar.');
    }
}

// função para salvar alterações do formulário editar cadastro
function salvarAlteracoes(event){
    event.preventDefault();
    let nome = formEdicao.nome.value;
    let cpf = formEdicao.cpf.value;
    let dataNascimento = formEdicao.dataNascimento.value;
    let telefone = formEdicao.telefone.value;
    let email = formEdicao.email.value;

    let pessoa = recuperarPessoa(cpf);

    pessoa.nome = nome;
    pessoa.dataNascimento = dataNascimento;
    pessoa.telefone = telefone;
    pessoa.email = email;
    localStorage.setItem(cpf, JSON.stringify(pessoa));
    mostrarTelaListagem();
}

// função para adicionar atributos em cada linha da tabela listar pessoas
function adicionarAtributosNaTabela(){
    const linhas = table.querySelectorAll('tbody tr');
    linhas.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length > 0) {
            row.dataset.nome = cells[0].textContent;
            row.dataset.cpf = cells[1].textContent;
            row.dataset.nascimento = cells[2].textContent;
            row.dataset.telefone = cells[3].textContent;
            row.dataset.email = cells[4].textContent;
        }
    });
}

// função para adicionar os dados de uma pessoa em cada linha da tabela
function carregarListaPessoas() {
    listaPessoas.innerHTML = '';
    const pessoas = getTodasAsPessoas();

    for (const pessoa of pessoas) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pessoa.nome}</td>
            <td>${pessoa.cpf}</td>
            <td>${pessoa.dataNascimento}</td>
            <td>${pessoa.telefone}</td>
            <td>${pessoa.email}</td>
            `;
        listaPessoas.appendChild(row);
    }
}

// Funções para exibir cada tela:
function mostrarTelaCadastro() {
    telaEditarCadastro.style.display = 'none';
    telaCadastro.style.display = 'block';
    telaListagem.style.display = 'none';
}

function mostrarTelaListagem() {
    telaEditarCadastro.style.display = 'none';
    telaCadastro.style.display = 'none';
    telaListagem.style.display = 'block';
    carregarListaPessoas();
}

function mostrarTelaEditarCadastro() {
    telaCadastro.style.display = 'none';
    telaListagem.style.display = 'none';
    telaEditarCadastro.style.display = 'block';
    editarCadastro();
}

// Adiciona o evento de clique para seleção de linha
table.addEventListener('click', (e) => {
    const linhas = table.querySelectorAll('tr');
    linhas.forEach(row => row.classList.remove('selected'));
    
    let target = e.target; // elemento que foi clicado
    while (target && target.nodeName !== 'TR') {
        target = target.parentElement;
    }

    if (target && target.nodeName === 'TR') {
        target.classList.add('selected'); // Adiciona a classe 'selected' à linha clicada
    }
});

// Ouvintes para os links de navegação
navCadastro.addEventListener('click', event => {
    event.preventDefault();
    mostrarTelaCadastro();
});

navListagem.addEventListener('click', event => {
    event.preventDefault();
    mostrarTelaListagem();
});

// Exibir a tela de cadastro por padrão
mostrarTelaCadastro();


