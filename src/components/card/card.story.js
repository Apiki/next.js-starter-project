import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import reactElementToJsxString from 'react-element-to-jsx-string';
import {
  Page,
  Section,
  Highlight,
  Properties,
} from 'storybook-ui';

import { usage } from './mock';

const stories = storiesOf('Components|Card', module);
stories.addDecorator(withKnobs);
const addStory = (description, callback) => (
  stories.add(description, () => (
    <Page title={description}>{callback()}</Page>
  ))
);

addStory('Simple', () => (
  <div>
    <Section title="Preview">
      <div style={{ maxWidth: 413 }}>
        { usage() }
      </div>
    </Section>

    <Section title="Import">
      <Highlight>
        {'import { Card } from \'@components\';'}
      </Highlight>
    </Section>

    <Section title="Properties">
      <Properties data={[
        {
          prop: 'featuredMedia',
          type: 'object',
          value: 'is required',
        },
        {
          prop: 'link',
          type: 'string',
          value: 'is required',
        },
        {
          prop: 'title',
          type: 'string',
          value: 'is required',
        },
        {
          prop: 'excerpt',
          type: 'string',
          value: 'is required',
        },
      ]}
      />
    </Section>

    <Section title="Usage">
      <Highlight>
        {reactElementToJsxString(usage())}
      </Highlight>
    </Section>
  </div>
));
