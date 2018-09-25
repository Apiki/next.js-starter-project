import React from 'react';
import t from 'prop-types';

const Color = ({ name, value }) => (
  <div className="ui-color">
    <div className="ui-swatch" style={{ background: value }} />

    <p className="ui-name">{ name }</p>
    <p className="ui-hex">HEX: { value }</p>
  </div>
);

Color.propTypes = {
  value: t.string.isRequired,
  name: t.string.isRequired,
}

export default Color;
