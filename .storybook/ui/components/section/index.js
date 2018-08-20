import React from 'react';
import t from 'prop-types';

import './style.scss';

const Section = ({ title, children }) => (
  <section className="ui-section">
    <div className="ui-header">
      <h2 className="ui-title">{ title }</h2>
    </div>

    <div className="ui-content">{ children }</div>
  </section>
);

Section.propTypes = {
  title: t.string.isRequired,
  children: t.any.isRequired
};

export { Section };
