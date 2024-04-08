import { salvarSubcategoria, listarSucategorias, editarSubcategoria, deletarSubcategoria, listarProdutosSubcategoria, listarSucategoria } from "../repository/subcategoriaRepository.js";
import { deletarProduto } from "../repository/produtoRepository.js"
import { Router } from "express";
import { listarCategoria } from "../repository/categoriaRepository.js";
let servidor = Router();

servidor.post('/subcategoria/:categoria', async (req, resp) => {
    try {
        let subcategoria = req.body;
        let categoria = req.params.id;
        let listaCategorias = await listarCategoria(categoria);
        if (listaCategorias.length < 1) {
            throw new Error("Nenhuma categoria Encontrada!");
        }
        let subcategoriaInserido = await salvarSubcategoria(categoria, subcategoria);
        resp.status(200).json(subcategoriaInserido);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }

});

servidor.get('/subcategoria', async (req, resp) => {
    try {
        let listaSucategorias = await listarSucategorias();
        resp.status(200).json(listaSucategorias);
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao listar subcategorias', error: error.message });
    }
});

servidor.get('/subcategoria/:id', async (req, resp) => {
    try {
        let subcategoria = req.params.id;
        let exibirSubcategoria = await listarSucategoria(subcategoria);
        resp.status(200).json(exibirSubcategoria);
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao buscar subcategoria', error: error.message });
    }
});

servidor.get('/produtosDaSubcategoria/:id', async (req, resp) => {
    try {
        let subcategoria = req.params.id;
        let listaProdutos = await listarProdutosSubcategoria(subcategoria);
        resp.status(200).json(listaProdutos);
    } catch (error) {
        resp.status(500).json({ message: `Erro ao buscar produtos da subcategoria ${id}`, error: error.message });
    }

});

servidor.put('/subcategoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const subcategoria = req.body;

        const subcategoriaAtualizado = await editarSubcategoria(id, subcategoria);

        resp.status(200).json(subcategoriaAtualizado);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.delete('/subcategoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produtosSubcategoria = await listarProdutosSubcategoria(id);

        if (produtosSubcategoria.length > 0) {
            for (const produto of produtosSubcategoria) {
                await deletarProduto(produto.idProduto, produto);
            }
        }

        await deletarSubcategoria(id);
        resp.status(200).json("subcategoria excluida com sucesso!");
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});


export default servidor;