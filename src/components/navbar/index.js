import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './navbar.scss';
import Logo from 'static/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
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
      <div className="section-navbar">
        <div className="container">
          <div className="navbar">
            <div className="navbar-logo">
              <a href="#">
                <img src={Logo} alt="Logo Apiki WP Summit" />
              </a>
            </div>

            <div className={`menu-burger ${this.state.isActive ? 'active' : ''}`} onClick={this.handleClick}>
              <span />
              <span />
              <span />
            </div>

            <ul className={`menu-list ${this.state.isActive ? 'active' : ''}`}>
              <li className="menu-item">
                <AnchorLink offset="100" href="#faq">Sobre o Evento</AnchorLink>
                <FontAwesomeIcon icon={faAngleDown} />

                <ul className="submenu">
                  <li className="submenu-item">
                    <AnchorLink offset="100" href="#faq">Sobre o Evento</AnchorLink>
                  </li>
                  <li className="submenu-item">
                    <AnchorLink offset="100" href="#faq">Sobre o Evento</AnchorLink>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <AnchorLink offset="100" href="#programacao">Progamação</AnchorLink>
                <FontAwesomeIcon icon={faAngleDown} />

                <ul className="submenu">
                  <li className="submenu-item">
                    <AnchorLink offset="100" href="#faq">Sobre o Evento</AnchorLink>
                  </li>
                </ul>
              </li>

              <li className="menu-item">
                <AnchorLink offset="130" href="#local">Local</AnchorLink>
              </li>

              <li className="menu-item">
                <AnchorLink offset="100" href="#patrocinadores">Patrocinadores</AnchorLink>
              </li>

              <li className="menu-item">
                <AnchorLink offset="100" href="#apiki">A Apiki</AnchorLink>
              </li>

              <div className="btn-contet">
                <AnchorLink offset="150" className="btn-menu" href="#ingresso">participe</AnchorLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { Navbar };
