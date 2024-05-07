import './index.scss';
import React, { useState } from 'react';

import { MdOutlineFileDownload } from "react-icons/md";

export default function ModalImagem() {

    const [texto, setTexto] = useState('');
    const [grupo, setGrupo] = useState('Fotos');

    const handleChangeGrupo = (grupo) => {
        setGrupo(grupo);
    }

    return (
        <div className='modal-imagem'>
            <div className='area_arquivo'>
                <a className={`arquivo_campo styleGrupo-${grupo}`}><MdOutlineFileDownload className={`icon_arquivo`} /></a>
            </div>

            <div className='button_section'>
                <button className='button' onClick={() => handleChangeGrupo('Fotos')} style={{
                    color: grupo === "Fotos" ? '#FF9E87' : '#FFFFFF',
                    backgroundColor: grupo === "Fotos" ? '#FFFFFF' : '#FF9E87'
                }}>Fotos</button>
                <button className='button' onClick={() => handleChangeGrupo('Carrosel')} style={{
                    color: grupo === "Carrosel" ? '#FF9E87' : '#FFFFFF',
                    backgroundColor: grupo === "Carrosel" ? '#FFFFFF' : '#FF9E87'
                }}>Carrosel</button>
            </div>
            <div>
                <label htmlFor="campoDeTexto1" className='input_label'>Título Foto:</label>
                <input id="campoDeTexto1" className="input_texto" value={texto} />
            </div>
            <div className='button_salvar'><a>Salvar</a></div>
        </div>
    );

}