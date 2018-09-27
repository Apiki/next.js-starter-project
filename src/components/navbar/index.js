import React from 'react';
import './navbar.scss';
import Logo from 'static/images/logo.png';

const Navbar = () => (
  <div className="section-navbar">
    <div className="container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo Apiki WP Summit" />
        </div>

        <div className="menu-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="menu-list">
          <li className="menu-item">
            <a href="">Sobre o Evento</a>
          </li>

          <li className="menu-item">
            <a href="">Progamação</a>
          </li>

          <li className="menu-item">
            <a href="">Local</a>
          </li>

          <li className="menu-item">
            <a href="">Patrocinadores</a>
          </li>

          <li className="menu-item">
            <a href="">A Apiki</a>
          </li>
        </ul>

        <div className="btn-contet">
          <a className="btn-menu" href="#">participe</a>
        </div>
      </div>
    </div>
  </div>
);

export { Navbar };
