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

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;
  req = require.context('./stories', true, /\.story\.js$/);
  importAll(req);

  req = require.context('../src/components', true, /\.story\.js$/);
  importAll(req);
}

configure(loadStories, module);
