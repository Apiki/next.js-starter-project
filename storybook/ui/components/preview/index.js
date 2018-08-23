import React from 'react';
import t from 'prop-types';

import './style.scss';

const Preview = ({ isBoxed, children }) => (
  <div className={`ui-preview ${isBoxed ? 'ui-boxed' : ''}`}>
    <h3 className="ui-title">Preview</h3>
    { children }
  </div>
);

Preview.propTypes = {
  isBoxed: t.bool,
  children: t.node.isRequired,
};

export { Preview };
