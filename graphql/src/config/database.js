const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex


// knex('users').insert({
//     name: 'Teste',
//     email: 'teste@teste.com.br',
//     password: 'teste'
// }).then(data => console.log(data))

// knex('users').where({id: 2}).first().then(resultado => console.log(resultado))