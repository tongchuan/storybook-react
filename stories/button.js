import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonTest from '../src/button/ButtonTest';
import ButtonGroupTest from '../src/button/ButtonGroupTest';
import DropdownButtonTest from '../src/button/DropdownButtonTest';
import MenuItemTest from '../src/button/MenuItemTest';

storiesOf('按钮', module)
  .add('Button', () => (
    <ButtonTest />
  ))
  .add('ButtonGroup', () => (
    <ButtonGroupTest />
  ))
  .add('DropdownButton', () => (
    <DropdownButtonTest />
  ))
  .add('MenuItem', () => (
    <MenuItemTest />
  ))
