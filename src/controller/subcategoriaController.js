import { salvarSubcategoria,listarSucategorias,editarSubcategoria,deletarSubcategoria } from "../repository/subcategoriaRepository.js";
import {listarProdutosSubcategorias, deletarProduto} from "../repository/produtoRepository.js"
import { Router } from "express";
let servidor = Router();

servidor.get('/subcategoria', async (req, resp) => {
    let listaSucategorias = await listarSucategorias();
    resp.send(listaSucategorias);
});

servidor.post('/subcategoria', async (req, resp) => {
    let subcategoria = req.body;
    let subcategoriaInserido = await salvarSubcategoria(subcategoria);
    resp.send(subcategoriaInserido);
});

servidor.put('/subcategoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const subcategoria = req.body;

        const subcategoriaAtualizado = await editarSubcategoria(id, subcategoria);

        resp.status(200).json(subcategoriaAtualizado);
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao atualizar a subcategoria', error: error.message });
    }
});

servidor.delete('/subcategoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produtosSubcategoria = await listarProdutosSubcategorias(id);

        for (const produto of produtosSubcategoria) {
            await deletarProduto(produto.idProduto, produto);
        }

        await deletarSubcategoria(id);
        resp.status(200).json("subcategoria excluido com sucesso!");
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao excluir a subcategoria', error: error.message });
    }
});


export default servidor;