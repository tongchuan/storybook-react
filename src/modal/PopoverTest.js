import React from 'react';
import {Popover,OverlayTrigger,ButtonToolbar,Button,Overlay} from 'react-bootstrap';
import '../main.css'
export default class PopoverTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.popover = this.popover.bind(this);
    this.popovers = this.popovers.bind(this);
  }
  popover(item) {
    return (
      <Popover id={"popover-positioned-"+item} title="顶部弹出">
       <strong>点击我</strong> 就可以看到这个信息。
      </Popover>
    )
  }
  popovers(item) {
    return (
      <Popover id={"popover-positioned-scrolling-"+item} title="顶部弹出">
       <strong>点击我</strong> 就可以看到这个信息。
      </Popover>
    )
  }
  handleClick = e => {
    this.setState({ target: e.target, show: !this.state.show });
  };
  render() {
    const TIP = ['right', 'top', 'left', 'bottom']
    return (
      <div>
        <div style={{ height: 120 }}>
          <Popover
            id="popover-basic"
            placement="right"
            positionLeft={200}
            positionTop={50}
            title="右边弹出"
          >
            这里是令人 <strong>惊喜</strong> 的内容。不是嘛？
          </Popover>
        </div>
        <div>
        <ButtonToolbar>
          {TIP.map((item,i) => (
            <OverlayTrigger trigger="click" placement={item} overlay={this.popover(item)}>
              <Button>点击我</Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        <ButtonToolbar>
          <Button onClick={this.handleClick}>
            点击我
          </Button>

          <Overlay
            show={this.state.show}
            target={this.state.target}
            placement="bottom"
            container={this}
            containerPadding={20}
          >
            <Popover id="popover-contained" title="底部弹出">
              <strong>点击我</strong> 就可以看到这个信息。
            </Popover>
          </Overlay>
        </ButtonToolbar>

        <ButtonToolbar>
            {TIP.map((item,i) => (
              <OverlayTrigger trigger="click" placement={item} overlay={this.popovers(item)}>
                <Button>点击我</Button>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
        </div>
      </div>
      
    )
  }
}