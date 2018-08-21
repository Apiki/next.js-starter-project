import React, { Component } from 'react';

import './style.scss';

class Properties extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.children.propTypes);
    return (
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
            <tr>
              <td>type</td>
              <td>string</td>
              <td>button</td>
            </tr>
            <tr>
              <td>onClick</td>
              <td>function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export { Properties };

/*
 - [] Pegar as propriedades dos componentes
 - [] Ter a opção de passar um componente como propriedade
*/
