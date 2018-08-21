import React from 'react';
import { storiesOf } from '@storybook/react';
import { Page, Section } from 'storybook-ui';

import { Usage } from './mock';

const stories = storiesOf('Styleguide|Colors', module);
const addStory = (description, callback) => (
  stories.add(description, () => (
    <Page title={description}>{callback()}</Page>
  ))
);

addStory('All', () => (
  <div>
    <Section title="Preview">
      <Usage />
    </Section>
  </div>
));
