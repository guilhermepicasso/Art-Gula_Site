import { salvarProduto, editarProduto, listarProdutos, deletarProduto, listarUmProduto } from "../repository/produtoRepository.js";

import { Router } from "express";
import { listarSucategoria } from "../repository/subcategoriaRepository.js";
let servidor = Router();

servidor.post('/produto/:subcategoria', async (req, resp) => {
    try {
        let produto = req.body;
        let subcategoria = req.params.subcategoria;
        await listarSucategoria(subcategoria);

        let produtoInserido = await salvarProduto(subcategoria, produto);
        resp.status(200).json(produtoInserido);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }

})

servidor.get('/produto', async (req, resp) => {
    try {
        let listaProdutos = await listarProdutos();
        if (listaProdutos.length === 0) {
            throw new Error("Nenhum produto encontrado!");
        }
        resp.status(200).json(listaProdutos);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
})

//novo get
servidor.get('/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        let listaProduto = await listarUmProduto(id);
        if (listaProduto.length < 1) {
            throw new Error("Produto não cadastrado!");
        }
        resp.status(200).json(listaProduto);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
})


servidor.put('/produto/:subcategoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const subcategoria = req.params.subcategoria;
        const produto = req.body;

        const produtoAtualizado = await editarProduto(subcategoria, id, produto);

        resp.status(200).json(produtoAtualizado);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.delete('/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        await deletarProduto(id);
        resp.status(200).json("produto excluido com sucesso!");
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});


export default servidor;