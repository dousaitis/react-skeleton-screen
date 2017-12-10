import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skeleton extends Component {
  static defaultProps = {
    width: '100%',
    height: '100%',
  };
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
  };
  render() {
    const { width, height } = this.props;
    return (
      <div
        className="Skeleton"
        style={{ width, height }}
      >
        <div className="Skeleton-body" />
      </div>
    );
  }
}

export default Skeleton;

