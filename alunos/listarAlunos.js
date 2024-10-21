const {alunos} = require("./alunos") 

function listarAluno() {
    try {
    alunos.forEach((aluno) => 
        console.table(alunos)
    )
    } catch (error) {
    console.error("Erro ao listar alunos",error.message)
    }
}
    
module.exports = { listarAluno }    