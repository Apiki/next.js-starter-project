import React from 'react';
import t from 'prop-types';

const Color = ({ hex, name }) => (
  <div className="ui-color">
    <div className="ui-swatch" style={{ background: hex }} />

    <p className="ui-name">{ name }</p>
    <p className="ui-hex">HEX: { hex }</p>
  </div>
);

Color.propTypes = {
  hex: t.string.isRequired,
  name: t.string.isRequired
}

export default Color;
