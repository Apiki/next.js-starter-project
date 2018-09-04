import renderer from 'react-test-renderer';

import { usage } from './mock';

it('Should Card to match snapshot', () => {
  const tree = renderer.create(usage()).toJSON();
  expect(tree).toMatchSnapshot();
});
