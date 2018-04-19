import React from 'react';
import { Clearfix, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../bundle.css';
import '../main.css'
export default class MenuItemTest extends React.Component {
  constructor(props){
    super(props);
    this.onSelectAlert = this.onSelectAlert.bind(this);
  }
  onSelectAlert(eventKey){
    alert(`Alert from menu item.\neventKey: ${eventKey}`);
  }
  render() {
    return (
      <div>
        <Clearfix>
          <ul className="dropdown-menu open"  style={{display:'black'}}>
            <MenuItem header>标题</MenuItem>
            <MenuItem>链接</MenuItem>
            <MenuItem divider/>
            <MenuItem header>标题</MenuItem>
            <MenuItem>链接</MenuItem>
            <MenuItem disabled>禁用</MenuItem>
            <MenuItem title="See? I have a title.">
              带标题的链接
            </MenuItem>
            <MenuItem eventKey={1} href="#someHref" onSelect={this.onSelectAlert}>
              带警告的链接
            </MenuItem>
          </ul>
        </Clearfix>
      </div>
    );
  }
}

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
// };