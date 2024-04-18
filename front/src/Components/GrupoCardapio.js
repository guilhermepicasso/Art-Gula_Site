import './GrupoCardapio.scss';

export default function GrupoCardapio(params) {
    return (
        <div className="grupo">
            <div className="cabecalhoGrupo">
                <h1>{params.grupo}</h1>
                <p>*Consulte disponibilidade</p>
            </div>
            <div className="imagens">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="produtos">
                <div className="produto">
                    <div className="cabecalho">
                        <div className="titulo"><h3>Titulo</h3></div>
                        <div className="preco"><p>R$ 28,00</p></div>
                    </div>
                    <div className="descricao">
                        <p>Todos a descrição deve estar aqui</p>
                    </div>
                </div>
                <div className="produto">
                    <div className="cabecalho">
                        <div className="titulo"><h3>Titulo</h3></div>
                        <div className="preco"><p>R$ 28,00</p></div>
                    </div>
                    <div className="descricao">
                        <p>Todos a descrição deve estar aqui</p>
                    </div>
                </div>
                <div className="produto">
                    <div className="cabecalho">
                        <div className="titulo"><h3>Titulo</h3></div>
                        <div className="preco"><p>R$ 28,00</p></div>
                    </div>
                    <div className="descricao">
                        <p>Todos a descrição deve estar aqui</p>
                    </div>
                </div>
                <div className="produto">
                    <div className="cabecalho">
                        <div className="titulo"><h3>Titulo</h3></div>
                        <div className="preco"><p>R$ 28,00</p></div>
                    </div>
                    <div className="descricao">
                        <p>Todos a descrição deve estar aqui</p>
                    </div>
                </div>
                <div className="produto">
                    <div className="cabecalho">
                        <div className="titulo"><h3>Titulo</h3></div>
                        <div className="preco"><p>R$ 28,00</p></div>
                    </div>
                    <div className="descricao">
                        <p>Todos a descrição deve estar aqui</p>
                    </div>
                </div>
                <div className="produto">
                    <div className="cabecalho">
                        <div className="titulo"><h3>Titulo</h3></div>
                        <div className="preco"><p>R$ 28,00</p></div>
                    </div>
                    <div className="descricao">
                        <p>Todos a descrição deve estar aqui</p>
                    </div>
                </div>
            </div>
        </div>
    )
}