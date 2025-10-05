import tabela2025 from "./tabela.js";  
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res)=>{
    res.send(tabela2025);

})
app.get('/:sigla', (req, res) => {
    const sigla = req.params.sigla.toUpperCase();
    const equipe = tabela2025.find(item => item.sigla === sigla);
    if (equipe) {
        res.send(equipe);
    } else {
        res.status(404).send({ error: "Equipe não encontrada" });
    }
});
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));

app.put('/:sigla', (req,res)=>{
    const sigla = req.params.sigla.toUpperCase();
    const timeSelecionado = tabela2025.find(time => time.sigla === sigla);
    const campos = Object.keys(req.body);
    for(let campo of campos){
        timeSelecionado[campo] = req.body[campo];
    }
    res.status(200).send(timeSelecionado);

})