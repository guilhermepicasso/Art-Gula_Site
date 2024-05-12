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
                descricaoEvento
            )
            values (?,?,?,?,?,?)
        `;

        let resp = await con.query(comando, [
            evento.tituloEvento,
            evento.dataInicial,
            evento.dataFinal,
            evento.horaInicio,
            evento.horaFim,
            evento.descricaoEvento
        ]);
        let info = resp[0];

        evento.id = info.insertId;

        if (resp[0].affectedRows !== 1) {
            throw new Error('Erro ao criar evento');
        }

        return evento;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
}

export async function listarEventos() {
    try {
        let comando = `select * from eventos`;
        let resp = await con.query(comando, []);
        let linhas = resp[0];
        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
};

// metodo para listar apenas um evento 
export async function listarUmEvento(id) {
    try {
        let comando = `SELECT * FROM eventos WHERE idEventos = ?`;
        let resp = await con.query(comando, [id]);
        let linhas = resp[0];
        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
};


export async function editarEvento(id, evento) {
    try {
        let comando = `
        UPDATE eventos SET
        tituloEvento = ?,
        dataInicial = ?,
        dataFinal = ?,
        horaInicio = ?,
        horaFim = ?,
        descricaoEvento = ?
        WHERE idEventos = ?
        `;

        let resp = await con.query(comando, [
            evento.tituloEvento,
            evento.dataInicial,
            evento.dataFinal,
            evento.horaInicio,
            evento.horaFim,
            evento.descricaoEvento,
            id
        ]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Evento não encontrado ou não atualizado');
        }

        return evento;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
}

export async function deletarEvento(id, evento) {
    try {
        let comando = `DELETE FROM eventos WHERE idEventos = ?`;
        let resp = await con.query(comando, [id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Evento não deletado');
        }
        return evento;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
}

export async function alterarImagem(id, caminho) {
    try {
        let comando = `
        UPDATE eventos SET
        imagem = ?
        WHERE idEventos = ?
        `;

        let resp = await con.query(comando, [caminho, id]);
        let info = resp[0];

        return info.affectedRows;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }

}