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

servidor.put('/categoria/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const categoria = req.body;

        const categoriaAtualizado = await editarCategoria(id, categoria);

        res.status(200).json(categoriaAtualizado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar a subcategoria', error: error.message });
    }
});

//Terminar Delete categoria
servidor.delete('/subcategoria/:id', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

export default servidor;