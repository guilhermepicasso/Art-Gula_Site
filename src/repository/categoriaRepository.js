import con from "./conection.js";

export async function salvarCategoria(categoria) {
    let comando = `
    insert into subcategoria(
        nomeCategoria,
    )
    values (?)
    `;

    let resp = await con.query(comando, [
        categoria.nomeCategoria
    ]);
    let info = resp[0];
    categoria.id = info.insertId;
    return categoria;
}

export async function listarCategorias() {
    let comando = `SELECT * FROM categoria`;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function editarCategoria(id,categoria) {
    try {
        let comando = `
        UPDATE categoria SET
        nomeCategoria = ?
        WHERE idCategoria = ?
        `;

        let resp = await con.query(comando, [
            categoria.nomeCategoria,
            id
        ]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('categoria não encontrado ou não atualizado');
        }
        return categoria;

    } catch (error) {
        throw error;
    }
}

//verificar relacionamento antes da requisição
export async function deletarCategoria(id,categoria) {
    try {
        let comando = `DELETE FROM categoria WHERE idCategoria = ?`;
        let resp = await con.query(comando,[id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('categoria não DELETADA');
        }

        return categoria;
    } catch (error) {
        throw error;
    }
    
}