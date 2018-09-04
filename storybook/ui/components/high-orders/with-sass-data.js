import React, { Component, Fragment } from 'react';
import sassToJs from 'sass-to-js';

export const withSassData = (Wrapper, pseudoElement) => (
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { data: [] };
    }

    componentDidMount() {
      const data = sassToJs(
        document.getElementById('root'),
        {
          pseudoEl: pseudoElement,
          cssProperty: 'content',
        },
      );

      this.setState({ data: this.parse(data) });
    }

    parse(data) {
      const items = [];

      Object.keys(data).map(item => items.push({
        title: item,
        items: this.parseItems(data[item]),
      }));

      return items;
    }

    parseItems(data) {
      const items = [];

      Object.keys(data).map(item => items.push({
        name: item,
        value: data[item],
      }));

      return items;
    }

    render() {
      const { data } = this.state;

      return (
        <Fragment>
          {data.map(item => <Wrapper key={item.name} {...item} />)}
        </Fragment>
      );
    }
  }
);
