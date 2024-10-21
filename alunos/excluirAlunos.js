const {alunos} = require("./alunos") 

function excluirAlunos(matricula){
    try {
        const indice = alunos.findIndex(elementodoarray =>
            elementodoarray.matricula = matricula
        )
        if (indice === -1) {
            console.log("Aluno não encontrado")
        }else {
            alunos.splice(indice,1)
            console.log("Aluno deletado com sucesso")
        }
    
    }catch (error) {
        console.error("Error ao excluir aluno",error.message)
    }    
    }

    module.exports = { excluirAlunos }