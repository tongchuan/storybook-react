import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div onClick={this.props.onClick}>ZTC{this.props.children}</div>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};