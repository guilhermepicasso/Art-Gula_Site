import con from "./conection.js";

export async function salvarProduto(produto) {
    try {
        let comando = `
        insert into produto (
            nomeProduto, 
            descricaoProduto, 
            valorProduto, 
            pesoProduto, 
            subcategoriaProduto, 
            imagem
            )
        values (?, ?, ?, ?, ?, ?)
        `
        let resp = await con.query(comando, [
            produto.nomeProduto,
            produto.descricaoProduto,
            produto.valorProduto,
            produto.pesoProduto,
            produto.subcategoriaProduto,
            produto.imagem
        ]);
        let info = resp[0];

        produto.id = info.insertId;

        if (resp[0].affectedRows !== 1) {
            throw new Error('Erro ao cadastrar produto', Error);
        }

        return produto;
    } catch (error) {
        throw error;
    }

}

export async function editarProduto(id, produto) {
    try {
        let comando = `
            UPDATE produto SET 
            nomeProduto = ?, 
            descricaoProduto = ?, 
            valorProduto = ?, 
            pesoProduto = ?, 
            subcategoriaProduto = ?, 
            imagem = ?
            WHERE idProduto = ?
        `;

        let resp = await con.query(comando, [
            produto.nomeProduto,
            produto.descricaoProduto,
            produto.valorProduto,
            produto.pesoProduto,
            produto.subcategoriaProduto,
            produto.imagem,
            id
        ]);


        if (resp[0].affectedRows !== 1) {
            throw new Error('Produto não atualizado');
        }

        return produto;
    } catch (error) {
        // Trate o erro aqui conforme necessário
        throw error;
    }
}

export async function listarProdutos() {
    try {
        let comando = `select * from produto`

        let resp = await con.query(comando, []);
        let linhas = resp[0];

        if (linhas === 0) {
            throw new Error('Nenhum produto encontrado!');
        }

        return linhas;
    } catch (error) {
        throw error;
    }

}

// metodo para listar apenas um produto 
export async function listarUmProduto(id) {
    try {
        let comando = `
      SELECT * FROM produto WHERE idProduto = ?
    `;

        let resp = await con.query(comando, [id]);
        let linhas = resp[0];

        if (linhas === 0) {
            throw new Error('Produto não encontrado!');
        }

        return linhas;
    } catch (error) {
        throw error;

    }

}


export async function deletarProduto(id, produto) {
    try {
        let comando = `
            DELETE FROM produto WHERE idProduto = ?
        `;

        let resp = await con.query(comando, [id]);


        if (resp[0].affectedRows !== 1) {
            throw new Error('Produto não DELETADO');
        }

        return produto;
    } catch (error) {
        // Trate o erro aqui conforme necessário
        throw error;
    }
}