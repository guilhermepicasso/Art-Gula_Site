import con from "./conection.js";

export async function salvarEvento(evento) {
    try {
        let comando = `
            insert into eventos(
                tituloEvento,
                dataInicial,
                dataFinal,
                horaInicio,
                horaFim,
                descricaoEvento,
                imagem
            )
            values (?,?,?,?,?,?,?)
        `;

        let resp = await con.query(comando, [
            evento.tituloEvento,
            evento.dataInicial,
            evento.dataFinal,
            evento.horaInicio,
            evento.horaFim,
            evento.descricaoEvento,
            evento.imgEvento
        ]);
        let info = resp[0];

        evento.id = info.insertId;

        if (resp[0].affectedRows !== 1) {
            throw new Error('Erro ao criar evento');
        }

        return evento;
    } catch (error) {
        return error.message === 'Erro ao criar evento' ? 'Erro ao criar evento!' : 'Erro no método salvarEvento: ' + error.message;
    }
}

export async function listarEventos() {
    try {
        let comando = `select * from eventos`;

        let resp = await con.query(comando, []);
        let linhas = resp[0];

        if (linhas.length === 0) {
            throw new Error('Nenhum Evento encontrado!');
        }

        return linhas;
    } catch (error) {
        return error.message === 'Nenhum Evento encontrado!' ? 'Nenhum Evento encontrado!' : 'Erro ao buscar eventos: ' + error.message;
    }

}

// metodo para listar apenas um evento 
export async function listarUmEvento(id) {
    try {
        let comando = `SELECT * FROM eventos WHERE idEventos = ?`;

        let resp = await con.query(comando, [id]);
        let linhas = resp[0];

        if (linhas.length === 0) {
            throw new Error('Evento não encontrado');
        }

        return linhas;
    } catch (error) {
        if (error.message === 'Evento não encontrado') {
            return error.message;
        } else {
            return error.message === 'Evento não encontrado' ? 'Evento não encontrado' : 'Erro ao buscar evento: ' + error.message;
        }
    }
}


export async function editarEvento(id, evento) {
    try {
        let comando = `
        UPDATE eventos SET
        tituloEvento = ?,
        dataInicial = ?,
        dataFinal = ?,
        horaInicio = ?,
        horaFim = ?,
        descricaoEvento = ?,
        imagem = ?
        WHERE idEventos = ?
        `;

        let resp = await con.query(comando, [
            evento.tituloEvento,
            evento.dataInicial,
            evento.dataFinal,
            evento.horaInicio,
            evento.horaFim,
            evento.descricaoEvento,
            evento.imgEvento,
            id
        ]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Não atualizado');
        }

        return evento;
    } catch (error) {
        return error.message === 'Não atualizado' ? 'Erro ao atualizar evento!' : 'Erro com o método atualizar: ' + error.message;
    }
}

export async function deletarEvento(id, evento) {
    try {
        let comando = `
        DELETE FROM eventos WHERE idEventos = ?
        `;

        let resp = await con.query(comando, [id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Não deletado');
        }
        return evento;
    } catch (error) {
        return error.message === 'Não deletado' ? 'Erro ao deletar evento!' : 'Erro com o método deletar: ' + error.message;
    }
}