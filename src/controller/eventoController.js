import {salvarEvento, editarEvento,listarEventos,deletarEvento, listarUmEvento} from "../repository/eventoRepository.js"

import { Router } from "express";
let servidor = Router();

servidor.get('/evento', async (req, resp) => {
    let listaEventos = await listarEventos();
    resp.send(listaEventos);
})

// novo get 
servidor.get('/evento/:id', async (req, resp) => {
    const id = req.params.id;
    let listaEventos = await listarUmEvento(id);
    resp.send(listaEventos);
});

servidor.post('/evento', async (req, resp) => {
    let evento = req.body;
    let eventoInserido = await salvarEvento(evento);
    resp.send(eventoInserido);
});

servidor.put('/evento/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const evento = req.body;

        const eventoAtualizado = await editarEvento(id, evento);

        res.status(200).json(eventoAtualizado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o evento', error: error.message });
    }
});

servidor.delete('/evento/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await deletarEvento(id);
        res.status(200).json("evento excluido com sucesso!");
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o evento', error: error.message });
    }
});

export default servidor;