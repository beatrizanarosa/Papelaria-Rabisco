import React from 'react';
import CardProdutos from './CardProdutos';

const CardList = (props) => {
  const { produtos } = props;

  return (
    <div className="container my-3">
      <div className="row g-4">
        {/* Estrutura de repetição map */}
        {produtos.map((produto, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow">
              <CardProdutos
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                quantidade={produto.quantidade}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

