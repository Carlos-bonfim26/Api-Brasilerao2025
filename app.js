import tabela2025 from "./tabela.js";
import express from "express";
const app = express();
const port = 3000;
import { modeloTime, modeloAtualizacaoTime } from "./validacao.js";
app.use(express.json());
app.get("/", (req, res) => {
  res.send(tabela2025);
});
app.get("/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const equipe = tabela2025.find((item) => item.sigla === sigla);
  if (equipe) {
    res.send(equipe);
  } else {
    res.status(404).send({ error: "Equipe não encontrada" });
  }
});
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

app.put("/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const timeSelecionado = tabela2025.find((time) => time.sigla === sigla);
  if (timeSelecionado === undefined) {
    return res.status(404).send({ error: "Time não encontrado" });
  } else {
    const { error } = modeloAtualizacaoTime.validate(req.body);
    if (error) {
      return res.status(400).send({ error: error.details[0].message });
    }
    const campos = Object.keys(req.body);
    for (let campo of campos) {
      timeSelecionado[campo] = req.body[campo];
    }
    res.status(200).send(timeSelecionado);
  }
});
app.post("/", (req, res) => {
  const novoTime = req.body;
  const { error } = modeloTime.validate(novoTime);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }
  tabela2025.push(novoTime);
  res.status(201).send(novoTime);
});
app.delete("/:sigla", (req, res) => {
  const sigla = req.params.sigla.toUpperCase();
  const IndextimeSelecionado = tabela2025.findIndex(
    (time) => time.sigla === sigla
  );
  if (IndextimeSelecionado !== -1) {
    const timeRemovido = tabela2025.splice(IndextimeSelecionado, 1);
    res.status(200).send(timeRemovido[0]);
  } else {
    res.status(404).send({ error: "Equipe não encontrada" });
  }
});
