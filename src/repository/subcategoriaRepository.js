import con from "./conection.js";

export async function salvarSubcategoria(categoria, subcategoria) {
    try {
        
        let comando = `
            insert into subcategoria(
                nomeSubcategoria,
                categoriaid
            )
            values (?,?)
        `;

        let resp = await con.query(comando, [subcategoria.nomeSubcategoria, categoria]);
        let info = resp[0];
        subcategoria.id = info.insertId;

        if (resp[0].affectedRows !== 1) {
            throw new Error('Erro ao cadastrar Subcategoria!');
        }

        return subcategoria;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }

}

export async function listarSucategorias() {
    try {
        let comando = `select * from subcategoria`;

        let resp = await con.query(comando, []);
        let linhas = resp[0];

        

        if (linhas.length === 0) {
            throw new Error('Nenhuma subcategoria encontrada!');
        }

        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar a consulta SQL: ' + error.message);
    }

}

export async function listarSucategoria(id) {
    try {
        let comando = `SELECT * FROM subcategoria WHERE idSubcategoria = ?`;

        let resp = await con.query(comando, [id]);
        let linhas = resp[0];
        if (linhas.length === 0) {
            throw new Error('Subcategoria não encontrada!');
        }
        // Retorna a primeira linha encontrada (supondo que só deve haver uma subcategoria com o ID especificado)
        return linhas[0];
    } catch (error) {
        throw new Error('Erro ao executar a consulta SQL: ' + error.message);
    }
}


export async function listarProdutosSubcategoria(id) {
    try {
        let comando = "SELECT * FROM produto WHERE SubcategoriaProduto = ?"

        let resp = await con.query(comando, [id]);
        let linhas = resp[0];

        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar a consulta SQL: ' + error.message);
    }
}

export async function editarSubcategoria(id, subcategoria) {
    try {
        let comando = `
        UPDATE subcategoria SET
        nomeSubcategoria = ?
        WHERE idSubcategoria = ?
        `;

        let resp = await con.query(comando, [
            subcategoria.nomeSubcategoria,
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
        throw new Error('Erro ao executar SQL: ' + error.message);
    }
}



