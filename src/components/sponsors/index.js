import React from 'react';
import './sponsors.scss';
import Apiki from 'static/images/apiki.png';
import Folive from 'static/images/folive.png';
import Barrok from 'static/images/barrok.png';
import Koparu from 'static/images/koparu.png';
import Excerpt from 'static/images/excerpt.png';
import Sohau from 'static/images/sohau.png';

const Sponsors = () => (
  <div className="section-sponsors">
    <div className="container">
      <div className="sponsors-content">
        <span className="title-section">Um oferecimento:</span>
        <img className="offered-thumb" src={Apiki} alt="Logo da Apiki, empresa que esta oferecendo o evento" />

        <span className="title-section">Nossos patrocinadores que tornaram este evento possível:</span>
        <ul className="sponsors-list">
          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Folive} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Barrok} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Koparu} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Excerpt} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Sohau} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Folive} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Barrok} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Koparu} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Excerpt} alt="Patrocinador Apiki" />
            </div>
          </li>

          <li className="sponsors-item">
            <div className="sponsors-thumb">
              <img src={Sohau} alt="Patrocinador Apiki" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export { Sponsors };
