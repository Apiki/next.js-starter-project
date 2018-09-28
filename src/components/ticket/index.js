import React from 'react';
import './ticket.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Arrows from 'static/images/arrows.png';

const Ticket = () => (
  <div id="ingresso" className="section-ticket">
    <div className="container">
      <div className="ticket-content">
        <div className="content-title">
          <img className="icon-title" src={Arrows} alt="" />
          <h3 className="ticket-title">ÚLTIMO LOTE DE INGRESSOS A VENDA!</h3>
          <img className="icon-title right" src={Arrows} alt="" />
        </div>

        <div className="content-description">
          <h4 className="subtitle">Faça sua inscrição aqui</h4>

          <div className="description-list">
            <div className="description-item">
              <FontAwesomeIcon icon={faCheck} />
              <span className="item-text">Acesso a todas as salas de palestras</span>
            </div>
            <div className="description-item">
              <FontAwesomeIcon icon={faLightbulb} />
              <span className="item-text">Acesso a Feira de Negócios</span>
            </div>
            <div className="description-item">
              <FontAwesomeIcon icon={faStar} />
              <span className="item-text">Happy Hour (free beer)</span>
            </div>
            <div className="description-item">
              <FontAwesomeIcon icon={faStar} />
              <span className="item-text">Kit do participante</span>
            </div>
            <div className="description-item">
              <FontAwesomeIcon icon={faCheck} />
              <span className="item-text">Acesso a Feira Gastronômica</span>
            </div>
            <div className="description-item">
              <FontAwesomeIcon icon={faCheck} />
              <span className="item-text">Certificado Online</span>
            </div>
          </div>

          <div className="btn-ticket-content">
            <a className="btn-ticket" href="#">comprar ingresso</a>
          </div>
        </div>
      </div>

      <iframe src="https://www.sympla.com.br/wp-summit-2018__370652" id="symplaw" frameborder="0" vspace="0" hspace="0" marginheight="0" marginwidth="5"></iframe>

      <iframe src="https://www.sympla.com.br/rd-summit-2018__280887" id="symplaw" frameborder="0" vspace="0" hspace="0" marginheight="0" marginwidth="5"></iframe>
    </div>
  </div>
);

export { Ticket };
