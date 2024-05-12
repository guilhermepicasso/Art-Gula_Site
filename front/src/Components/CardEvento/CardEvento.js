import './index.scss';

export default function CardEvento(params) {
    return (
        <div className="cardEvento">
            <div className="image-container">
                <img src={`http://localhost:5000/${params.teste.imagem}`} alt="" className="card-image" />
            </div>
            <div className="text-container">
                <p className="evento-title">{params.teste.tituloEvento}</p>
                <p className="evento-price">{params.teste.idEventos}</p>
            </div>
        </div>
    );
}