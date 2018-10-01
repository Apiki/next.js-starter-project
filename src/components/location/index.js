import React from 'react';
import './location.scss';

const Location = () => (
  <div id="local" className="section-location">
    <div className="container">
      <h2 className="title-location">Local do Evento</h2>
    </div>
    <div className="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15106.04752711574!2d-41.9502908!3d-18.8527563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ffc9e5e3fe38ddb!2sApiki+WordPress!5e0!3m2!1spt-BR!2sbr!4v1538147425743" width="100%" height="425" frameborder="0"></iframe>
    </div>
  </div>
);

export { Location };
