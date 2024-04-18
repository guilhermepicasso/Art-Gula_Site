import './index.scss';
import logo from "../../assets/img/logo circular.png";
import moldura from "../../assets/img/moldura.png";
import GrupoCardapio from '../../Components/GrupoCardapio';



export default function Cardapio() {
    return (
        <div className="bodyCPrincipal">
            <header>
                <div className='menu'>
                    <a href="">  </a>
                    <a href="">Cardapios</a>
                    <a href="">Contato</a>
                </div>
                <div className='logo'><img src={logo}></img></div>
            </header>
            <div className="bodyCardapio">

                <div className="moldurasuperior">
                    <img className="moldura molduraesquerda" src={moldura}></img>
                    <h1>Menu Loja</h1>
                    <img className="moldura molduradireita" src={moldura}></img>
                </div>
                <div className="container">
                    <GrupoCardapio grupo="Doceria"></GrupoCardapio>
                    <GrupoCardapio grupo="Brunch"></GrupoCardapio>
                </div>
                <div className="moldurainferior">
                    <img className="moldura molduraesquerda" src={moldura}></img>
                    <h1>Atualizações em: 18/10/2023</h1>
                    <img className="moldura molduradireita" src={moldura}></img>
                </div>
            </div>
        </div>
    )
}