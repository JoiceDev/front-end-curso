// Array de objetos representando alunos
const alunos = [
    {nome: "João", nota: 5},
    {nome: "Matheus", nota: 7},
    {nome: "Pedro", nota: 4},
    {nome: "Ana", nota: 8},
    {nome: "Carlos", nota: 4},
    {nome: "Nicolas", nota: 10}
];

// função para retornar os alunos com nota maior ou igual a 6
function alunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Chamada da função e exibição dos resultados
const alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);