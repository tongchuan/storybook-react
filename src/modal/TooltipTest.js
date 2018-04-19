import React from 'react';
import {Tooltip,ButtonToolbar,OverlayTrigger,Button} from 'react-bootstrap';
import '../main.css'
export default class TooltipTest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const TIP = ['right', 'top', 'left', 'bottom']
    const tooltip = (
      <Tooltip id="tooltip"><strong>点击我</strong> 就可以看到这个信息。</Tooltip>
    );
    return (
      <div>
        <div className="bs-example">
        {TIP.map((item,i)=>(
          <Tooltip placement={item} key={i} className="in" id={'tooltip-'+item}>Tooltip {item}</Tooltip>
        ))}
        </div>
        <div>
          <ButtonToolbar>
          {TIP.map((item,i) => (
            <OverlayTrigger placement={item} overlay={tooltip}>
              <Button bsStyle="default">请将光标移到我上面</Button>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        </div>
      </div>
      
    )
  }
}