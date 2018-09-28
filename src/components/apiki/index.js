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
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
        dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid.3 wolf moon officia aute, non cupidatat
        skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      </div>

      <div className="btn-apiki-content">
        <a className="btn-apiki" href="https://apiki.com">saiba mais sobre a apiki</a>
      </div>
    </div>
  </div>
);

export { Apiki };
