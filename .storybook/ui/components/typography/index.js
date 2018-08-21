import React from 'react';
import t from 'prop-types';

import './style.scss';
import Type from './type';

const Typography = ({ title, items }) => (
  <div className="ui-typography">
    <h3 className="ui-title">{ title }</h3>

    <div className="ui-list">
      {items.map((item, index) => (
        <Type key={index} {...item} />
      ))}
    </div>
  </div>
);

Typography.propTypes = {
  title: t.string.isRequired,
  items: t.array.isRequired,
};

export { Typography };
