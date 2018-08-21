import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import reactElementToJsxString from 'react-element-to-jsx-string';
import {
  Page,
  Preview,
  Section,
  Highlight,
  Properties,
} from 'storybook-ui';

storiesOf('Button', module)
  .add('with text', () => (
    <Page title="with text">
      <Preview isBoxed>
        <button type="button" onClick={action('clicked')}>Hello Button</button>
      </Preview>

      <Section title="Import">
        <Highlight>
          {"import { Button } from '@components';"}
        </Highlight>
      </Section>

      <Section title="Properties">
        <Properties>
          <button type="button" onClick={action('clicked')}>Hello Button</button>
        </Properties>
      </Section>

      <Section title="Usage">
        <Highlight>
          {reactElementToJsxString(<button type="button" onClick={action('clicked')}>Hello Button</button>)}
        </Highlight>
      </Section>
    </Page>
  ))
  .add('with some emoji', () => (
    <button type="button" onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
  ));
