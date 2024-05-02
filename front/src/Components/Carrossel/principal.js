import './index.scss';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

export default function CarrosselPrincipal(props) {
    const galeria = props.imagens
    const [titulo, setTitulo] = useState(galeria[0].titulo);
    const [imagem, setImagem] = useState(galeria[0].imagem);

    const handleChange = (event, newValue) => {
        galeria.forEach((foto, index) => {
            if (newValue === (index + 1)) {
                setImagem(foto.imagem);
                setTitulo(foto.titulo);
            }
        });
    };

    return (
        <div className='carrosselPrincipal' style={{ backgroundImage: `url(${imagem})`}}>
            <div className='displayCarrossel'>
                <h1>
                    {titulo}
                </h1>
                <button style={{ backgroundColor: "#a97f2c", color: "#f6cabc" }}>Faça seu pedido <IoLogoWhatsapp fontSize="2rem" /></button>
                <button style={{ backgroundColor: "#f6cabc", color: "#a97f2c" }}>Siga a gente <AiFillInstagram fontSize="2rem" /></button>
            </div>
            <div className='btnSelecionar'>
                <Stack spacing={0}>
                    <Pagination
                        count={galeria.length}
                        onChange={handleChange}
                        size="small"
                        hidePrevButton
                        hideNextButton
                        sx={{
                            '& .MuiPaginationItem-root': {
                                border: "2px solid #a97f2c",
                                color: 'transparent',
                            },
                            '& .Mui-selected': {
                                backgroundColor: '#FDE6E8'
                            },
                        }}
                    />
                </Stack>
            </div>
        </div>
    )
}