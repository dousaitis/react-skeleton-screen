import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Skeleton extends Component {
  static defaultProps = {
    width: '100%',
    height: '100%',
    marginTop: '',
    marginRight: '',
    marginBottom: '', 
    marginLeft: '',
  };
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    marginTop: PropTypes.string,
    marginRight: PropTypes.string,
    marginBottom: PropTypes.string,
    marginLeft: PropTypes.string,
  };
  render() {
    const { width, height, marginTop, marginRight, marginBottom, marginLeft } = this.props
    const style = {
      ...width && { width },
      ...height && { height },
      ...marginTop && { marginTop },
      ...marginRight && { marginRight },
      ...marginBottom && { marginBottom },
      ...marginLeft && { marginLeft },
    }
    return (
      <div className="Skeleton" style={style}>
        <div className="Skeleton-body" />
      </div>
    )
  }
}

export default Skeleton

