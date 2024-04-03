import { salvarProduto, editarProduto, listarProdutos, deletarProduto , listarUmProduto } from "../repository/produtoRepository.js";

import { Router } from "express";
let servidor = Router();

servidor.get('/produto', async (req, resp) => {
    let listaProdutos = await listarProdutos();
    resp.send(listaProdutos);
})

//novo get
servidor.get('/produto/:id', async (req, resp) => {
    const id = req.params.id;
    let listaProdutos = await listarUmProduto(id);
    resp.send(listaProdutos);
})

servidor.post('/produto', async (req, resp) => {
    let produto = req.body;

    let produtoInserido = await salvarProduto(produto);
    resp.send(produtoInserido);
})

servidor.put('/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produto = req.body;

        const produtoAtualizado = await editarProduto(id, produto);

        resp.status(200).json(produtoAtualizado);
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao atualizar o produto', error: error.message });
    }
});

servidor.delete('/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        await deletarProduto(id);
        resp.status(200).json("produto excluido com sucesso!");
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao excluir o produto', error: error.message });
    }
});


export default servidor;