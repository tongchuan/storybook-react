import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalTest from '../src/modal/ModalTest'
import ModalStaticTest from '../src/modal/ModalStaticTest';
import ModalTriggerTest from '../src/modal/ModalTriggerTest'
import ModalSizeTest from '../src/modal/ModalSizeTest';

import TooltipTest from '../src/modal/TooltipTest';
import PopoverTest from '../src/modal/PopoverTest';

storiesOf('弹框(<Modal)', module)
  .add('ModalStatic',()=>(
    <ModalStaticTest />
  ))
  .add('Modal', () => (
    <ModalTest />
  ))
  .add('ModalTrigger',() => (
    <ModalTriggerTest />
  ))
  .add('ModalSizeTest', () => (
    <ModalSizeTest />
  ))
  .add('提示框Tooltip', () => (
    <TooltipTest />
  ))
  .add('弹出框Popover', () => (
    <PopoverTest />
  ))
