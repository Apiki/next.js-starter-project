import React, { Component } from 'react';
import sassToJs from 'sass-to-js'

export const withSassData = (Wrapper, pseudoElement) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    parse(data) {
      const items = [];
      Object.keys(data).map(item => items.push({
        title: item,
        items: this.parseChildrens(data[item])
      }));

      return items;
    }

    parseChildrens(data) {
      const items = [];
      Object.keys(data).map(item => items.push({
        name: item,
        value: data[item]
      }));

      return items;
    }

    componentDidMount() {
      const data = sassToJs(document.getElementById('root'), { pseudoEl: pseudoElement, cssProperty: 'content' });

      this.setState({
        data: this.parse(data),
      });
    }

    render() {
      let { data } = this.state;

      return(
        <div>
          {data.length && data.map((item, index) => (
            <Wrapper key={index} {...item} />
          ))}
        </div>
      );
    }
  }
};
