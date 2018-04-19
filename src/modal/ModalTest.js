import React from 'react';
import {Modal,Button,OverlayTrigger,Tooltip,Popover} from 'react-bootstrap';
export default class ModalTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open(){
    this.setState({ showModal: true });
  }
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );
    return (
      <div>
      <Button bsStyle="primary" bsSize="large" onClick={this.open}>弹出示例对话框</Button>
      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>对话框标题</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>对话框的正文</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>对话框中的弹出框</h4>
            <p>点 <OverlayTrigger overlay={popover}><a href="#">这里</a></OverlayTrigger> 显示一个弹出框。</p>

            <h4>对话框中的提示</h4>
            <p>点 <OverlayTrigger overlay={tooltip}><a href="#">这里</a></OverlayTrigger> 显示一个提示。</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>取消</Button>
          </Modal.Footer>
        </Modal>
      {/*<Modal.Dialog show={true}>
        <Modal.Header>
          <Modal.Title>对话框标题</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          主体内容...
        </Modal.Body>
        <Modal.Footer>
          <Button>取消</Button>
          <Button bsStyle="primary">保存</Button>
        </Modal.Footer>
    </Modal.Dialog>*/}
      </div>
    )
  }
}