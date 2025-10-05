import joi from "joi";

const modeloTime = joi.object({
  nome: joi.string().min(3).required(),
  sigla: joi.string().min(3).length(3).required(),
  pontos: joi.number().min(0).default(0),
  jogos: joi.number().min(0).default(0),
  vitorias: joi.number().min(0).default(0),
  empates: joi.number().min(0).default(0),
  derrotas: joi.number().min(0).default(0),
  golsMarcados: joi.number().min(0).default(0),
  golsSofridos: joi.number().min(0).default(0),
  saldoGols: joi.number().min(0).default(0),
});

const modeloAtualizacaoTime = joi.object({
  nome: joi.string().min(3),
  sigla: joi.string().min(3).length(3),
  pontos: joi.number().min(0),
  jogos: joi.number().min(0),
  vitorias: joi.number().min(0),
  empates: joi.number().min(0),
  derrotas: joi.number().min(0),
  golsMarcados: joi.number().min(0),
  golsSofridos: joi.number().min(0),
  saldoGols: joi.number().min(0),
}).min(1);

export { modeloTime, modeloAtualizacaoTime };
