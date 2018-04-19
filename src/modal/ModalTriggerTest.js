import React from 'react';
import {Modal,Button,OverlayTrigger,Tooltip,Popover} from 'react-bootstrap';
export default class ModalTriggerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ show: false });
  }
  open(){
    this.setState({ show: true });
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
      <div  className="modal-container" style={{height: 200}}>
       <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          弹出内嵌对话框
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">容量内嵌对话框</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
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