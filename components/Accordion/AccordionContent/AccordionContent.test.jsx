import React from 'react';
import { mount } from 'enzyme';

import { AccordionContent } from './AccordionContent';

jest.mock('../AccordionContext/AccordionContext');

describe('AccordionContent', () => {
  const component = mount(<AccordionContent auid="Story">Hello</AccordionContent>);
  const componentNoBg = mount(<AccordionContent auid="Story" bg={false}>Hello</AccordionContent>);

  it('Component Renders', () => {
    expect(component.exists()).toBe(true);
  });
  it('Content is rendered without background', () => {
    expect(componentNoBg.find('.od-accordion-content-no-bg').exists()).toBe(true);
  });
});
