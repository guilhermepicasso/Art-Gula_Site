import './index.scss';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import TelaInfoPainel from '../../Components/TelaInfoPainel/TelaInfoPainel.js';
import React, { useEffect, useState } from 'react';
import { buscarDados } from '../../Service/api.service';

export default function Painel() {
    const categorias = { nomeSubcategorias: ["Eventos", "Fotos", "mais"], idSubcategorias: [0, 1, 2] };
    const [selectedItem, setSelectedItem] = useState("Painel de Controle");
    const [produtos, setProdutos] = useState();
    const [cardapios, setCardapios] = useState({});
    const [selectedArray, setSelectedArray] = useState({});

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        let escolha = [];
        escolha = selectedItem === 'Cardápio' ? categorias : cardapios;
        setSelectedArray(escolha);
    };

    useEffect(() => {
        setSelectedArray(categorias);
        async function fetchData() {
            try {
                const infoProdutos = await buscarDados("produto");
                setProdutos(infoProdutos);

                let listaCardapios = await buscarDados("subcategoria");
                if (listaCardapios && listaCardapios.length > 0) {
                    const nomeSubcategorias = listaCardapios.map(item => item.nomeSubcategoria);
                    const idSubcategorias = listaCardapios.map(item => item.idSubcategoria);
                    const teste = { nomeSubcategorias: nomeSubcategorias, idSubcategorias: idSubcategorias } 
                    setCardapios(teste);
                    console.log("teste é "+teste);
                } else {
                    console.log("Lista de cardápios vazia.");
                }
            } catch (error) {
                console.error('Erro ao buscar os dados PAINEL:', error);
            }
        }
        fetchData();
    }, [])

    return (
        <main className='telaPianel'>
            <section className='toolBar'>
                <div className='logo'>
                    <img src={'/assets/img/logo circular.png'} alt="Logo da loja" width="145" height="145" />
                </div>
                <div className='botoesNav'>
                    <nav onClick={() => handleSelectItem("Painel de Controle")} className='testePainel' style={{ color: selectedItem === "Painel de Controle" ? '#a97f2c' : '#9a9a9a' }}>
                        <div style={{ visibility: selectedItem === "Painel de Controle" ? 'visible' : 'hidden' }}></div>
                        <AiFillHome ></AiFillHome>
                        <p >Painel</p>
                    </nav>
                    <nav onClick={() => handleSelectItem("Cardápio")} className='testePainel' style={{ color: selectedItem === "Cardápio" ? '#a97f2c' : '#9a9a9a' }}>
                        <div style={{ visibility: selectedItem === "Cardápio" ? 'visible' : 'hidden' }}></div>
                        <MdOutlineMenuBook ></MdOutlineMenuBook>
                        <p>Cardápio</p>
                    </nav>
                </div>
            </section>
            <TelaInfoPainel titulo={selectedItem} vetor={selectedArray} produtos={produtos}></TelaInfoPainel>
        </main>
    )
}