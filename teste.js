var validator = require('validator')

let nome = "."
let email = "testeemail.com"

console.log(validator.isEmpty(nome))
console.log(validator.isEmail(email))