const express = require("express")
const server = express()

//configurar pasta publica
// queremos que esta pasta fique como uma pasta comum, como se o conteudo estivesse disponivel na web
server.use(express.static("public"))



//configurar pas publica 
const nunjucks = require("nunjucks") // Nunjucks um motor de html pra deixar ele mais inteligente como uma linguagem, com condições e variaveis
nunjucks.configure("src/views",{
    express :server,
    noCache: true
})




// configurar caminhos da minha aplicação
//pagina inicial
//rec = requisiçao
//res = resposta
/*
// configuração pre nunjuncks


server.get("/", function (rec, res){ 
    res.sendFile(__dirname + "/views/index.html")//dirner variavel global, ja vem pr padrao nao precisa ser definida
})

server.get("/create.point", function (rec, res){ 
    res.sendFile(__dirname + "/views/create.point.html")//dirner variavel global, ja vem pr padrao nao precisa ser definida
})

server.get("/search-results", function (rec, res){ 
    res.sendFile(__dirname + "/views/search-results.html")//dirner variavel global, ja vem pr padrao nao precisa ser definida
})*/


    // Configuração pós nunjucks

server.get("/", function (rec, res){ 
    return res.render("index.html", { title: "Seu marketplace de coletas de residuos"})
})

server.get("/create.point", function (rec, res){ 
    return res.render("create.point.html")
})

server.get("/search-results", function (rec, res){ 
    return res.render("search-results.html")
})

//ligar o servidor 

server.listen(3000)
