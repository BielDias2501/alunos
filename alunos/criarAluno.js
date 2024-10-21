const {alunos} = require("./alunos") 

function criarAluno(matricula,nome,email,telefone) {
    const novoAluno = { matricula, nome , email , telefone}
    try{
    alunos.push(novoAluno)
} catch (error) {
 console.error("Erro ao cadastrar dados",error.message)
}
}    

module.exports = { criarAluno }