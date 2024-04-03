import produtoController from "../src/controller/produtoController.js"
import eventoController from "../src/controller/eventoController.js"
import subcategoriaController from "../src/controller/subcategoriaController.js"
import categoriaController from "../src/controller/categoriaController.js";

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

let port = process.env.PORT;
servidor.listen(port, () => console.log("API SUBIU!"));