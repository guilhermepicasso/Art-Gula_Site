import con from "./conection.js";

export async function salvarImagem(subcategoria, imagem) {
    try {
        let comando = `
            insert into imagem(
                titulo,
                nomeImagem,
                subcategoriaImagem
            )
            values (?,?,?)
        `;

        let resp = await con.query(comando, [
            imagem.titulo,
            imagem.nomeImagem,
            subcategoria
        ]);
        let info = resp[0];
        imagem.id = info.insertId;
        if (resp[0].affectedRows !== 1) {
            throw new Error('Erro ao inserir imagem!');
        }
        return imagem;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }

}

export async function listarImagems() {
    try {
        let comando = `select * from imagem`;
        let resp = await con.query(comando, []);
        let linhas = resp[0];
        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
};

export async function buscarImagem(id) {
    try {
        let comando = `select * from imagem where idImagem = ?`;
        let resp = await con.query(comando, [id]);
        let linhas = resp[0];
        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
};

export async function listarImagensSubcategoria(id) {
    try {
        let comando = "SELECT * FROM imagem WHERE SubcategoriaImagem = ?"

        let resp = await con.query(comando, [id]);
        let linhas = resp[0];

        return linhas;
    } catch (error) {
        throw new Error('Erro ao executar a consulta SQL: ' + error.message);
    }
}

export async function editarImagem(subcategoria, id, imagem) {
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
            subcategoria,
            id
        ]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Imagem não encontrada ou não atualizada');
        }
        return imagem;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
};

export async function deletarImagem(id, imagem) {
    try {
        let comando = `DELETE FROM imagem WHERE idImagem = ?`;
        let resp = await con.query(comando, [id]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('Imagem não DELETADO');
        }
        return imagem;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
};

export async function alterarImagem(id, caminho) {
    try {
        let comando = `
      update imagem
         set nomeImagem = ?
       where idImagem = ?
    `
  
    let resp = await con.query(comando, [caminho, id]);
    let info = resp[0];
  
    return info.affectedRows;
    } catch (error) {
        throw new Error('Erro ao executar o comando SQL: ' + error.message);
    }
    
  }