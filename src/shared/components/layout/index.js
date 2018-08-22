import React from 'react';
import t from 'prop-types';

const Layout = ({ className, children }) => (
  <div className={className || ''}>
    { children }
  </div>
);

Layout.propTypes = {
  className: t.string,
  children: t.oneOfType([t.node, t.string]),
};

export { Layout };
