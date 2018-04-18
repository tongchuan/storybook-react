url:https://storybook.js.org/
url:https://storybook.js.org/basics/quick-start-guide/

npm init -y
npm i -g @storybook/cli


Add @storybook/react
First of all, you need to add @storybook/react to your project. To do that, simply run:

npm i --save-dev @storybook/react
Add react, react-dom, and babel-core
Make sure that you have react, react-dom, and babel-core in your dependencies as well because we list these as a peerDependency:

npm i --save react react-dom
npm i --save-dev babel-core
Then add the following NPM script to your package json in order to start the storybook later in this guide:

{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}
Create the config file
Storybook can be configured in several different ways. That’s why we need a config directory. We’ve added a -c option to the above NPM script mentioning .storybook as the config directory.

For the basic Storybook configuration file, you don’t need to do much, but simply tell Storybook where to find stories.

To do that, simply create a file at .storybook/config.js with the following content:

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
That’ll load stories in ../stories/index.js.

Just like that, you can load stories from wherever you want to.

Write your stories
Now you can write some stories inside the ../stories/index.js file, like this:

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   
Story is a single state of your component. In the above case, there are two stories for the native button component:

with text
with some emoji
Run your Storybook
Now everything is ready. Simply run your storybook with:

npm run storybook
Then you can see all your stories, like this:

Basic stories
Now you can change components and write stories whenever you need to. You’ll get those changes into Storybook in a snap with the help of Webpack’s HMR API.