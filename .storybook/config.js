import './styles';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Project UI',
  url: '#',
  showAddonPanel: false,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

// automatically import all files ending in *.story.js
const req = require.context('../src/shared/components', true, /\.story\.js$/);

function loadStories () {
  req.keys().forEach((filename) => req(filename))
};

configure(loadStories, module);
