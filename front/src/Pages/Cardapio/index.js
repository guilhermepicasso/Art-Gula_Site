import './index.scss';
import React, { useEffect, useState } from 'react';
import GrupoCardapio from '../../Components/grupoCardapio/GrupoCardapio';
import { Link } from 'react-router-dom';
import ButtonList from '../../Components/ButtonList/ButtonList';
import dados from "../../apoio/banco.json";


export default function Cardapio() {
    const [selectedItem, setSelectedItem] = useState("Loja");
    const [produtos, setProdutos] = useState(dados);
    const [subcategorias, setSubcategorias] = useState([]);
    const [produtosPorGrupo, setProdutosPorGrupo] = useState({});

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        const produtosFiltrados = produtos.filter(produto => produto.subcategoria === item);
        const produtosPorGrupo = {};
        produtosFiltrados.forEach(produto => {
            if (!produtosPorGrupo[produto.grupo]) {
                produtosPorGrupo[produto.grupo] = [];
            }
            produtosPorGrupo[produto.grupo].push(produto);
        });
        setProdutosPorGrupo(produtosPorGrupo);
    };

    useEffect(() => {
        const subcategoriasArray = [];

        dados.forEach(item => {
            if (!subcategoriasArray.includes(item.subcategoria)) {
                subcategoriasArray.push(item.subcategoria);
            }
        });
        setSubcategorias(subcategoriasArray);
        setProdutos(dados);
        handleSelectItem(selectedItem);
        console.log("effect funcionando");
    }, [selectedItem]);

    return (
        <div className="bodyCPrincipal">
            <header>
                <div className='menu'>
                    <Link to="/">Home</Link>
                    <ButtonList items={subcategorias} onSelect={handleSelectItem}></ButtonList>
                    <a href="">Contato</a>
                </div>
                <div className='logo'><img src='/assets/img/logo circular.png'></img></div>
            </header>
            <div className="bodyCardapio">

                <div className="moldurasuperior">
                    <img className="moldura molduraesquerda" src='/assets/img/moldura.png'></img>
                    <h1>Menu {selectedItem}</h1>
                    <img className="moldura molduradireita" src='/assets/img/moldura.png'></img>
                </div>
                <div className="container">
                    <GrupoCardapio produtos={produtosPorGrupo}></GrupoCardapio>
                </div>
                <div className="moldurainferior">
                    <img className="moldura molduraesquerda" src='/assets/img/moldura.png'></img>
                    <h1>Atualizações em: 18/10/2023</h1>
                    <img className="moldura molduradireita" src='/assets/img/moldura.png'></img>
                </div>
            </div>
        </div>
    )
}