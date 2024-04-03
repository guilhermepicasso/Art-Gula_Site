import con from "./conection.js";

export async function salvarEvento(evento) {
    //Verificar nomes no Banco Azure
    let comando = `
    insert into evento(
        tituloEvento,
        dataInicial,
        dataFinal,
        horaInicio,
        horaFim,
        descricaoEvento,
        imgEvento
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
    return evento;
}

export async function listarEventos() {
    let comando = `
    select * from evento`;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function editarEvento(id, evento) {
    try {
        let comando = `
        UPDATE evento SET
        tituloEvento = ?,
        dataInicial = ?,
        dataFinal = ?,
        horaInicio = ?,
        horaFim = ?,
        descricaoEvento = ?,
        imgEvento = ?
        WHERE idEvento = ?
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
            throw new Error('Evento não encontrado ou não atualizado');
        }

        return evento;
    } catch (error) {
        throw error;

    }
}

export async function deletarEvento(id, evento) {
    try {
        let comando = `
        DELETE FROM evento WHERE idEvento = ?
        `;

        let resp = await con.query(comando, [id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Evento não encontrado ou não deletado');
        }
        return evento;
    } catch (error) {
        throw error;
    }
}