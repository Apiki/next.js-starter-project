import React from 'react';
import t from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  page: t.string.isRequired,
  children: t.oneOfType([t.string, t.node]).isRequired,
};
