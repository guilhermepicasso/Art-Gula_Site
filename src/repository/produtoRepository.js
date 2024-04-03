import con from "./conection.js";

export async function salvarProduto(produto) {
    let comando = `
        insert into produto (
            nomeProduto, 
            descricaoProduto, 
            valorProduto, 
            pesoProduto,
            imagem,
            subcategoriaProduto 
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
    return produto;
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
            throw new Error('Produto não encontrado ou não atualizado');
        }

        return produto;
    } catch (error) {
        // Trate o erro aqui conforme necessário
        throw error;
    }
}

export async function listarProdutos() {
    let comando = `
      select *
        from produto
    `

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
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