const form = document.getElementById('form-ativiadae')
const imgAprovado = '<img src="./im8/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./im8/reprovado.png" alt="Emoji decepcionado"/>';

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTable();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
};

function atualizaTable() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};