import './index.scss';
import logo from '../../assets/img/logo circular.png';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";

export default function Painel() {
    return (
        <main className='telaPianel'>
            <section className='toolBar'>
                <div className='logo'>
                    <img src={logo} alt="Logo da loja" width="145" height="145" />
                </div>
                <div className='botoesNav'>
                    <nav className='testePainel' style={{ color: "black" }}>
                        <div style={{ background: "transparent" }}></div>
                        <MdOutlineMenuBook ></MdOutlineMenuBook>
                        <p >Cardápio</p>
                    </nav>
                    <nav className='testePainel'>
                        <div></div>
                        <AiFillHome ></AiFillHome>
                        <p >Painel</p>
                    </nav>
                </div>
                <div></div>
            </section>
            <section className='telaInfo'>

            </section>

        </main>
    )
}