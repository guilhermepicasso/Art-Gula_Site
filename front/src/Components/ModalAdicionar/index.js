import './index.scss';
import axios from "axios";
import React, { useEffect, useState } from 'react';

import { MdOutlineFileDownload } from "react-icons/md";
import { buscarDados } from '../../Service/api.service';

export default function ModalAdicionar({ cardapio, handleClose }) {
    const [descricao, setDescricao] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [grupoEscolhido, setGrupoEscolhido] = useState("");
    const [precoProduto, setPrecoProduto] = useState('');
    const [pesoProduto, setPesoProduto] = useState('');
    const [arquivoImagem, setArquivoImagem] = useState(null);

    const [imagem, setImagem] = useState(null);


    const [grupos, setGrupos] = useState([]);
    const d = cardapio;

    const handleChangeTextArea = (event, tipo) => {
        const valor = event.target.value;
        if (tipo === "descricao") {
            setDescricao(valor);
        } else if (tipo === "nomeProduto") {
            setNomeProduto(valor);
        } else if (tipo === "grupo") {
            setGrupoEscolhido(valor);
        } else if (tipo === "peso") {
            setPesoProduto(valor);
        } else if (tipo === "preco") {
            setPrecoProduto(valor);
        }

    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setArquivoImagem(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            console.log("Nenhum arquivo inserido!");
        }
    };

    const salvarProduto = async () => {
        if (!nomeProduto || !descricao || !grupoEscolhido || !imagem) {
            alert("Todos os campos devem ser preenchidos");
            return;
        }

        try {
            const body = {
                nomeProduto: nomeProduto,
                descricaoProduto: descricao,
                valorProduto: precoProduto,
                pesoProduto: ""
            };
            const resp = await axios.post(`http://127.0.0.1:5000/produto/${d}/${grupoEscolhido}`, body);
            if (resp.status === 200) {
                const formData = new FormData();
                formData.append('imgProduto', arquivoImagem);
                const uploadConfig = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                const uploadResponse = await axios.put(`http://127.0.0.1:5000/produto/imagem/${resp.data.id}`, formData, uploadConfig);
                if (uploadResponse.status !== 202) {
                    alert('Erro ao enviar a imagem');
                    return;
                }
                alert('Produto ' + nomeProduto + " adicionado com sucesso!");
                handleClose();
            }
        } catch (error) {
            alert("Erro ao salvar o cardápio! " + error);
        }



        // handleClose()
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const infoGrupos = await buscarDados(`grupo/subcategoria/${d}`);
                setGrupos(infoGrupos);
                console.log(infoGrupos);

            } catch (error) {
                console.error('Erro ao buscar os dados PAINEL:', error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='modal-adicionar'>
            <div className='area_arquivo'>
                <label className='arquivo_campo'>
                    <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                    {imagem === null ?
                        <MdOutlineFileDownload className='icon_arquivo' /> :
                        <img src={imagem} alt="Imagem Selecionada" className='imagem-arquivo' />
                    }
                </label>
            </div>
            <div className='input_section'>
                <div className='camposInput'>
                    <label for="campoDeTexto1" className='input_label'>Nome Produto:</label>
                    <input id="campoDeTexto1" className="input_texto" value={nomeProduto} onChange={(e) => handleChangeTextArea(e, "nomeProduto")} />
                </div>
                <div className='camposInput'>
                    <label for="campoDeTexto2" className='input_label'>Preço:</label>
                    <input id="campoDeTexto2" className="input_texto" style={{ width: 120 }} value={precoProduto} onChange={(e) => handleChangeTextArea(e, "preco")} />
                </div>
                <div className='camposInput'>
                    <label for="campoDeTexto3" className='input_label'>Peso/Qtd:</label>
                    <input id="campoDeTexto3" className="input_texto" style={{ width: 120 }} value={pesoProduto} onChange={(e) => handleChangeTextArea(e, "peso")} />
                </div>

                <div className='select'>
                    <select id="select" class="select_grupo" onChange={(e) => handleChangeTextArea(e, "grupo")}>
                        <option value="" disabled selected hidden>Selecionar Grupo</option>
                        {grupos.map(grupo => (
                            <option key={grupo.idGrupo} value={grupo.idGrupo} >{grupo.nomeGrupo}</option>
                        ))}
                    </select>
                </div>

                <div className='text_area'>
                    <label htmlFor="campo_texto">Descrição:</label>
                    <textarea id="campo_texto" className="textarea-field" value={descricao} onChange={(e) => handleChangeTextArea(e, "descricao")} />
                </div>
                <div className='button_salvar' onClick={() => { salvarProduto() }}><a>Salvar</a></div>

            </div>
        </div>
    );

}