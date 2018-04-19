import React from 'react';
import {Modal,Button,OverlayTrigger,Tooltip,Popover} from 'react-bootstrap';
export default class ModalStaticTest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="static-modal">
      <Modal.Dialog show={true}>
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
    </Modal.Dialog>
      </div>
    )
  }
}