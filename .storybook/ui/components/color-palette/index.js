import React, { Component } from 'react';
import Color from './color';

class ColorPalette extends Component {
  render() {
    return (
      <div className="ui-color-palette">
        <h3 className="ui-color-title">Primary</h3>

        <div className="ui-color-list">
          <Color hex="#07a" name="blue" />
        </div>
      </div>
    );
  }
}

export { ColorPalette };
