const prompt = require("prompt-sync")()
const { criarAluno } = require("./alunos/criarAluno")
const { editarAlunos } = require("./alunos/editarAlunos")
const { excluirAlunos } = require("./alunos/excluirAlunos")
const { listarAluno } = require("./alunos/listarAlunos")
const {excluirTodos} = require("./alunos/excluirTodos")

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


function exibirMenu() {
    console.log("===================")
    console.log("1 - Criar aluno")
    console.log("2 - Editar aluno")
    console.log("3 - Excluir aluno")
    console.log("4 - Listar aluno")
    console.log("5 - Excluir tudo")
    console.log("9 - Saindo do sistema")
    console.log("====================")
}
let opcao
do {
    exibirMenu()
    opcao = parseInt(prompt("Digite uma opção:"))
    let matricula;
    switch (opcao) {
        case 1:
            matricula = prompt("Digite a matricula:")
            let nome = prompt("Digite o nome:")
            let email = prompt("Digite o email:")
            let telefone = prompt("Digite o telefone:")
            criarAluno(matricula, nome, email, telefone)
            listarAluno()
            break;
        case 2:
            matricula = prompt("Digite a matricula:")
            let novoNome = prompt("Digite o novo nome:")
            let novoEmail = prompt("Digite o novo email:")
            let novoTelefone = prompt("Digite o novo telefone:")
            editarAlunos(matricula, novoNome , novoEmail , novoTelefone)
            listarAluno()
            break
        case 3:
            matricula = prompt("Digite a matricula:")
            excluirAlunos(matricula)
            break
        case 4:
            listarAluno()
            break
        case 5:
            excluirTodos()
            break
        case 9:
            console.log("Saindo do sistema")
            break

        default:
            console.log("Valores invalidos!")
            break;
    }
} while (opcao !== 9)

// criarAluno("1","João","João@emailcom","8499999-9999")
// criarAluno("2","Maria","Maria@email.com","9434314321")
// listarAluno()

// editarAlunos("2", "JoãoMaria", "JoãoMaria@email.com","83 99999-9999")
// listarAluno()
// excluirAlunos("a92123")

