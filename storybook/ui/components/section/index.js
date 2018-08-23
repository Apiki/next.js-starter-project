import React from 'react';
import t from 'prop-types';

import './section.scss';

const Section = ({ title, children }) => (
  <section className="ui-section">
    {title && (
      <div className="ui-header">
        <h2 className="ui-title">{ title }</h2>
      </div>
    )}

    <div className="ui-content">{ children }</div>
  </section>
);

Section.propTypes = {
  title: t.string,
  children: t.any.isRequired,
};

export { Section };
