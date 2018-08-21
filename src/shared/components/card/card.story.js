import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import { usage } from './mock';

const stories = storiesOf('Components|Card', module);
stories.addDecorator(withKnobs);
const addStory = (description, callback) => (
  stories.add(description, () => (
    callback()
  ))
);

addStory('Simple', () => (
  <div style={{ padding: 30, maxWidth: 413 }}>
    { usage() }
  </div>
));
