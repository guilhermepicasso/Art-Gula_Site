import './index.scss';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { MdOutlineMenuBook } from "react-icons/md";

export default function CarrosselPrincipal(props) {
    const galeria = props.imagens
    const [titulo, setTitulo] = useState(galeria[0].titulo);
    const [imagem, setImagem] = useState(galeria[0].imagem);

    const handleChange = (event, newValue) => {
        galeria.forEach((foto, index) => {
            if (newValue === (index+1)) {
                setImagem(foto.imagem);
                setTitulo(foto.titulo);
            }
        });
    };

    return (
        <div className='carrosselPrincipal' style={{ backgroundImage: `url(${imagem})` }}>
            <div className='displayCarrossel' >
                <h1>
                    {titulo}
                </h1>
                <button>Faça seu pedido <MdOutlineMenuBook /></button>
                <button>Siga a gente <MdOutlineMenuBook /></button>
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