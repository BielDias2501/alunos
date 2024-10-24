const {alunos} = require("./alunos") 
var validator = require('validator')


function criarAluno(matricula,nome,email,telefone) {
    const novoAluno = { matricula, nome , email , telefone}
    try{
        if(!validator.isLength(matricula, {min:3 , min:5})){
            console.error("A matricula dever ter no minimo 3 caracteres e no maximo 5")
            return
        }
        if(!validator.isEmail(email)){
            console.error("O email informado é invalido")
            return
        }
        if (
            validator.isEmpty(matricula) ||
            validator.isEmpty(nome) ||
            validator.isEmpty(telefone) 
        ) {
            console.error("Todos os campos devem ser preenchidos")

        }    
            
    alunos.push(novoAluno)
} catch (error) {
 console.error("Erro ao cadastrar dados",error.message)
}
}    

module.exports = { criarAluno }