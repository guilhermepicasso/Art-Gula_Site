import './index.scss';
import axios from 'axios'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Login from '../../Components/Login/Login';
import CarrosselPrincipal from '../../Components/Carrossel/principal';
import CarrosselFotos from '../../Components/Carrossel/fotos';
// import dados from "../../apoio/banco.json";
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
  const [dadosSubcategorias, setDadosSubcategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);
  const [produtosPorSubcategoria, setProdutosPorSubcategoria] = useState({});
  const [eventos, setEventos] = useState({});
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
        let eventos = await axios.get('http://127.0.0.1:5000/evento');
        let info = eventos.data;
        setEventos(info);

        let produtos = await axios.get('http://127.0.0.1:5000/produto');
        let infoProdutos = produtos.data;
        setProdutos(infoProdutos);

        const subcategoriasArray = [];
        infoProdutos.forEach(item => {
          if (!subcategoriasArray.includes(item.nomeSubcategoria)) {
            subcategoriasArray.push(item.nomeSubcategoria);
          }
        });
        setSubcategorias(subcategoriasArray);
        setBotaoSelecionado(subcategoriasArray[0]);
        const produtosFiltrados = infoProdutos.filter(infoProdutos => infoProdutos.nomeSubcategoria === subcategoriasArray[0]);
        setProdutosPorSubcategoria(produtosFiltrados);
        console.log(produtosFiltrados);

      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
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
        <CarrosselCars produtosPorSubcategoria={eventos} componente={CardEvento}></CarrosselCars>
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
          <a href='http://localhost:3000/cardapio'>VER CARDÁPIO <Link to={`./cardapio/${botaoSelecionado}`}>{botaoSelecionado}</Link> COMPLETO</a>
        </div>
        <div className='carrosselCards'>
          <CarrosselCars produtosPorSubcategoria={produtosPorSubcategoria} componente={CardsProdutos}></CarrosselCars>
        </div>
        <div>
        </div>
      </section>
      <section id='carrosselFotos'>
        <CarrosselFotos imagens={imagens2} />
      </section>
      <section className='sobre'>
        <img className='logo_artgula' src='/assets/img/tituloArtEGula.png'></img>
        <div className='conteudo_sobre'>
          <img className='fotoDona' src='/assets/img/fotoDona.png'></img>
          <p>Somos a Art & Gula, uma doceria e café localizada no
            charmoso bairro de Moema em São Paulo.
            Nossa loja foi pensada para proporcionar uma
            experiência inesquecível e instagramável.
            Nosso espaço é perfeito para você relaxar e também
            realizar sua festa de aniversário ou evento.
            Nós criamos bolos, doces e salgadinhos e atendemos
            o corporativo.<br />
            Nossos salgados são todos fabricações própria e se
            destacam pela qualidade. Nossa especialidade são os
            salgados congelados, que atendem o varejo e o atacado.</p>
        </div>
      </section>
      <section className='maps'>

        <div className='googleMaps'>
          <iframe
            width="100%"
            height="420"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Jurema,%20401%20-%20Moema,%20S%C3%A3o%20Paulo%20-%20SP,%2004079-001+(Art&amp;Gula)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
        <p>Endereço: Av. Jurema, 401 - Moema,<br />
          São Paulo - SP, 04079-001<br />
          Telefone: (11) 95865-5550<br />
          Horário de Funcionamento:<br />
          Terça à Sexta: 10h - 19h<br />
          Sábado, Domingo e feriados: 9h - 19h
        </p>


      </section>


    </div>
  );
}


