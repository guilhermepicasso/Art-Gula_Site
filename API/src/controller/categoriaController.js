import { salvarCategoria, listarCategorias, editarCategoria, deletarCategoria, listarCategoria } from "../repository/categoriaRepository.js";
import { deletarSubcategoria, listarSubcategoriasCategoria } from "../repository/subcategoriaRepository.js";

import { Router } from "express";
let servidor = Router();

servidor.get('/categoria', async (req, resp) => {
    try {
        let listaCategorias = await listarCategorias();
        if (listaCategorias.length < 1) {
            throw new Error("Nenhuma categoria Encontrada!");
        }
        resp.status(200).json(listaCategorias);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.get('/categoria/:id', async (req, resp) => {
    try {
        let categoria = req.params.id;
        let listaCategorias = await listarCategoria(categoria);
        if (listaCategorias.length < 1) {
            throw new Error("Nenhuma categoria Encontrada!");
        }
        resp.status(200).json(listaCategorias);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.post('/categoria', async (req, resp) => {
    try {
        let categoria = req.body;
        let categoriaInserido = await salvarCategoria(categoria);
        resp.status(200).json(categoriaInserido);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }

});

servidor.put('/categoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const categoria = req.body;

        const categoriaAtualizado = await editarCategoria(id, categoria);

        resp.status(200).json(categoriaAtualizado);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.delete('/categoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const subcategoriasCategoria = await listarSubcategoriasCategoria(id);

        if (subcategoriasCategoria.length > 0) {
            for (const subcategoria of subcategoriasCategoria) {
                await deletarSubcategoria(subcategoria.idSubcategoria, subcategoria);
            }
        }

        await deletarCategoria(id);
        resp.status(200).json("Categoria excluida com sucesso!");
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

export default servidor;