import './index.scss';
import axios from 'axios';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import Tela_Info_Painel from '../../Components/TelaInfoPainel/TelaInfoPainel.js';
import React, { useEffect, useState } from 'react';

export default function Painel() {
    const [selectedItem, setSelectedItem] = useState("Cardápio");
    const [categorias, setCategorias] = useState(["Eventos", "Fotos"]);
    const [cardapios, setCardapios] = useState([]);
    const [selectedArray, setSelectedArray] = useState(cardapios);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        let escolha = [];
        escolha = selectedItem === 'Cardápio' ? categorias : cardapios;
        setSelectedArray(escolha);
        console.log(escolha);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                let listaCardapios = await axios.get('http://127.0.0.1:5000/subcategorias/categoria/7');
                const nomeSubcategorias = listaCardapios.data.map(item => item.nomeSubcategoria);
                console.log(nomeSubcategorias);
                setCardapios(nomeSubcategorias);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        }
        fetchData();
    }, [])



    //visibility: params.titulo === "Cardápio" ? 'visible' : 'hidden'
    return (
        <main className='telaPianel'>
            <section className='toolBar'>
                <div className='logo'>
                    <img src='/assets/img/logo circular.png' alt="Logo da loja" width="145" height="145" />
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
            <Tela_Info_Painel titulo={selectedItem} vetor={selectedArray}></Tela_Info_Painel>
        </main>
    )
}