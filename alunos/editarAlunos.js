const {alunos} = require("./alunos") 

function editarAlunos(matricula, novoNome, novoEmail, novoTelefone){
    try {
      const aluno = alunos.find(elementodoarray =>
        elementodoarray.matricula === matricula
      )
    if(aluno){
        aluno.nome = novoNome,
        aluno.email= novoEmail,
        aluno.telefone = novoTelefone,
        console.log("aluno editado com sucesso")
    }else{
        console.log("aluno não encontrado")
    }     
    } catch (error) {
    console.error("")
    }
}

module.exports = { editarAlunos }