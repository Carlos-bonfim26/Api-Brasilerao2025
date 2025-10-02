import tabela2025 from "./tabela.js";  
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send(tabela2025);
})

app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));