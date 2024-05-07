import './index.scss';
import React, { useState } from 'react';

import { MdOutlineFileDownload } from "react-icons/md";

export default function ModalCardapio() {
    const [cardapio, setCardapio] = useState('');
    const [tags, setTags] = useState([]);

    const handleChangeCardapioInput = (event) => {
        setCardapio(event.target.value);
    };

    const handleAddTag = () => {
        if (cardapio.trim() !== '') {
            setTags([...tags, cardapio.trim()]);
            setCardapio('');
        }
    };

    const handleRemoveTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <div className='modal-cardapio'>
            <div className='input_section'>
                <div>
                    <label for="campoDeTexto">Nome Do Cardápio:</label>
                    <input id="campoDeTexto" className="input_texto" value={cardapio} onChange={handleChangeCardapioInput} onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleAddTag();
                        }
                    }} />
                </div>

                <div className='selectTag'>
                    {tags.map((tag, index) => (
                        <div key={index} className='tag'>
                            <span className='tag_text'>{tag}</span>
                            <span className='tag_close' onClick={() => handleRemoveTag(index)}>&times;</span>
                        </div>
                    ))}
                </div>

                <a className='button_adcionar' onClick={handleAddTag}>+ Adicionar Grupo cardapio</a>

                <div className='button_salvar'><a>Salvar</a></div>
            </div>
        </div>
    );

}