import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <ButtonToolbar>
          <Button>Default</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};