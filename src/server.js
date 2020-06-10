const express = require("express")
const server = express()

// Pegar o banco de Dados

const db = require("./database/db") // variavel nao preqisava propriamente ser "db" poderia ser qualquer outro nome

//configurar pasta publica
// queremos que esta pasta fique como uma pasta comum, como se o conteudo estivesse disponivel na web
server.use(express.static("public"))



//configurar pas publica 
const nunjucks = require("nunjucks") // Nunjucks um motor de html pra deixar ele mais inteligente como uma linguagem, com condições e variaveis
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})




// configurar caminhos da minha aplicação
//pagina inicial
//req = requisiçao
//res = resposta
/*
// configuração pre nunjuncks


server.get("/", function (req, res){ 
    res.sendFile(__dirname + "/views/index.html")//dirner variavel global, ja vem pr padrao nao preqisa ser definida
})

server.get("/create.point", function (req, res){ 
    res.sendFile(__dirname + "/views/create.point.html")//dirner variavel global, ja vem pr padrao nao precisa ser definida
})

server.get("/search-results", function (req, res){ 
    res.sendFile(__dirname + "/views/search-results.html")//dirner variavel global, ja vem pr padrao nao preqisa ser definida
})*/


// Configuração pós nunjucks

server.get("/", function (req, res) {
    return res.render("index.html", { title: "Seu marketplace de coletas de residuos" }) 
})




server.get("/create.point", function (req, res) {
    //req.query pegar informações de um formulário : Query strings da nossa Url
    console.log(req.query)
    
    return res.render("create.point.html")
})




server.get("/search-results", function (req, res) {

    // ?Pegar o dados do banco de Dados
    db.all(` SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length
        console.log("Aqui está seus registros") // consolo.log nos mostrar informações dos rows no terminal, deixa-lo aqui é opcional
        console.log(rows)
        // Mostrar a pagina html com os do banco de dados
        return res.render("search-results.html",{ places: rows, total: total})
    })
    
})

//ligar o servidor 

server.listen(3000)
