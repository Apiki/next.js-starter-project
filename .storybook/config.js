import './styles';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Project UI',
  url: '#',
})

// automatically import all files ending in *.stories.js
const req = require.context('../src/shared/components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
