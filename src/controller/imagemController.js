import {salvarImagem,listarImagems,editarImagem,deletarImagem} from "../repository/imagemRepository.js";

import { Router } from "express";
let servidor = Router();

servidor.get('/imagem', async (req, resp) => {
    let listaImagens = await listarImagems();
    resp.send(listaImagens);
});

servidor.post('/imagem', async (req, resp) => {
    let imagem = req.body;
    let imagemInserido = await salvarImagem(imagem);
    resp.send(imagemInserido);
});

servidor.put('/imagem/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const imagem = req.body;

        const imagemAtualizado = await editarImagem(id, imagem);

        resp.status(200).json(imagemAtualizado);
    } catch (error) {
        resp.status(500).json({ message: 'Erro ao atualizar a imagem', error: error.message });
    }
});

//Terminar Delete imagem
servidor.delete('/imagem/:id', async (req, resp) => {
    try {
        
    } catch (error) {
        
    }
});

export default servidor;