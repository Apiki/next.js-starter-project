import React from 'react';
import './programing.scss';
import Calendar from 'static/images/calendar.png';
import Thais from 'static/images/thais.png';
import Leo from 'static/images/leandro.png';
import Eco from 'static/images/eco.png';
import Eco2 from 'static/images/eco2.png';

const Programing = () => (
  <div className="section-programing">
    <div className="container">
      <h2 className="title-programing">Programação</h2>
      <div className="header-programing">
        <span>Sábado</span>
        <img className="programing-thumb" src={Calendar} alt="" />
        <span>06/12/18</span>
      </div>

      <div className="programing-list">
        <div className="programing-item">
          <div className="programing-content">
            <h3 className="programing-name">Marketing Digital | Mercado, Tendências e Estratégias </h3>

            <div className="programing-info">
              <h5 className="programing-speaker">Eco Moliterno</h5>
              <div className="programing-thumb-content">
                <img className="programing-thumb" src={Eco} alt="" />
              </div>
            </div>

            <div className="programing-info">
              <h5 className="programing-speaker">Eco Moliterno</h5>
              <div className="programing-thumb-content">
                <img className="programing-thumb" src={Eco} alt="" />
              </div>
            </div>
          </div>
          <span className="programing-hour">08h30</span>
        </div>

        <div className="programing-item">
          <div className="programing-content">
            <h3 className="programing-name">Tudo que você precisa saber sobre gestão de projetos caso não queira ser um gerente de projetos</h3>

            <div className="programing-info">
              <h5 className="programing-speaker">Thais</h5>
              <div className="programing-thumb-content">
                <img className="programing-thumb" src={Thais} alt="" />
              </div>
            </div>
          </div>
          <span className="programing-hour">09h00</span>
        </div>

        <div className="programing-item">
          <div className="programing-content">
            <h3 className="programing-name">Tudo que você precisa saber sobre gestão de projetos caso não queira ser um gerente de projetos</h3>

            <div className="programing-info">
              <h5 className="programing-speaker">Thais</h5>
              <div className="programing-thumb-content">
                <img className="programing-thumb" src={Thais} alt="" />
              </div>
            </div>
          </div>
          <span className="programing-hour">09h30</span>
        </div>
      </div>

      <div className="btn-programing-content">
        <a className="btn-programing" href="#">Participe</a>
      </div>
    </div>
  </div>
);

export { Programing };
