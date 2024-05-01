import './index.scss';
import Login from '../../Components/Login/Login';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CarrosselPrincipal from '../../Components/CarrosselPrincipal';

const style = {
  position: 'absolute',
  top: '50%',
  left: "40%",
  transform: 'translate(-30%, -50%)'
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const imagens = [{imagem: "/assets/img/croissant.jpg", titulo: "Croissant"}, {imagem: "/assets/img/gelato.jpg", titulo: "Gelato"}, {imagem: "/assets/img/panquecas.jpg", titulo: "Panquecas"}];
  return (
    <div className="pagina-home">
      <header>
        <div className='menu'>
          <a href="">Eventos</a>
          <Link to="./cardapio">Cardápio</Link>
          <a href="">Sobre</a>
          <a href="">Localização</a>
        </div>
        <div className='logo'><img src='/assets/img/logo circular.png'></img></div>
        <div className='acessoAdm'>
          <button onClick={handleOpen}>Acesso restrito</button>
        </div>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login></Login>
        </Box>
      </Modal>
      <section>
        <CarrosselPrincipal imagens={imagens}></CarrosselPrincipal>
      </section>
    </div>
  );
}


