import con from "./conection.js";

export async function salvarSubcategoria(subcategoria) {
    let comando = `
    insert into subcategoria(
        nomeSubcategoria,
        categoria
    )
    values (?,?)
    `;

    let resp = await con.query(comando, [
        subcategoria.nomeSubcategoria,
        subcategoria.categoria
    ]);
    let info = resp[0];
    subcategoria.id = info.insertId;
    return subcategoria;
}

export async function listarSucategorias() {
    let comando = `
    select * from subcategoria`;

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

//listar todas subcategorias de uma categoria(falta)

export async function editarSubcategoria(id, subcategoria) {
    try {
        let comando = `
        UPDATE subcategoria SET
        nomeSubcategoria = ?,
        categoria = ? 
        WHERE idSubcategoria = ?
        `;

        let resp = await con.query(comando, [
            subcategoria.nomeSubcategoria,
            subcategoria.categoria,
            id
        ]);

        if (resp[0].affectedRows !== 1) {
            throw new Error('subcategoria não encontrado ou não atualizado');
        }
        return subcategoria;


    } catch (error) {
        throw error;
    }
}

//verifica o DELETE das tabelas relacionadas
export async function deletarSubcategoria(id, subcategoria) {
    try {
        // Acresentar depois DELETE FROM imagem WHERE subcategoriaImagem = ?
        let comando = `
            DELETE FROM produto WHERE subcategoriaProduto = ?
        `;

        let respProduto = await con.query(comando, [id]);

        comando = `DELETE FROM subcategoria WHERE idSubcategoria = ?`

        let respSubcategoria = await con.query(comando,[id]);


        if (respProduto[0].affectedRows !== 1 || respSubcategoria[0].affectedRows !== 1  ) {
            throw new Error('subcategoria não DELETADA');
        }

        return subcategoria;
    } catch (error) {
        // Trate o erro aqui conforme necessário
        throw error;
    }
}

