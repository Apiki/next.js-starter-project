import React, { PureComponent } from 'react';
import t from 'prop-types';
import Prism from 'prismjs';

import './style.scss';

class Highlight extends PureComponent {
  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  mount = node => {
    this.domNode = node;
  }

  highlight() {
    Prism.highlightElement(this.domNode, this.props.async);
  }

  render() {
    const {
      className,
      children,
      component: Wrap,
    } = this.props

    return (
      <div className="ui-highlight">
        <Wrap
          ref={this.mount}
          className={className}
        >
          { children }
        </Wrap>
      </div>
    );
  }
}

Highlight.defaultProps = {
  component: `pre`,
  className: 'language-javascript language-jsx'
};

Highlight.propTypes = {
  async: t.bool,
  className: t.string,
  children: t.any.isRequired,
  component: t.node.isRequired
};

export { Highlight };
