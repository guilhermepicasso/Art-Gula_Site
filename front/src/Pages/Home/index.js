import './index.scss';
import Login from '../../Components/Login/Login';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CarrosselPrincipal from '../../Components/Carrossel/principal';
import CarrosselFotos from '../../Components/Carrossel/fotos';
import dados from "../../apoio/banco.json";
import CardsProdutos from '../../Components/CardProdutos/CardProdutos';
import CarrosselCars from '../../Components/Carrossel/cards';
import CardEvento from '../../Components/CardEvento/CardEvento';

const style = {
  position: 'absolute',
  top: '50%',
  left: "40%",
  transform: 'translate(-30%, -50%)'
};

export default function Home() {
  const [subcategorias, setSubcategorias] = useState([]);
  const [produtosPorSubcategoria, setProdutosPorSubcategoria] = useState({});
  const [botaoSelecionado, setBotaoSelecionado] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const imagens = [
    { imagem: "/assets/img/croissant.jpg", titulo: "Croissant" },
    { imagem: "/assets/img/gelato.jpg", titulo: "Gelato" },
    { imagem: "/assets/img/panquecas.jpg", titulo: "Panquecas" }
  ];
  const imagens2 = ["/assets/img/croissant.jpg", "/assets/img/gelato.jpg", "/assets/img/panquecas.jpg", "/assets/img/croissant.jpg", "/assets/img/gelato.jpg", "/assets/img/panquecas.jpg"];

  const handleBotaoClick = (cardapio) => {
    setBotaoSelecionado(cardapio);
    const produtosFiltrados = dados.filter(dados => dados.subcategoria === cardapio);
    setProdutosPorSubcategoria(produtosFiltrados);
    console.log(produtosFiltrados);
  };

  useEffect(() => {
    const subcategoriasArray = [];

    dados.forEach(item => {
      if (!subcategoriasArray.includes(item.subcategoria)) {
        subcategoriasArray.push(item.subcategoria);
      }
    });
    setSubcategorias(subcategoriasArray);
    setBotaoSelecionado(subcategoriasArray[0]);
    const produtosFiltrados = dados.filter(dados => dados.subcategoria === subcategoriasArray[0]);
    setProdutosPorSubcategoria(produtosFiltrados);
  }, []);

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
      <section className='painelPrincipal'>
        <CarrosselPrincipal imagens={imagens} tipo="Painel Principal" />
      </section>

      <section className='eventos'>
        <h1>Eventos</h1>
        <CarrosselCars produtosPorSubcategoria={produtosPorSubcategoria} componente={CardEvento}></CarrosselCars>
      </section>


      <section className='cardapios'>
        <div className='listaCardapios'>
          <div className='botoesLista'>
            {subcategorias.map((cardapio, index) => (
              <button
                key={index}
                className={cardapio === botaoSelecionado ? 'selecionado' : ''}
                onClick={() => handleBotaoClick(cardapio)}
              >
                {cardapio}
              </button>
            ))}
          </div>
          <a href='http://localhost:3000/cardapio'>VER CARDÁPIO {botaoSelecionado} COMPLETO</a>
        </div>
        <div className='carrosselCards'>
          <CarrosselCars produtosPorSubcategoria={produtosPorSubcategoria} componente={CardsProdutos}></CarrosselCars>
        </div>
        <div>
        </div>
      </section>
      <section>
        <CarrosselFotos imagens={imagens2} />
      </section>

    </div>
  );
}


