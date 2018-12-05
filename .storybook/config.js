import { configure, addDecorator, setAddon } from '@storybook/react';
import { checkA11y, configureA11y } from '@storybook/addon-a11y';
import { configureViewport } from '@storybook/addon-viewport';
//import { themes } from '@storybook/components';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';
import { withNotes } from '@storybook/addon-notes';
import results from './.jest-test-results.json';
import '@storybook/addon-console';

const req = require.context('../stories', true, /\.stories\.(jsx|js)$/);

function loadStories() {
  addDecorator(withInfo);
  addDecorator(checkA11y);
  addDecorator(withSmartKnobs);
  addDecorator(withKnobs);
  addDecorator(withNotes);
  addDecorator(
    withOptions({
      hierarchySeparator: /\/|\./,
      hierarchyRootSeparator: /\|/,
    })
  );
  addDecorator(
    withTests({
      results,
      filesExt: '(\\.test?)?(\\.js|\\.jsx)?$'
    })
  );

  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
