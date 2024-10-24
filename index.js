const prompt = require("prompt-sync")()
const {criarAluno } = require("./alunos/criarAluno")
const {editarAlunos } = require("./alunos/editarAlunos")
const {excluirAlunos } = require("./alunos/excluirAlunos")
const {listarAluno } = require("./alunos/listarAlunos")

// function listarAluno() {
//     try {
//     alunos.forEach((aluno) => 
//         console.table(alunos)
//     )
//     } catch (error) {
//     console.error("Erro ao listar alunos",error.message)
//     }
// }

// function criarAluno(matricula,nome,email,telefone) {
//         const novoAluno = { matricula, nome , email , telefone}
//         try{
//         alunos.push(novoAluno)
//     } catch (error) {
//      console.error("Erro ao cadastrar dados",error.message)
//     }
// }    


// function editarAlunos(matricula, novoNome, novoEmail, novoTelefone){
//     try {
//       const aluno = alunos.find(elementodoarray =>
//         elementodoarray.matricula === matricula
//       )
//     if(aluno){
//         aluno.nome = novoNome,
//         aluno.email= novoEmail,
//         aluno.telefone = novoTelefone,
//         console.log("aluno editado com sucesso")
//     }else{
//         console.log("aluno não encontrado")
//     }     
//     } catch (error) {
//     console.error("")
//     }
// }

// function excluirAlunos(matricula){
//     try {
//         const indice = alunos.findIndex(elementodoarray =>
//             elementodoarray.matricula = matricula
//         )
//         if (indice === -1) {
//             console.log("Aluno não encontrado")
//         }else {
//             alunos.splice(indice,1)
//             console.log("Aluno deletado com sucesso")
//         }
    
//     }catch (error) {
//         console.error("Error ao excluir aluno",error.message)
//     }    
//     }



criarAluno("1","João","João@emailcom","8499999-9999")
criarAluno("2","Maria","Maria@email.com","9434314321")
listarAluno()

// editarAlunos("2", "JoãoMaria", "JoãoMaria@email.com","83 99999-9999")
// listarAluno()
// excluirAlunos("a92123")
