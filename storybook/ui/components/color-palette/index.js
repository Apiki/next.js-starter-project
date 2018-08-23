import React from 'react';
import t from 'prop-types';

import './style.scss';
import Color from './color';

const ColorPalette = ({ title, items }) => (
  <div className="ui-color-palette">
    <h3 className="ui-title">{ title }</h3>

    <div className="ui-list">
      {items.map((item, index) => (
        <Color key={index} {...item} />
      ))}
    </div>
  </div>
);

ColorPalette.propTypes = {
  title: t.string.isRequired,
  items: t.array.isRequired,
};

export { ColorPalette };
