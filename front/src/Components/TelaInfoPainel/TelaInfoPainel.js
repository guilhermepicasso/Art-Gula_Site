import './index.scss';
import { MdOutlineMenuBook } from "react-icons/md";

export default function Tela_Info_Painel(params) {
    return (
        <section className='telaInfo'>
            <h1 className='titulo'>{params.titulo}</h1>

            <button className='addCardapio' style={{ visibility: params.titulo === "Cardápio" ? 'visible' : 'hidden' }}>
                <MdOutlineMenuBook />
                Adicionar Cardápio
            </button>

            <div className='tabelas'>
                {["Fotos", "Eventos", "Outro qualquer"].map(item =>
                    <div className='tabela'>
                        <div className='tituloTabela'>
                            <h1>{item}</h1>
                            <div className='botoesTituloTabela'>
                                <button style={{ visibility: params.titulo === "Cardápio" ? 'visible' : 'hidden' }}>
                                    <MdOutlineMenuBook />
                                    Deletar
                                </button>
                                <button style={{ visibility: params.titulo === "Cardápio" ? 'visible' : 'hidden' }}>
                                    <MdOutlineMenuBook />
                                    Editar
                                </button>
                                <button><MdOutlineMenuBook /> Adicionar</button>
                            </div>
                        </div>
                        <div className='cabecalhoTabela itens'>
                            <p>Título</p>
                            <p>Grupo</p>
                            <p>Ações</p>
                        </div>

                        {[1, 2, 3, 4].map(item =>
                            <div className='corpoTabela itens'>
                                <p>Produto {item}</p>
                                <p>Bebidas</p>
                                <div>
                                    <button><MdOutlineMenuBook /> Editar</button>
                                    <button><MdOutlineMenuBook /> Deletar</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}