import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/button/Button';

storiesOf('按钮', module)
  .add('Button', () => (
    <Button />
  ))
