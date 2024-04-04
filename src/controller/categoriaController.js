import {salvarCategoria,listarCategorias,editarCategoria,deletarCategoria} from "../repository/categoriaRepository.js";

import { Router } from "express";
let servidor = Router();

servidor.get('/categoria', async (req, resp) => {
    let listaCategorias = await listarCategorias();
    resp.send(listaCategorias);
});

servidor.post('/categoria', async (req, resp) => {
    let categoria = req.body;
    let categoriaInserido = await salvarCategoria(categoria);
    resp.send(categoriaInserido);
});

servidor.put('/categoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const categoria = req.body;

        const categoriaAtualizado = await editarCategoria(id, categoria);

        resp.status(200).json(categoriaAtualizado);
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao atualizar a categoria', error: error.message });
    }
});

//Terminar Delete categoria
servidor.delete('/categoria/:id', async (req, resp) => {
    try {
        
    } catch (error) {
        
    }
});

export default servidor;