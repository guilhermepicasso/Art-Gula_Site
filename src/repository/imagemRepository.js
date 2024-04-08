import con from "./conection.js";

export async function salvarImagem(imagem) {
    let comando = `
    insert into imagem(
        titulo,
        nomeImagem,
        subcategoriaImagem,
    )
    values (?,?,?)
    `;

    let resp = await con.query(comando,[
        imagem.titulo,
        imagem.nomeImagem,
        imagem.subcategoriaImagem
    ]);
    let info = resp[0];
    imagem.id = info.insertId;
    return imagem;
}

export async function listarImagems() {
    let comando = `
    select * from imagem`;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function editarImagem(id, imagem) {
    try {
        let comando = `
        UPDATE imagem SET
        titulo = ?,
        nomeImagem = ? ,
        subcategoriaImagem = ?
        WHERE idImagem = ?
        `;

        let resp = await con.query(comando, [
            imagem.titulo,
            imagem.nomeImagem,
            imagem.subcategoriaImagem,
            id
        ]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('imagem não encontrada ou não atualizada');
        }
        return imagem;


    } catch (error) {
        throw error;
    }
}

//verifica o DELETE das tabelas relacionadas
export async function deletarImagem(id, imagem) {
    try {
        
        let comando = `DELETE FROM imagem WHERE idImagem = ?`;
        let resp = await con.query(comando, [id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('imagem não DELETADA');
        }

        return imagem;
    } catch (error) {
        // Trate o erro aqui conforme necessário
        throw error;
    }
}