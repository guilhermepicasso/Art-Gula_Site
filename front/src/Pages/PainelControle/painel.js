import './painel.scss';
import logo from '../../assets/img/logo circular.png';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import Tela_Info_Painel from '../../Components/TelaInfoPainel/TelaInfoPainel.js';
import React, { useState } from 'react';

export default function Painel() {
    const [selectedItem, setSelectedItem] = useState("Painel de Controle");
    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };
    return (
        <main className='telaPianel'>
            <section className='toolBar'>
                <div className='logo'>
                    <img src={logo} alt="Logo da loja" width="145" height="145" />
                </div>
                <div className='botoesNav'>
                    <nav onClick={() => handleSelectItem("Cardápio")} className='testePainel' style={{ color: "black" }}>
                        <div style={{ background: "transparent" }}></div>
                        <MdOutlineMenuBook ></MdOutlineMenuBook>
                        <p>Cardápio</p>
                    </nav>
                    <nav onClick={() => handleSelectItem("Painel de Controle")} className='testePainel'>
                        <div></div>
                        <AiFillHome ></AiFillHome>
                        <p >Painel</p>
                    </nav>
                </div>
            </section>
            <Tela_Info_Painel titulo={selectedItem}></Tela_Info_Painel>
        </main>
    )
}