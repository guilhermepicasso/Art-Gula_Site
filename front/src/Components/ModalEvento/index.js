import './index.scss';
import React, { useState } from 'react';

import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function ModalEvento() {

    const [texto, setTexto] = useState('');



    const handleChangeTextArea = (event) => {
        setTexto(event.target.value);
    };

    return (
        <div className='modal-evento'>
            <div className='area_arquivo'>
                <a className='arquivo_campo'><MdOutlineFileDownload className='icon_arquivo' /></a>
            </div>
            <div className='input_section'>
                <div>
                    <label for="campoDeTexto1" className='input_label'>Título do Evento:</label>
                    <input id="campoDeTexto1" className="input_texto" />
                </div>
                <div>
                    <label for="date1" className='input_label'>Dia:</label>
                    <input id="date1" className="input_date" type='date'/>
                    <MdOutlineCalendarMonth />
                    <label for="date2" className='input_label'> até Dia:</label>
                    <input id="date2" className="input_date"  type='date' />
                    <MdOutlineCalendarMonth />
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