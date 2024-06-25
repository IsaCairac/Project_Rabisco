import React from 'react';

export default function Card(props) {
    const truncateDescription = (descricao) => {
        if (descricao.length > 50) {
            return descricao.substring(0, 50) + '...';
        }
        return descricao;
    };

    const imageStyle = {
        width: '100%', // Adjust as needed
        height: '200px', // Adjust as needed
        // objectFit: 'cover'
    };

    return (
        <div className="card mt-5">
            <h5 className="card-title mt-3 text-center">{props.nome}</h5>
            <img 
                src={`produtos/${props.nome}.png`} 
                onError={(e) => { e.target.src = "produtos/placeholder.png"; }} 
                className="card-img-top" 
                alt={`${props.nome}`}
                style={imageStyle}
            />
            <div className="card-body text-center">
                <h6 className="card-text mb-3">{truncateDescription(props.descricao)}</h6>
                <a href="#" className="btn btn-dark btn-sm d-grid gap-2 d-md-block text-white">
                    R$ {props.preco}
                </a>
            </div>
            <div className="card-footer">
                <p className="card-text">
                    {props.quantidade} unidade(s) em estoque
                </p>
            </div>
        </div>
    );
}

Card.defaultProps = {
    nome: "Produto",
    descricao: "Descrição do produto",
    quantidade: 10,
    preco: 0.00
};
