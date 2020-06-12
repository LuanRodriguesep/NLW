// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

// criar objetos que iŕá fazer operação no banco de dados
/*const db = {
    propriedade : "valor" 
}*/

//  ou pode ser feito com esse comando tbm

const db = new sqlite3.Database("./src/database/database.db") // constructor ou classe
module.exports = db

// vamos utilizar o objeto de banco de dados, para  nossas operações

db.serialize(() => {  // uma function atrelada aum objto, será considerado metodo
    // Com comandos SQL eu vou:

    // 01 - criar uma tabela
    /* db.run(`
       CREATE TABLE IF NOT EXISTS places (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           image TEXT, 
           name TEXT,
           address TEXT,
           address2 TEXT,
           state TEXT,
           city TEXT,
           items TEXT
       );
   `) 
    // 02 - iserir dados na tabela 
     const query = `
    INSERT INTO places (
        image, 
        name,
        address,
        address2,
        state,
        city,
        items 
    ) VALUES (?,?,?,?,?,?,?);
`

    const values = [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=874&q=80",
        "Clear",
        "Madureira",
        "Numero 2525",
        "Rio de Janeiro",
        "Rio das Ostras",
        "Papeis e Papelão,Oleo de Cozinha,Residuos Organicos"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("cadastrados com Sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)  // callback (chamar de volta)






    // 03 - consultar dados da tabela

     db.all(` SELECT * FROM places`, function (err, rows) {
         if (err) {
             return console.log(err)
         }
 
         console.log("Aqui está seus registros")
         console.log(rows)
     })  */

    // 04 - Deletar um dado da tabela

    /* db.run(`DELETE  FROM places WHERE id = ?`, [18], function (err) {  // por que (1) um ? porque so temos um registro na tabela, dentro da array vai o numero do registro 
         if (err) {
             return console.log(err)
         }
         console.log("Registro deletado com sucessso!")
     }) */



    //    consultar registros 

   /* db.all(` SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui está seus registros")
        console.log(rows)
    })*/
})
