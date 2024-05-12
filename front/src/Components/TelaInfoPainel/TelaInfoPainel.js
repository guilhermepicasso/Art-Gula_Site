import './index.scss';
import axios from 'axios';
import { MdEdit, MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';


export default function Tela_Info_Painel(params) {
    const [produtos, setProdutos] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                let produtos = await axios.get('http://127.0.0.1:5000/produto');
                let infoProdutos = produtos.data;
                setProdutos(infoProdutos);
                console.log(infoProdutos);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        }
        fetchData();
    }, [produtos]);


    async function deletar(params) {
        try {
            await axios.delete(`http://127.0.0.1:5000/produto/${params}`)
            console.log("produto deletado");
        } catch (error) {
            console.log("erro ao deletar produto", error);
        }
    }

    const renderizarProdutosPorSubcategoria = (nomeSubcategoria) => {

        if (!produtos || produtos.length === 0) {
            return (
                <div className='corpoTabela itens'>
                    <p>Não há nada cadastrado ainda!</p>
                </div>
            );
        }

        const produtosFiltrados = produtos.filter(produto => produto.nomeSubcategoria === nomeSubcategoria);

        return produtosFiltrados.map(produto => (
            <div className='corpoTabela itens'>
                <p>{produto.nomeProduto}</p>
                <p>{produto.nomeGrupo}</p>
                <div>
                    <button className='editar'><MdEdit /> Editar</button>
                    <button className='deletar' onClick={() => deletar(produto.idProduto)}><MdDelete /> Deletar</button>
                </div>
            </div>
        ));
    };



    return (
        <section className='telaInfo'>
            <h1 className='titulo'>{params.titulo}</h1>

            <button className='addCardapio add' style={{ visibility: params.titulo === "Cardápio" ? 'visible' : 'hidden' }}>
                <FaPlus />
                Adicionar Cardápio
            </button>

            <div className='tabelas'>
                {params.vetor.map(item =>
                    <div className='tabela'>
                        <div className='tituloTabela'>
                            <h1>{item}</h1>
                            <div className='botoesTituloTabela'>
                                <button className='deletar' style={{ visibility: params.titulo === "Cardápio" ? 'visible' : 'hidden' }}>
                                    <MdDelete />
                                    Deletar
                                </button>
                                <button className='editar' style={{ visibility: params.titulo === "Cardápio" ? 'visible' : 'hidden' }}>
                                    <MdEdit />
                                    Editar
                                </button>
                                <button className='add'><FaPlus /> Adicionar</button>
                            </div>
                        </div>
                        <div className='cabecalhoTabela itens'>
                            <p>Título</p>
                            <p>Grupo</p>
                            <p>Ações</p>
                        </div>

                        {renderizarProdutosPorSubcategoria(item)}
                    </div>
                )}
            </div>
        </section>
    )
}