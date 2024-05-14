import './index.scss';
import React, { useState } from 'react';

export default function ModalCardapio({ handleClose }) {
    const [cardapio, setCardapio] = useState('');
    const [grupo, setGrupo] = useState('');
    const [tags, setTags] = useState([]);

    const handleChangeCardapioInput = (event) => {
        setCardapio(event.target.value);
       
    };

    const salvarCardapio = (cardapio) => {
        alert('salvou o cardapio '+cardapio);
        console.log(tags);
        handleClose();
    }

    const handleChangeGrupoInput = (event) => {
        setGrupo(event.target.value);
    };

    const handleAddTag = () => {
        if (grupo.trim() !== '') {
            setTags([...tags, grupo.trim()]);
            setGrupo('');
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
                <label for="campoDeTexto">Nome Cardápio:</label>
                <input id="campoDeTexto" className="input_texto" value={cardapio} onChange={handleChangeCardapioInput} onKeyDown={(event) => {
                    // if (event.key === 'Enter') {
                    //     handleAddTag();
                    // }
                }} />
            </div>
            <div className='input_section'>
                <div className='grupos'>
                    <div className='selectTag'>
                        {tags.map((tag, index) => (
                            <div key={index} className='tag'>
                                <span className='tag_text'>{tag}</span>
                                <span className='tag_close' onClick={() => handleRemoveTag(index)}>&times;</span>
                            </div>
                        ))}
                        <input id="campoDeTexto" className="input_textoGrupo" placeholder='inserir aqui' value={grupo} onChange={handleChangeGrupoInput} onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleAddTag();
                            }
                        }} />
                    </div>
                        <a className='button_adcionar' onClick={handleAddTag}>+ Adicionar Grupo cardapio</a>
                </div>
            </div>
            <button className='button_salvar' onClick={() => {salvarCardapio(cardapio)}}>Salvar</button>
        </div>
    );

}