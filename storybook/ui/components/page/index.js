import React, { Fragment } from 'react';
import t from 'prop-types';

import './page.scss';

const Page = ({ title, children }) => (
  <main className="ui-page">
    <header className="ui-header">
      <h2 className="ui-title">{ title }</h2>
    </header>

    <Fragment>{ children }</Fragment>
  </main>
);

Page.propTypes = {
  title: t.string.isRequired,
  children: t.oneOfType([t.string, t.node]).isRequired,
};

export { Page };
