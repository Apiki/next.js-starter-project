import React from 'react';
import t from 'prop-types';

const Type = ({ name, value }) => (
  <div className='ui-type'>
    <h3 className='ui-slug'>{value}</h3>
    <h4 className='ui-name'>{name}</h4>
    <p className='ui-type-ex' style={{fontFamily: `${ value }, sans-serif`}}>ABCDEFGHIJKLM</p>
    <p className='ui-type-ex' style={{fontFamily: `${ value }, sans-serif`}}>abcdefghijklm</p>
  </div>
);

Type.propTypes = {
  value: t.string.isRequired,
  name: t.string.isRequired
}

export default Type;
