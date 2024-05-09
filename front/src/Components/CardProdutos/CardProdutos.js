import './index.scss';

export default function CardsProdutos(params) {
    return (
        <div className="cardsProduto">
            <div className="image-container">
                <img src={params.teste.imagem} className="card-image" />
            </div>
            <div className="text-container">
                <p className="product-title">{params.teste.title}</p>
                <p className="product-price">{params.teste.preco}</p>
            </div>
        </div>
    );
}
