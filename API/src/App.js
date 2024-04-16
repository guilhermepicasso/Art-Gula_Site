import produtoController from "../src/controller/produtoController.js"
import eventoController from "../src/controller/eventoController.js"
import subcategoriaController from "../src/controller/subcategoriaController.js"
import categoriaController from "../src/controller/categoriaController.js";
import imagemController from "../src/controller/imagemController.js";

import testeController from "../src/controller/testController.js"; // Corrigido o nome do arquivo

import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

//Controllers
servidor.use(produtoController);
servidor.use(eventoController);
servidor.use(subcategoriaController);
servidor.use(categoriaController);
servidor.use(imagemController);

// Adicionando testeController
servidor.use(testeController);

// Tratamento de erro genérico
servidor.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro interno do servidor');
});

let port = process.env.PORT;
servidor.listen(port, () => console.log("API SUBIU!"));

export default servidor;
