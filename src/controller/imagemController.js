import multer from "multer";

import { salvarImagem, listarImagems, editarImagem, deletarImagem, buscarImagem, listarImagensSubcategoria, alterarImagem } from "../repository/imagemRepository.js";

import { Router } from "express";
import { listarSucategoria } from "../repository/subcategoriaRepository.js";
let servidor = Router();

const upload = multer({ dest: 'storage/imagensCarrosel' })

servidor.put('/imagem/imagensCarrosel/:id', upload.single('imgCarrosel'), async (req, resp) => {
    try {
        let id = req.params.id;
        let imagem = req.file;

        let linhasAfetadas = await alterarImagem(id,imagem);
        if (linhasAfetadas == 0) {
            resp.status(404).send();
        }else{
            resp.status(202).send();
        }
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }

})

servidor.post('/imagem/:subcategoria', async (req, resp) => {
    try {
        let imagem = req.body;
        let subcategoria = req.params.subcategoria;
        await listarSucategoria(subcategoria);

        let imagemInserido = await salvarImagem(subcategoria, imagem);
        resp.status(200).json(imagemInserido);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.get('/imagem', async (req, resp) => {
    try {
        let listaImagens = await listarImagems();
        if (listaImagens.length === 0) {
            throw new Error("Nenhuma imagem encontrada!");
        }
        resp.status(200).json(listaImagens);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.get('/imagem/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        let listaImagens = await buscarImagem(id);
        if (listaImagens.length < 1) {
            throw new Error("Imagem não encontrada!");
        }
        resp.status(200).json(listaImagens);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.get('/imagem/subcategoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        let listaImagens = await listarImagensSubcategoria(id);
        if (listaImagens.length < 1) {
            throw new Error("Nenhuma imagem nesta subcategoria!");
        }
        resp.status(200).json(listaImagens);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});


servidor.put('/imagem/:subcategoria/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const subcategoria = req.params.subcategoria;
        const imagem = req.body;

        const imagemAtualizada = await editarImagem(subcategoria, id, imagem);

        resp.status(200).json(imagemAtualizada);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

servidor.delete('/imagem/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        await deletarImagem(id);
        resp.status(200).json("Imagem excluida com sucesso!");
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

export default servidor;