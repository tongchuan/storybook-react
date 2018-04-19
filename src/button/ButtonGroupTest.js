import React from 'react';
import { Button, ButtonToolbar, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../bundle.css';
import '../main.css'
export default class ButtonGroupTest extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="buttongrouptest">
        <div>
          <h3>基本示例</h3>
          <p>将一系列 &#60;Button /&#62; 用 &#60;ButtonGroup /&#62; 组合在一起。</p>
          <ButtonGroup>
            <Button>左</Button>
            <Button>中</Button>
            <Button>右</Button>
          </ButtonGroup>
        </div>
        <div>
          <h3>按钮工具栏</h3>
          <p>将一系列 &#60;ButtonGroup /&#62; 用 &#60;ButtonToolbar /&#62; 组合成更复杂的组件。</p>
          <ButtonToolbar>
            <ButtonGroup>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div>
          <h3>尺寸</h3>
          <p>添加bsSize 属性到 &#60;ButtonGroup /&#62; 可以实现对于组中的按钮尺寸统一设置，这样就不用一个一个设置按钮的尺寸属性了。</p>
          <ButtonToolbar>
            <ButtonGroup bsSize="large">
              <Button>左</Button>
              <Button>中</Button>
              <Button>右</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <ButtonToolbar>
            <ButtonGroup>
              <Button>左</Button>
              <Button>中</Button>
              <Button>右</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <ButtonToolbar>
            <ButtonGroup bsSize="small">
              <Button>左</Button>
              <Button>中</Button>
              <Button>右</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <ButtonToolbar>
            <ButtonGroup bsSize="xsmall">
              <Button>左</Button>
              <Button>中</Button>
              <Button>右</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div>
          <h3>嵌套</h3>
          <p>你还可以将诸如 &#60;DropdownButton /&#62; 代码放入 &#60;ButtonGroup /&#62; 中。</p>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <DropdownButton title="下拉" id="bg-nested-dropdown">
              <MenuItem eventKey="1">链接1</MenuItem>
              <MenuItem eventKey="2">链接2</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>
        <div>
          <h3>垂直排列属性</h3>
          <p>增加 vertical 属性到 &#60;ButtonGroup /&#62; 之中, 使得一系列按钮垂直堆叠在一起。 注意：不支持带分隔线的下拉按钮。</p>
          <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-1">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <Button>Button</Button>
            <Button>Button</Button>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <DropdownButton title="Dropdown" id="bg-vertical-dropdown-3">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
          <ButtonGroup vertical block>
            <Button>全宽度按钮</Button>
            <Button>全宽度按钮</Button>
          </ButtonGroup>
        </div>
        <div>
          <h3>两端对齐按钮组</h3>
          <ButtonGroup justified>
            <Button href="#">左</Button>
            <Button href="#">中</Button>
            <DropdownButton title="下拉" id="bg-justified-dropdown">
              <MenuItem eventKey="1">链接1</MenuItem>
              <MenuItem eventKey="2">链接2</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
// };