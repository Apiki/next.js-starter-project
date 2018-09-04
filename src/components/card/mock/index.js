import React from 'react';
import { text } from '@storybook/addon-knobs/react';

import { Card } from '../index';

export const usage = () => (
  <Card
    featuredMedia={{
      alt: 'Card Thumbnail',
      sizes: {
        medium: {
          height: 413,
          width: 309,
          url: text('URL', 'https://source.unsplash.com/413x309'),
        },
      },
    }}
    link={text('Link', '#')}
    title={text('Title', 'Card Title')}
    excerpt={text('Excerpt', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.')}
  />
);
