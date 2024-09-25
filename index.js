const Api = require("express")()
let Codes = []

// Atualmente Nâo temos sistemas de Seguranças e nem sistema de salvamento das informaçoes enviada para a API
// Se algum dia um projeto mais serio for ser feito, Colocar Sistema de Segurança Envolvendo Senhas Verificando a quantidade De (req & res) Alem de Colocar sistema cujo bloqueia o IP DE Usuarios Suspeitos que tentarem Inserir dados.
 


Api.get("/",(req,res)=>{
    res.send(Codes)
})
Api.get("/send/*",(req,res)=>{
    Codes.push(req.params[0])
    res.send('<h1>Codigo Inserido Com Exito!!!</h1>')
})

Api.listen(5000,(e)=>{
    console.log("Api Ligada.")
})