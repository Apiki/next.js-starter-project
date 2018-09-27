import React from 'react';
import './cta.scss';
import cta from 'static/images/logo-date.png';
import iconline from 'static/images/icon-line.png';
import { Anchor } from '@components';

const Cta = () => (
  <div className="section-cta">
    <div className="container">
      <div className="cta-content">
        <div className="cta-content-left">
          <img className="cta-img" src={cta} alt="Apiki Logo" />
          <h2 className="cta__title">Não perca a cabeça com WordPress Headless</h2>
          <a className="btn-cta" href="#">participe</a>
        </div>

        <div className="cta-content-right">
          <img className="icon-line" src={iconline} alt="Apiki Logo" />
          <div className="cta-description">
            <p className="cta-text-right">
              Novos temas sobre business e tecnologia surgem a todo o momento.  Já ouviu falar em WordPress Headless, mas ainda não sabe como isso pode alavancar seus negócios?
            </p>

            <p className="cta-text-right">
              O WP Summit é o evento da Apiki sobre o CMS de gestão que mais cresce no mundo. Em 2018, às vésperas do ano novo, decidimos esclarecer (de uma vez por todas!) o que é o conceito de WordPress “sem tema” para te ajudar a repensar o planejamento de 2019.
            </p>

            <p className="cta-text-right">
              Vem que a gente te ajuda a descascar esse abacaxi!
            </p>
          </div>
        </div>
      </div>
      <Anchor />
    </div>
  </div>
);

export { Cta };
