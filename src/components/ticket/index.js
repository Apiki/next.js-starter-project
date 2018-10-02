import React from 'react';
import './ticket.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Arrows from 'static/images/arrows.png';

class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <div id="ingresso" className="section-ticket">
        <div className="container">
          <div className="ticket-content">
            <div className="content-title">
              <img className="icon-title" src={Arrows} alt="" />
              <h3 className="ticket-title">ÚLTIMO LOTE DE INGRESSOS!</h3>
              <img className="icon-title right" src={Arrows} alt="" />
            </div>

            <div className="content-description">
              <h4 className="subtitle">Faça sua inscrição aqui</h4>

              <div className="description-list">
                <div className="description-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span className="item-text">Conteúdo Inédito</span>
                </div>
                <div className="description-item">
                  <FontAwesomeIcon icon={faLightbulb} />
                  <span className="item-text">Networking</span>
                </div>
                <div className="description-item">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="item-text">Apresentação de case em Headless</span>
                </div>
                <div className="description-item">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="item-text">Novas visões sobre WordPress</span>
                </div>
                <div className="description-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span className="item-text">Motivos para adotar o Headless na sua estratégia</span>
                </div>
                <div className="description-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span className="item-text">Estratégias para tomadas de decisão</span>
                </div>
              </div>

              <div className="btn-ticket-content">
                <a className="btn-ticket" onClick={this.handleClick}>comprar ingresso</a>
              </div>
            </div>
          </div>
        </div>

        <div className={`modal fade ticket-modal  ${this.state.isActive ? 'show' : ''}`} id="ticketModal" aria-labelledby="ticketModalLabel">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={this.handleClick}>×</span>
              </button>
              <div className="modal-body">
                <iframe src="https://www.sympla.com.br/wp-summit-2018__370652" id="symplaw" frameBorder="0" vspace="0" hspace="0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Ticket };
