import './index.scss';

export default function CardEvento(params) {
    return (
        <div className="cardEvento">
            <div className="image-container">
                <img src={params.teste.imagem} className="card-image" />
            </div>
            <div className="text-container">
                <p className="evento-title">{params.teste.title}</p>
                <p className="evento-price">{params.teste.preco}</p>
            </div>
        </div>
    );
}