import con from "./conection.js";

export async function salvarSubcategoria(subcategoria) {
    try {
        let comando = `
            insert into subcategoria(
                nomeSubcategoria,
                categoriaid
            )
            values (?,?)
        `;

        let resp = await con.query(comando, [
            subcategoria.nomeSubcategoria,
            subcategoria.categoria
        ]);
        let info = resp[0];
        subcategoria.id = info.insertId;

        if (resp[0].affectedRows !== 1) {
            throw new Error('Erro ao cadastrar Subcategoria!');
        }

        return subcategoria;
    } catch (error) {
        throw error;
    }

}

export async function listarSucategorias() {
    try {
        let comando = `select * from subcategoria`;

        let resp = await con.query(comando, []);
        let linhas = resp[0];

        if (linhas.length === 0) {
            throw new Error('Nenhuma categoria encontrada!');
        }

        return linhas;
    } catch (error) {
        throw error;
    }

}

export async function editarSubcategoria(id, subcategoria) {
    try {
        let comando = `
        UPDATE subcategoria SET
        nomeSubcategoria = ?,
        categoriaid = ? 
        WHERE idSubcategoria = ?
        `;

        let resp = await con.query(comando, [
            subcategoria.nomeSubcategoria,
            subcategoria.categoria,
            id
        ]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Subcategoria não encontrada ou não atualizada');
        }

        return subcategoria;
    } catch (error) {
        throw new Error('Erro ao executar a consulta SQL: ' + error.message);
    }
}


//verifica o DELETE das tabelas relacionadas
export async function deletarSubcategoria(id, subcategoria) {
    try {

        let comando = `
            DELETE FROM subcategoria WHERE idSubcategoria = ?
        `;

        let resp = await con.query(comando, [id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('subcategoria não DELETADA');
        }

        return subcategoria;
    } catch (error) {
        // Trate o erro aqui conforme necessário
        throw error;
    }
}

export async function listarProdutosSubcategoria(id) {
    try {
        let comando = "SELECT * FROM produto WHERE SubcategoriaProduto = ?"

        let resp = await con.query(comando, [id]);
        let linhas = resp[0];

        if (linhas.length === 0) {
            throw new Error('Nenhum produto encontrado!');
        }

        return linhas;
    } catch (error) {
        throw error;
    }
}

