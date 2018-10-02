import React from 'react';
import './apiki.scss';
import Background from 'static/images/apiki-bg.png';

const divStyle = {
  backgroundImage: `url(${Background})`,
};

const Apiki = () => (
  <div id="apiki" className="section-apiki" style={divStyle}>
    <div className="container">
      <h3 className="apiki-title">A Apiki</h3>

      <div className="apiki-text">
      A Apiki é uma empresa especializada em WordPress,
      plataforma líder mundial de gestão de conteúdo,
      que tem a missão de desenvolver soluções digitais
      para potencializar e integrar negócios no mundo inteiro.
      A produtora web pertence ao grupo iMasters e atualmente
      mantém escritórios em Governador Valadares,
      Minas Gerais e em São Paulo, capital paulista.
      </div>

      <div className="btn-apiki-content">
        <a className="btn-apiki" href="https:\\apiki.com" target="_blank" rel="noopener noreferrer">saiba mais sobre a apiki</a>
      </div>
    </div>
  </div>
);

export { Apiki };
