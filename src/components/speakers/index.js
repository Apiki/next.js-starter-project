import React from 'react';
import './speakers.scss';
import iconline from 'static/images/icon-line.png';
import Leo from 'static/images/leandro.png';
import Apiki from 'static/images/apiki-icon.png';
import Africa from 'static/images/africa-icon.png';
import Eco from 'static/images/eco.png';
import Eco2 from 'static/images/eco2.png';
import Thais from 'static/images/thais.png';
import { Anchor } from '@components';

const Speakers = () => (
  <div className="section-speakers">
    <div className="container">
      <div className="speakers-content">
        <h3 className="speakers-title">
          CONHEÇA NOSSOS PALESTRANTES CONFIRMADOS
        </h3>

        <div className="speakers-list">
          <div className="speaker-item">
            <div className="speaker-thumb-content">
              <img className="speaker-thumb" src={Eco2} alt="Eco2 face" />
            </div>
            <h4 className="speaker-name">Eco Moliterno</h4>
            <span className="speaker-company">VP de Criação, Africa</span>
            <img className="speaker-icon-company" src={Africa} alt="Logo Company" />
          </div>

          <div className="speaker-item">
            <div className="speaker-thumb-content">
              <img className="speaker-thumb" src={Thais} alt="Thais face" />
            </div>
            <h4 className="speaker-name">Leandro Vieira</h4>
            <span className="speaker-company">VP de Criação, Africa</span>
            <img className="speaker-icon-company" src={Africa} alt="Logo Company" />
          </div>

          <div className="speaker-item">
            <div className="speaker-thumb-content">
              <img className="speaker-thumb" src={Leo} alt="Leandro face" />
            </div>
            <h4 className="speaker-name">Leandro Vieira</h4>
            <span className="speaker-company">CEO e Fundador, Apiki</span>
            <img className="speaker-icon-company" src={Apiki} alt="Logo Company" />
          </div>

          <div className="speaker-item">
            <div className="speaker-thumb-content">
              <img className="speaker-thumb" src={Eco} alt="Eco face" />
            </div>
            <h4 className="speaker-name">Eco Moliterno</h4>
            <span className="speaker-company">VP de Criação, Africa</span>
            <img className="speaker-icon-company" src={Africa} alt="Logo Company" />
          </div>
        </div>

        <div className="more-speakers">
          <img className="icon-line" src={iconline} alt="Icon line" />
          <span className="more-speakers-text">Em breve novos palestrantes</span>
          <img className="icon-line" src={iconline} alt="Icon line" />
        </div>

        <Anchor link="#section" />
      </div>
    </div>
  </div>
);

export { Speakers };
