const express = require("express")
const server = express()

//configurar pasta publica
// queremos que esta pasta fique como uma pasta comum, como se o conteudo estivesse disponivel na web
server.use(express.static("public"))//

// configurar caminhos da minha aplicação
//pagina inicial
//rec = requisiçao
//res = resposta
server.get("/", function (rec, res){ 
    res.sendFile(__dirname + "/views/index.html")//dirner variavel global, ja vem pr padrao nao precisa ser definida
})

server.get("/create.point", function (rec, res){ 
    res.sendFile(__dirname + "/views/create.point.html")//dirner variavel global, ja vem pr padrao nao precisa ser definida
})

server.get("/search-results", function (rec, res){ 
    res.sendFile(__dirname + "/views/search-results.html")//dirner variavel global, ja vem pr padrao nao precisa ser definida
})




//ligar o servidor 

server.listen(3000)

