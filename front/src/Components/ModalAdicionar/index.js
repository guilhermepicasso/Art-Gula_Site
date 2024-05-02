import './index.scss';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { MdOutlineFileDownload } from "react-icons/md";

export default function ModalAdicionar() {

    const [texto, setTexto] = useState('');



    const handleChangeTextArea = (event) => {
        setTexto(event.target.value);
    };

    return (
        <div className='modal-adicionar'>
            <div className='area_arquivo'>
                <a className='arquivo_campo'><MdOutlineFileDownload className='icon_arquivo' /></a>
            </div>
            <div className='input_section'>
                <div>
                    <label for="campoDeTexto1" className='input_label'>Nome Produto:</label>
                    <input id="campoDeTexto1" className="input_texto" />
                </div>
                <div>
                    <label for="campoDeTexto2" className='input_label'>Preço:</label>
                    <input id="campoDeTexto2" className="input_texto" style={{ width: 120 }} />
                </div>

                <div className='select'>
                    <select id="select" class="select_grupo">
                        <option value="" disabled selected hidden>Grupo</option>
                        <option value="grupo 1">doceria</option>
                        <option value="grupo 2">branch</option>
                        <option value="grupo 3">loja</option>
                    </select>
                </div>

                <div className='text_area'>
                    <label htmlFor="campo_texto">Descrição:</label>
                    <textarea id="campo_texto" className="textarea-field" value={texto} onChange={handleChangeTextArea} />
                </div>
                <div className='button_salvar'><a>Salvar</a></div>
                
            </div>
        </div>
    );

}