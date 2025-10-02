import tabela2025 from "./tabela.js";  
import express from "express";
const app = express();
const port = 3000;

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