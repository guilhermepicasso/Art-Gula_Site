import con from "./conection.js";

function verificarConexao() {
    if (!con) {
        throw new Error('Sem conexão com o banco de dados!');
    }
}

export async function salvarCategoria(categoria) {
    try {
        verificarConexao();
        let comando = `insert into categoria(nomeCategoria) value (?)`;

        let resp = await con.query(comando, [
            categoria.nomeCategoria
        ]);
        let info = resp[0];
        categoria.id = info.insertId;

        if (resp[0].affectedRows !== 1) {
            throw new Error('Categoria não cadastrada!');
        }
        return categoria;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }

}

export async function listarCategorias() {
    try {
        verificarConexao();
        let comando = `SELECT * FROM categoria`;
        let resp = await con.query(comando, []);
        let linhas = resp[0];
        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }

}

export async function listarCategoria(id) {
    try {
        verificarConexao();
        let comando = `SELECT * FROM categoria WHERE idCategoria = ?`;
        let resp = await con.query(comando, [id]);
        let linhas = resp[0];
        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }

}

export async function listarSubcategoriasCategoria(id) {
    try {
        verificarConexao();
        let comando = "SELECT * FROM subcategoria WHERE categoriaId = ?"
        let resp = await con.query(comando, [id]);
        let linhas = resp[0];
        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
}

export async function editarCategoria(id, categoria) {
    try {
        verificarConexao();
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
            throw new Error('Categoria não encontrado ou não atualizada!');
        }
        return categoria;

    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
}

//verificar relacionamento antes da requisição
export async function deletarCategoria(id, categoria) {
    try {
        verificarConexao();
        let comando = `DELETE FROM categoria WHERE idCategoria = ?`;
        let resp = await con.query(comando, [id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('categoria não DELETADA');
        }

        return categoria;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }

}