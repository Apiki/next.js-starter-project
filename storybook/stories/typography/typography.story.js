import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Page, Section } from 'storybook-ui';

import { Usage } from './mock';

const stories = storiesOf('Styleguide|Typography', module);
const addStory = (description, callback) => (
  stories.add(description, () => (
    <Page title="Typography">{callback()}</Page>
  ))
);

addStory('All', () => (
  <Fragment>
    <Section>
      <Usage />
    </Section>
  </Fragment>
));
