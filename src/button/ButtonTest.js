import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../bundle.css';
import '../main.css'
export default class ButtonTest extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isLoading: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({isLoading: true});

    // This probably where you would have an `ajax` call
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }
  render(){
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
      <div className="buttontest">
        <div>
        <h3>尺寸</h3>
        <p>只需修改 bsStyle 属性，就能使用任一可用的样式选项快速升成一个指定样式的按钮。</p>
        <ButtonToolbar>
          <Button>Default</Button>
          <Button bsStyle="default">Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="link"></Button>
        </ButtonToolbar>
        </div>
        <div>
        <h3>尺寸</h3>
        <p>需要更大或者更小的按钮？添加 bsSize="large", bsSize="small", 或 bsSize="xsmall" 属性来调整按钮的尺寸。</p>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary">Default button</Button>
          <Button>Default button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">Small button</Button>
          <Button bsSize="small">Small button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
          <Button bsSize="xsmall">Extra small button</Button>
        </ButtonToolbar>
        </div>
        <div>
        <p>增加 block 属性，可生成块级别的按钮 - 这些按钮与块的宽度相同</p>
        <div className="well" style={wellStyles}>
          <Button bsStyle="primary" bsSize="large" block>块级别按钮</Button>
          <Button bsSize="large" block>块级别按钮</Button>
        </div>
        </div>
        <div>
        <h3>激活状态</h3>
        <p>设置按钮为激活状态只要增加 active 属性。</p>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active>Primary bundleRenderer.renderToString</Button>
          <Button bsSize="large">Button</Button>
        </ButtonToolbar>
        </div>
        <div>
          <h3>禁用状态</h3>
          <p>让按钮看起来不可点击是通过褪色 50% 来实现的。增加 disabled 可以达到此目的。</p>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" disabled> Primary button</Button>
            <Button bsSize="large" disabled>Button</Button>
          </ButtonToolbar>
        </div>
        <div>
          <h3>按钮标签</h3>
          <p>DOM 元素标签将会基于你提供的属性自动选择。 属性中如果有href 属性，则按钮使用 <a /> 元素，否则使用 <button /> 元素。 </p>
          <ButtonToolbar>
            <Button href="#">Link</Button>
            <Button>Button</Button>
          </ButtonToolbar>
        </div>
        <div>
          <h3>按钮加载状态</h3>
          <p>在将要激活一个异步操作时，最佳的用户体验是给用户一个正在加载的提示，这个可通过更改 <Button /> 的相关属性使得按钮看起来像这样</p>
          <Button
            bsStyle="primary"
            disabled={this.state.isLoading}
            onClick={!this.state.isLoading ? this.handleClick : null}>
            {this.state.isLoading ? 'Loading...' : 'Loading state'}
          </Button>
        </div>
      </div>
    )
  }
}

// Button.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
// };