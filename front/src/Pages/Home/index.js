import './index.scss';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { buscarDados } from '../../Service/api.service';

import Login from '../../Components/Login/Login';
import CarrosselPrincipal from '../../Components/Carrossel/principal';
import CarrosselFotos from '../../Components/Carrossel/fotos';
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
  const [produtos, setProdutos] = useState();
  const [subcategorias, setSubcategorias] = useState([]);
  const [eventos, setEventos] = useState([]);

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
    const produtosFiltrados = produtos.filter(produtos => produtos.nomeSubcategoria === cardapio);
    setProdutosPorSubcategoria(produtosFiltrados);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const eventos = await buscarDados("evento")
        setEventos(eventos);
        
        let subcategorias = await buscarDados("subcategoria");

        const nomesubcategoriasArray = [];
        subcategorias.forEach(item => {
          if (!nomesubcategoriasArray.includes(item.nomeSubcategoria)) {
            nomesubcategoriasArray.push(item.nomeSubcategoria);
          }
        });
        setSubcategorias(nomesubcategoriasArray);
        setBotaoSelecionado(nomesubcategoriasArray[0]);

        const infoProdutos = await buscarDados("produto");
        setProdutos(infoProdutos);
        if (infoProdutos && infoProdutos.length > 0) {
          const produtosFiltrados = infoProdutos.filter(infoProdutos => infoProdutos.nomeSubcategoria === nomesubcategoriasArray[0]);
          setProdutosPorSubcategoria(produtosFiltrados);
        } else {
          console.log("Lista de produtos vazia.");
        }


      } catch (error) {
        console.error('Erro ao buscar os dados HOME:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="pagina-home">

      <header>
        <div className='menu'>
          <a href="#eventos">Eventos</a>
          <a href="#cardapios">Cardápio</a>
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

      <section className='eventos' id='eventos'>
        <h1>Eventos</h1>
        <CarrosselCars dados={eventos} componente={CardEvento}></CarrosselCars>
      </section>

      <section className='cardapios' id='cardapios'>
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
          <Link to={`./cardapio/${botaoSelecionado}`}>Ver cardapios {botaoSelecionado} completo</Link>
        </div>
        <div className='carrosselCards'>
          <CarrosselCars dados={produtosPorSubcategoria} componente={CardsProdutos}></CarrosselCars>
        </div>
        <div>
        </div>
      </section>

      <section id='carrosselFotos'>
        <CarrosselFotos imagens={imagens2} />
      </section>

    </div>
  );
}


