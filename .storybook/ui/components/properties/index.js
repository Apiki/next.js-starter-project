import React from 'react';

import './style.scss';

const Properties = ({ data }) => (
  <div className="ui-table-responsible">
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Values/Obs</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ prop, type, value }) => (
          <tr key={prop}>
            <td>{prop}</td>
            <td>{type}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export { Properties };
